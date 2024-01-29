export const socket = io();

const msg = document.getElementById("message");
const send_btn = document.querySelector(".send-message");
const containerMessage = document.querySelector(".messages");
const urlSearch = new URLSearchParams(window.location.search);
const username = urlSearch.get("user");
const roon = urlSearch.get("roon");

socket.emit(
  "select_roon",
  {
    username,
    roon,
  },
  (messages) => {
    for (let message of messages) {
      rederMessage(message);
    }
  }
);

send_btn.addEventListener("click", () => {
  const message = {
    username,
    roon,
    msg: msg.value,
  };
  socket.emit("message", message);
  msg.value = "";
});

socket.on("message", (message) => {
  rederMessage(message);
});

function rederMessage(message) {
  containerMessage.innerHTML += `
  <div class="message">
    <h3>${message.user}</h3>
    <p>${message.text}</p>
    <span>${message.date}</span>
  </div>`;
}
