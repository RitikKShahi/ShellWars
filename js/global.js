import vector2 from './Vector2.js';
import TutorialPopup from './TutorialPopup.js';

export const radius = 62;
export const bullet_radius = 42;
export const speed = 1000;
export const BULLET_SPEED=2000;
export const BULLET_LIFETIME=5.0;
export let directionMap = {
    "ArrowUp": new vector2(0, -speed),
    "ArrowDown": new vector2(0, speed),
    "ArrowLeft": new vector2(-speed, 0),
    "ArrowRight": new vector2(speed, 0)
};

export let pressedKeys = new Set();
export let bulletset= new Set()
export const popup = new TutorialPopup("Use Arrow keys for movement");
// export const shoot_tutorial = new TutorialPopup("Use Mouse clicks for shooting");
//message---->Movement Keys: ⬆️ ⬇️ ⬅️ ➡️
