import TutorialPopup from './TutorialPopup.js'
import vector2 from './Vector2.js'
export const radius=50
export const speed=1000;
export let directionMap={
    'ArrowUp': new vector2(0,-speed),
    'ArrowDown': new vector2(0,speed),
    'ArrowLeft': new vector2(-speed,0),
    'ArrowRight': new vector2(speed,0),
}
export let pressedKeys=new Set()
export const popup=new TutorialPopup()
