const socket = io();

const urlSearch = new URLSearchParams(window.location.search);
const username = urlSearch.get("user-name");
const roon = urlSearch.get("select_roon");

socket.emit("select_roon", {
  username,
  roon,
});
