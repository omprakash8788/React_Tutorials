// script.js
const callButton = document.getElementById('callButton');
const hangupButton = document.getElementById('hangupButton');

let localStream;
let remoteStream;
let peerConnection;

callButton.addEventListener('click', startCall);
hangupButton.addEventListener('click', hangUp);

async function startCall() {
  try {
    localStream = await navigator.mediaDevices.getUserMedia({ audio: true });

    // Create an offer and set up the peer connection
    peerConnection = new RTCPeerConnection();
    localStream.getTracks().forEach(track => peerConnection.addTrack(track, localStream));
    peerConnection.createOffer()
      .then(offer => peerConnection.setLocalDescription(offer))
      .then(() => {
        // Send the offer to the other user (signaling step)
        // You would implement your own signaling mechanism here
      });

    peerConnection.onicecandidate = event => {
      // Send ICE candidates to the other user (signaling step)
      // You would implement your own signaling mechanism here
    };

    peerConnection.ontrack = event => {
      remoteStream = event.streams[0];
      // Display remote audio stream in the UI
      // You would implement the UI update here
    };
  } catch (error) {
    console.error('Error starting call:', error);
  }
}

function hangUp() {
  // Close the peer connection, stop tracks, and clean up
  if (peerConnection) {
    peerConnection.close();
  }
  if (localStream) {
    localStream.getTracks().forEach(track => track.stop());
  }
  if (remoteStream) {
    remoteStream.getTracks().forEach(track => track.stop());
  }
  // Update the UI to reflect the call state
}
