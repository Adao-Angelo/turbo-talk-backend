import { socket } from "./chat.js";

const userSessionName = document.getElementById("user_name");
const avatar_img = document.getElementById("avatar_img");

const logout = document
  .getElementById("logout_btn")
  .addEventListener("click", () => {
    sessionStorage.removeItem("chatSession");
    open("./signIn.html", "_self");
  });
const logout2 = document
  .getElementById("logout_btn2")
  .addEventListener("click", () => {
    sessionStorage.removeItem("chatSession");
    open("./signIn.html", "_self");
  });

let chatMsgs = [];
const chat = document.getElementById("chatb");
socket.on("message", (message) => {
    const msg = message
    if (msg.userName == sessionStorage.getItem("chatSession")) {
      chat.innerHTML += `
      <div class="msg my">
      <div class="msg_user_avatar">
        <img
          src="./assets/util/image/avatar/avata${"depis"}.jpg"
          alt=""
          class="avatar_img"
        />
      </div>
      <div class="msg_content">
        <h3 class="msg_user_name">${msg.username}</h3>
        <p>
           ${msg.text}
        </p>
      </div>
    </div>
          `;
    } else {
      chat.innerHTML += `
    <div class="msg">
    <div class="msg_user_avatar">
      <img
        src="./assets/util/image/avatar/avatar${"depois"}.jpg"
        alt=""
        class="avatar_img"
      />
    </div>
    <div class="msg_content">
      <h3 class="msg_user_name">${msg.username}</h3>
      <p>
         ${msg.text}
      </p>
    </div>
  </div>
        `;
    }
});
console.log(chatMsgs);
