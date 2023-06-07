console.log("initialized");
const roomName = JSON.parse(document.getElementById('room-name').textContent);
var mapPeers = {};

var labelusername = document.querySelector("#label-username");

var usernameInput = document.getElementById("username");

const btnToggleAudio = document.getElementById("btn-toggle-audio");

const btnToggleVideo = document.getElementById("btn-toggle-video");

var btnJoin = document.querySelector("#btn-join");

var msgInput = document.getElementById("msg");

var msgBtn = document.getElementById("btn-send-msg");

var msgBox = document.getElementById("message-list");

var websocket;

var username;
btnJoin.addEventListener("click", (e) => {
    username = usernameInput.value;
    if (username == "") {
        return;
    } else {
        usernameInput.value = "";
        usernameInput.disabled = true;
        usernameInput.style.visibility = "hidden";
        btnJoin.disabled = true;
        btnJoin.style.visibility = "hidden";
        labelusername.innerHTML = username;
    }

    var loc = window.location;
    var wsStart = "ws://";

    if (loc.protocol == "https:") {
        wsStart = "wss://";
    }
    const endPoint = wsStart + window.location.host + '/ws/chat/' + roomName + '/'


    const addLocalTracks = (peer) => {
        localStream.getTracks().forEach((track) => {
            peer.addTrack(track, localStream);
        });
        return;
    };
    function createAnswerer(offer, Peerusername, receiver_channel_name) {
        console.log('inside answer')
        var peer = new RTCPeerConnection(null);
        addLocalTracks(peer);
        console.log('answer peer', peer)
        var remoteVideo = createVideo(Peerusername);
        setOnTrack(peer, remoteVideo);

        peer.ondatachannel = (event) => {
            const channel = event.channel;
            channel.onopen = (event) => {
              channel.send("Hi back!");
            };
            channel.onmessage = (event) => {
              console.log(event.data);
            };
          };

        peer.addEventListener("iceconnectionstatechange", () => {
            var iceconnectionstatechange = peer.iceConnectionState;
            if (
                iceconnectionstatechange == "failed" ||
                iceconnectionstatechange == "disconnected" ||
                iceconnectionstatechange == "closed"
            ) {
                delete mapPeers[Peerusername];

                if (iceconnectionstatechange != "closed") {
                    peer.close();
                }
                remoteVideo(remoteVideo);
            }
        });

        peer.addEventListener("icecandidate", (event) => {
            if (event.candidate) {
                console.log(
                    "New Ice Candidate : ",
                    JSON.stringify(peer.localDescription)
                );
                return;
            }

            sendSignal("new-answer", {
                sdp: peer.localDescription,
                receiver_channel_name: receiver_channel_name,
            });
        });

        peer.setRemoteDescription(offer)
            .then(() => {
                console.log(`remote description set succesfully for ${Peerusername}`);
                return peer.createAnswer();
            })
            .then((e) => {
                console.log("answer created");
                peer.setLocalDescription(e);
            });
    }
    const createOffer = (Peerusername, receiver_channel_name) => {
        console.log('inside offer')
        var peer = new RTCPeerConnection(null);
        addLocalTracks(peer);

        var dc = peer.createDataChannel("chat");
        dc.onopen = (event) => {
            dc.send("Hi you!");
        };
        dc.onmessage = (event) => {
            console.log(event.data);
        };

        var remoteVideo = createVideo(Peerusername);
        setOnTrack(peer, remoteVideo);

        mapPeers[Peerusername] = [peer, dc];

        peer.addEventListener("iceconnectionstatechange", () => {
            var iceconnectionstatechange = peer.iceConnectionState;
            if (
                iceconnectionstatechange == "failed" ||
                iceconnectionstatechange == "disconnected" ||
                iceconnectionstatechange == "closed"
            ) {
                delete mapPeers[Peerusername];

                if (iceconnectionstatechange != "closed") {
                    peer.close();
                }
                remoteVideo(remoteVideo);
            }
        });

        peer.addEventListener("icecandidate", (event) => {
            if (event.candidate) {
                console.log(
                    "New Ice Candidate : ",
                    JSON.stringify(peer.localDescription)
                );
                return;
            }

            sendSignal("new-offer", {
                sdp: peer.localDescription,
                receiver_channel_name: receiver_channel_name,
            });
        });

        peer
            .createOffer()
            .then((e) => peer.setLocalDescription(e))
            .then(() => {
                console.log("local descripiton");
            });
    };

    const webSocketOnMessage = (e) => {
        var parseData = JSON.parse(e.data);
        var message = parseData["message"];
        var action = parseData["action"];
        var Peerusername = parseData["peer"];
        if (username == Peerusername) {
            return;
        }
        var receiver_channel_name = parseData["message"]["receiver_channel_name"];
        if (action == "new-peer") {
            createOffer(Peerusername, receiver_channel_name);
            return;
        }
        if (action == "new-offer") {
            var offer = parseData["message"]["sdp"];
            createAnswerer(offer, Peerusername, receiver_channel_name);
            return;
        }
        if (action == "new-answer") {
            var answer = parseData["message"]["sdp"];
            var peer = mapPeers[Peerusername][0];

            peer.setRemoteDescription(answer);

            return;
        }
        if(action == "new-msg"){
            var msg = parseData['message']['msg'];
            li = document.createElement('li')
            console.log(mapPeers)
            li.innerHTML = msg
            msgBox.appendChild(li)
            console.log()
        }

    };

    websocket = new WebSocket(endPoint);

    const SendMessage = () => {
        var jsonStr = JSON.stringify({
            message: {msg:msgInput.value},
            action: "new-msg"
        });
        websocket.send(jsonStr);
    };

    msgBtn.addEventListener("click", () => {
        SendMessage();
    });

    websocket.addEventListener("open", (e) => {
        console.log("connection opened");
        sendSignal("new-peer", {});
    });

    websocket.addEventListener("message", webSocketOnMessage);

    websocket.addEventListener("close", (e) => {
        console.log("Connection closed");
    });

    websocket.addEventListener("error", (e) => {
        console.log("Error Occured", e);
    });
});

