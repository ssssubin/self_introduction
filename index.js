window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  let scrollY = this.scrollY;
  if (scrollY >= 77) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

// 5초마다 2개의 인사말을 바꿔가며 보여주기 위해 toggle 사용
const produce = document.querySelectorAll(".produce");
setInterval(() => {
  for (let i = 0; i < 2; i++) {
    produce[i].classList.toggle("active");
  }
}, 5000);
