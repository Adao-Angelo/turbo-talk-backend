export const socket = io();

const msg = document.getElementById("msg_text");
const send_btn = document.getElementById("send_btn");

const urlSearch = new URLSearchParams(window.location.search);
const username = urlSearch.get("user-name");
const roon = urlSearch.get("select_roon");

socket.emit(
  "select_roon",
  {
    username,
    roon,
  },
  (response) => {
    console.log(response);
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
