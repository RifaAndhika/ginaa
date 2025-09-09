const btn = document.getElementById("btnLove");
const popup = document.getElementById("popup");
const heartsContainer = document.getElementById("hearts-container");

btn.addEventListener("click", () => {
  popup.style.display = "block";
  btn.innerText = "💖 Terima Kasih 💖";

  // Mulai efek love jatuh
  setInterval(createHeart, 300);
});

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "💖";

  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.animationDuration = 2 + Math.random() * 3 + "s"; // kecepatan random

  document.body.appendChild(heart);

  // Hapus love setelah 5 detik biar ga numpuk
  setTimeout(() => {
    heart.remove();
  }, 5000);
}
