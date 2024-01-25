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

let chatMsgs = [
  {
    numberAvatar: 2,
    userName: "Adao Angelo",
    msg: "Hello Edgar como foi o teu dia meu amigo",
  },
  {
    numberAvatar: 2,
    userName: "Adao Angelo",
    msg: "Hello Edgar como foi o teu dia meu amigo",
  },
  {
    numberAvatar: 2,
    userName: "Adao Angelo",
    msg: "Hello Edgar como foi o teu dia meu amigo",
  },
];

function renderMsg(msgs) {
  const chat = document.getElementById("chatb");
  for (let msg of msgs) {
    if (msg.userName == sessionStorage.getItem("chatSession")) {
      chat.innerHTML += `
      <div class="msg my">
      <div class="msg_user_avatar">
        <img
          src="./assets/util/image/avatar/avata${msg.numberAvatar}.jpg"
          alt=""
          class="avatar_img"
        />
      </div>
      <div class="msg_content">
        <h3 class="msg_user_name">${msg.userName}</h3>
        <p>
           ${msg.msg}
        </p>
      </div>
    </div>
          `;
    } else {
      chat.innerHTML += `
    <div class="msg">
    <div class="msg_user_avatar">
      <img
        src="./assets/util/image/avatar/avatar${msg.numberAvatar}.jpg"
        alt=""
        class="avatar_img"
      />
    </div>
    <div class="msg_content">
      <h3 class="msg_user_name">${msg.userName}</h3>
      <p>
         ${msg.msg}
      </p>
    </div>
  </div>
        `;
    }
  }
}

renderMsg(chatMsgs);
