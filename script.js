document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    const btn = document.getElementById("btn");
    initApp();
  }
});

const initApp = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const rgb = `rgb(${r}, ${g}, ${b})`;
  const main = document.querySelector("main");
  const color = main.querySelector(".color");
  const btn = document.getElementById("btn");
  btn.addEventListener("click", function () {
    color.textContent = rgb;
    main.style.backgroundColor = rgb;
  });
};
