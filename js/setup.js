export const canvas = document.getElementById("game");
export const context = canvas.getContext("2d");

// set once — avoid clearing canvas every frame
function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resize();
window.addEventListener("resize", resize);
