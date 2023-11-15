const rippleElements = document.getElementsByClassName("ripple");

for (let i = 0; i < rippleElements.length; i++) {
  const element = rippleElements[i];

  element.addEventListener("mousemove", (e) => {
    const rect = element.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / element.clientWidth) * 100;
    const y = ((e.clientY - rect.top) / element.clientHeight) * 100;

    element.style.background = `radial-gradient(circle closest-corner 
    at ${x}% ${y}%,
    var(--ripple-color), var(--bg-color))`;
  });

  element.addEventListener("mouseleave", (event) => {
    element.style.removeProperty("background");
  });
}
