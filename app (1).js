const form = document.getElementById("messageForm");
const messagesDiv = document.getElementById("messages");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const area = document.getElementById("area").value;
  const message = document.getElementById("message").value;
  const color = document.getElementById("color").value;

  const msgDiv = document.createElement("div");
  msgDiv.className = "msg";
  msgDiv.style.borderLeft = "4px solid " + color;

  msgDiv.innerHTML = `<strong>To ${name || "Someone"}</strong>, "${message}" - ${area}`;

  messagesDiv.appendChild(msgDiv);

  form.reset();
});

function filterMessages() {
  const search = document.getElementById("search").value.toLowerCase();
  const messages = document.querySelectorAll(".msg");

  messages.forEach(msg => {
    const text = msg.innerText.toLowerCase();
    msg.style.display = text.includes(search) ? "block" : "none";
  });
}