// trazer todos os dados do usuario
const userSessionName = document.getElementById("user_name");
const avatar_img = document.getElementById("avatar_img");
if (!sessionStorage.getItem("chatSession")) {
  open("./signIn.html", "_self");
} else {
  const name = sessionStorage.getItem("chatSession");
  userSessionName.textContent = name;
  avatar_img.innerHTML = `
  <img
  src="./assets/util/image/avatar/avatar${1}.jpg"
  alt=""
  class="avatar_img"
/>
  `;
}
//  quando clicar no sair
const logout = document
  .getElementById("logout_btn")
  .addEventListener("click", () => {
    sessionStorage.removeItem("chatSession");
    open("./signIn.html", "_self");
  });

// eviar sms
const sms_text = document.getElementById("msg_text");
const btn_send = document
  .getElementById("send_btn")
  .addEventListener("click", () => {
    const userName = sessionStorage.getItem("chatSession");
    const user_avatar = sessionStorage.getItem("avatar_n");
    sessionStorage.setItem("avatar_n", user_avatar);
    const msg = {
      numberAvatar: user_avatar,
      userName: userName,
      msg: sms_text.value,
    };

    alert(JSON.stringify(msg));

    sms_text.value = "";
  });

// mostrar sms

let chatMsgs = [
  {
    numberAvatar: 2,
    userName: "Adao Angelo",
    msg: "Hello Edgar como foi o teu dia meu amigo",
  },

  {
    numberAvatar: 1,
    userName: "Edgar paulo",
    msg: "Hello Edgar como foi o teu dia meu amigo",
  },
  {
    numberAvatar: 1,
    userName: "Sandro Panda",
    msg: "Hello Edgar como foi o teu dia meu amigo",
  },
  {
    numberAvatar: 1,
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
