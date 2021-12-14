const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

function rightSlide(classNm, time) {
  let currentSlide = document.querySelector(`.${classNm} .slide.active`);
  let nextSlide = currentSlide.nextElementSibling;
  if (nextSlide === null) {
    nextSlide = currentSlide.parentElement.firstElementChild;
  }
  currentSlide.animate(
    {
      opacity: [1, 0],
    },
    {
      duration: time,
      easing: "ease",
      iterations: 1,
      fill: "both",
    }
  );
  currentSlide.classList.remove("active");
  nextSlide.animate(
    {
      opacity: [0, 1],
    },
    {
      duration: time,
      easing: "ease",
      iterations: 1,
      fill: "both",
    }
  );
  nextSlide.classList.add("active");
}

function leftSlide(classNm, time) {
  let currentSlide = document.querySelector(`.${classNm} .slide.active`);
  let previousSlide = currentSlide.previousElementSibling;
  if (previousSlide === null) {
    previousSlide = currentSlide.parentElement.lastElementChild;
  }
  currentSlide.animate(
    {
      opacity: [1, 0],
    },
    {
      duration: time,
      easing: "ease",
      iterations: 1,
      fill: "both",
    }
  );
  currentSlide.classList.remove("active");
  previousSlide.animate(
    {
      opacity: [0, 1],
    },
    {
      duration: time,
      easing: "ease",
      iterations: 1,
      fill: "both",
    }
  );
  previousSlide.classList.add("active");
}

let id1 = setInterval(() => {
  rightSlide("click-slider", 500);
}, 3000);

rightArrow.addEventListener("click", () => {
  rightSlide("click-slider", 500);
  clearInterval(id1);
  id1 = setInterval(() => {
    rightSlide("click-slider", 500);
  }, 3000);
});

leftArrow.addEventListener("click", () => {
  leftSlide("click-slider", 500);
  clearInterval(id1);
  id1 = setInterval(() => {
    rightSlide("click-slider", 500);
  }, 3000);
});

setInterval(() => {
  rightSlide("news-slider", 500);
}, 4000);
