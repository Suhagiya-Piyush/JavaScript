const inputField = document.querySelector("#text-field");
const wordsCounter = document.querySelector("#words-counter");

inputField.addEventListener("input", function (val) {
  const value = val.target.value;
  const words = value.split(/\s+/).filter((item) => item.length);
  wordsCounter.textContent = words.length;
});