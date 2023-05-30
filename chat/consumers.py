# chat/consumers.py
import json

from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer


class ChatConsumer(WebsocketConsumer):
    def connect(self):
        self.room_name = self.scope["url_route"]["kwargs"]["room_name"]
        self.room_group_name = "chat_%s" % self.room_name

        # Join room group
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name, self.channel_name
        )

        self.accept()

    def disconnect(self, close_code):
        # Leave room group
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name, self.channel_name
        )

        print('Disconnected')
    # Receive message from WebSocket

    def receive(self, text_data):
        receive_dict = json.loads(text_data)
        message = receive_dict["message"]
        action = receive_dict['action']
        print(action)
        if (action == "new-offer" or action == "new-answer"):
            receiver_channel_name = receive_dict['message']['receiver_channel_name']
            receive_dict['message']['receiver_channel_name'] = self.channel_name
            async_to_sync(self.channel_layer.send)(
                receiver_channel_name, {
                    "type": "chat_message", "receive_dict": receive_dict}
            )
            return
        print(receive_dict)
        
        receive_dict['message']['receiver_channel_name'] = self.channel_name

        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name, {"type": "chat_message", "receive_dict": receive_dict}
        )

    # Receive message from room group
    def chat_message(self, event):
        receive_dict = event["receive_dict"]
        print(receive_dict)
        # Send message to WebSocket
        self.send(text_data=json.dumps(receive_dict))
