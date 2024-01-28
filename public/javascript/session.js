const userName = document.getElementById("user-name");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const userSession = userName.value;
  //
  sessionStorage.setItem("chatSession", userSession);
});

if (sessionStorage.getItem("chatSession")) {
  open("./index.html", "_self");
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
