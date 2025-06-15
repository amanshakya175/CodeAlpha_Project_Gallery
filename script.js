const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementById("closeBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const images = document.querySelectorAll(".thumbnail");
let currentIndex = 0;

function openModal(index) {
  currentIndex = index;
  modal.style.display = "block";
  modalImg.src = images[index].src;
  captionText.innerHTML = images[index].alt;
}

images.forEach((img, index) => {
  img.addEventListener("click", () => openModal(index));
});

closeBtn.onclick = () => (modal.style.display = "none");

nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % images.length;
  openModal(currentIndex);
};

prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  openModal(currentIndex);
};

window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};