var localStream = new MediaStream();
const constraints = {
    video: true,
    audio: true,
};

const localVideo = document.querySelector("#local-video");

var userMedia = navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
        localStream = stream;
        localVideo.srcObject = localStream;
        localVideo.muted = true;
        var audioTracks = stream.getAudioTracks();
        var videoTracks = stream.getVideoTracks();

        audioTracks[0].enabled = true;

        videoTracks[0].enabled = true;

        btnToggleAudio.addEventListener("click", () => {
            audioTracks[0].enabled = !audioTracks[0].enabled;

            if (audioTracks[0].enabled) {
                btnToggleAudio.innerHTML = "Audio Mute";
            } else {
                btnToggleAudio.innerHTML = "Audio UnMute";
            }
        });
        btnToggleVideo.addEventListener("click", () => {
            videoTracks[0].enabled = !videoTracks[0].enabled;

            if (videoTracks[0].enabled) {
                btnToggleVideo.innerHTML = "Video Off";
            } else {
                btnToggleVideo.innerHTML = "Video On";
            }
        });
    })
    .catch((error) => {
        alert(error);
    });

function sendSignal(action, message) {
    var jsonStr = JSON.stringify({
        peer: username,
        action: action,
        message: message,
    });
    websocket.send(jsonStr);
}

const createVideo = (Peerusername) => {
    var videoContainer = document.querySelector("#video-container");

    var remoteVideo = document.createElement("video");

    remoteVideo.id = Peerusername + "-video";
    remoteVideo.autoplay = true;
    remoteVideo.playsInline = true;

    var videowrapper = document.createElement("div");
    videoContainer.appendChild(videowrapper);

    videowrapper.appendChild(remoteVideo);
    return remoteVideo;
};

function setOnTrack(peer, remoteVideo) {
    var remoteStream = new MediaStream();

    remoteVideo.srcObject = remoteStream;

    peer.addEventListener("track", async (event) => {
        remoteStream.addTrack(event.track, remoteStream);
    });
}














