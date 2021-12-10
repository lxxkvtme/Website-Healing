let orang = document.getElementsByClassName("img-focus")[0];

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  orang.style.top = `${value * 0.2}px`;
});
