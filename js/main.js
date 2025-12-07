import Game from './Game.js';
import { popup } from './global.js';
import { context } from './setup.js';

let start;
const game = new Game();

function step(timestamp) {
    if (start === undefined) start = timestamp;

    let dt = (timestamp - start) * 0.001;
    start = timestamp;

    game.update(dt);
    game.render(context);

    requestAnimationFrame(step);
}

requestAnimationFrame(step);

document.addEventListener("keydown", e => game.keydown(e));
document.addEventListener("keyup", e => game.keyup(e));
