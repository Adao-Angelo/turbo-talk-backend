const userName = document.getElementById("user-name");
const form = document.getElementById("form");

form.addEventListener("submit", () => {
  const userSession = userName.value;
  //
  sessionStorage.setItem("chatSession", userSession);
  open("./index.html", "_self");
});
