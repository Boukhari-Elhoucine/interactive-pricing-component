const slider = document.getElementById("slider");
const output = document.querySelector(".main__box__up__value");
const cb = document.querySelector("input[type='checkbox']");
const view = document.getElementById("view");
const views = ["10k", "50k", "100k", "500k", "1M"];
const values = [8, 12, 16, 24, 36];
output.innerHTML = `\$${values[slider.value]}`;
view.innerText = views[slider.value];
slider.oninput = function () {
  let number = values[this.value];
  view.innerText = views[this.value];
  if (cb.checked) {
    output.innerHTML = `\$${number * 0.25}`;
  } else {
    output.innerHTML = `\$${number}`;
  }
  let percentage = this.value * 25;
  let color = `linear-gradient(90deg, hsl(174, 86%, 45%) ${percentage}%, hsl(174, 77%, 80%) ${percentage}%)`;
  slider.style.background = color;
};
cb.addEventListener("change", function () {
  let number = values[slider.value];
  if (this.checked) {
    output.innerHTML = `\$${number * 0.25}`;
  } else {
    output.innerHTML = `\$${number}`;
  }
});
