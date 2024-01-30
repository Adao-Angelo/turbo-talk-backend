export const socket = io();

const msg = document.getElementById("message");
const logout = document.querySelector(".logout");
const send_btn = document.querySelector(".send-message");
const containerMessage = document.querySelector(".messages");
const urlSearch = new URLSearchParams(window.location.search);
const username = urlSearch.get("user");
const text_roon = document.querySelector(".roon2");
const roon = urlSearch.get("roon");

socket.emit(
  "select_roon",
  {
    username,
    roon,
  },
  (messages) => {
    text_roon.innerHTML = messages[0].roon;
    for (let message of messages) {
      rederMessage(message);
    }
  }
);

send_btn.addEventListener("click", () => {
  if (msg.value == "") {
    alert("write a message");
  } else {
    const message = {
      username,
      roon,
      msg: msg.value,
    };
    socket.emit("message", message);
    msg.value = "";
  }
});

msg.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    if (msg.value == "") {
      alert("write a message");
    } else {
      const message = {
        username,
        roon,
        msg: msg.value,
      };
      socket.emit("message", message);
      msg.value = "";
    }
  }
});

socket.on("message", (message) => {
  rederMessage(message);
});

function rederMessage(message) {
  window.scrollTo(0, 1000000);
  if (message.user == username) {
    containerMessage.innerHTML += `
    <div class="message your">
      <h3>${message.user}</h3>
      <p>${message.text}</p>
      <span>${message.date}</span>
    </div>`;
  } else {
    containerMessage.innerHTML += `
  <div class="message">
    <h3>${message.user}</h3>
    <p>${message.text}</p>
    <span>${message.date}</span>
  </div>`;
  }
}

logout.addEventListener("click", () => {
  open("Sign-In.html", "_self");
});
