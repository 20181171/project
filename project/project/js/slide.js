const slider = document.querySelector(".slider");
const slides = slider.querySelector(".slides");
const slide = slides.querySelectorAll(".slide");

const progressBarFill = document.querySelector(".progress-bar-fill");

const left = document.querySelector(".progress-bar-btn .left");
const right = document.querySelector(".progress-bar-btn .right");

let currentSlide = 0;
const slideCount = slide.length;

function slideAni(from, to) {
  slides.animate(
    {
      marginLeft: [from + "vw", to + "vw"],
    },
    {
      duration: 500,
      easing: "ease",
      iterations: 1,
      fill: "both",
    }
  );
}

function leftSlideAni() {
  let from;
  let to;
  if (currentSlide === 0) {
    from = -(100 * currentSlide);
    to = -(100 * (slideCount - 1));
    currentSlide = slideCount;
  } else {
    from = -(100 * currentSlide);
    to = from + 100;
  }

  slideAni(from, to);
  currentSlide--;
  progressBarFill.style.width = `${((currentSlide + 1) / slideCount) * 100}%`;
}

function rightSlideAni() {
  let from;
  let to;
  if (currentSlide === slideCount - 1) {
    from = -(100 * currentSlide);
    to = 0;
    currentSlide = -1;
  } else {
    from = -(100 * currentSlide);
    to = from - 100;
  }

  slideAni(from, to);
  currentSlide++;
  progressBarFill.style.width = `${((currentSlide + 1) / slideCount) * 100}%`;
}

let time = setInterval(function () {
  rightSlideAni();
}, 3000);

left.addEventListener("click", () => {
  clearInterval(time);
  leftSlideAni();
  time = setInterval(function () {
    rightSlideAni();
  }, 3000);
});

right.addEventListener("click", () => {
  clearInterval(time);
  rightSlideAni();
  time = setInterval(function () {
    rightSlideAni();
  }, 3000);
});
