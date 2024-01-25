const socket = io();

const urlSearch = new URLSearchParams(window.location.search);
const user_name = urlSearch.get("user-name");
const roon = urlSearch.get("select_roon");

socket.emit("select_roon", {
  user_name,
  roon,
});

const sms_text = document.getElementById("msg_text");
const btn_send = document
  .getElementById("send_btn")
  .addEventListener("click", () => {
    const userName = sessionStorage.getItem("chatSession");
    const user_avatar = sessionStorage.getItem("avatar_n");
    const msg = {
      numberAvatar: user_avatar,
      userName: userName,
      msg: sms_text.value,
    };

    socket.emit("message", msg);
    sms_text.value = "";
  });
//
