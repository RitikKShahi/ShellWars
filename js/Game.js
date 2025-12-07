import { pressedKeys, radius, popup, directionMap } from './global.js';
import { canvas } from './setup.js';
import vector2 from './Vector2.js';
import fillCircle from './FillCircle.js';

export default class Game {
    constructor() {
        this.initialX=innerWidth/2 -16
        this.initialY=innerHeight/2 -80
        this.pos = new vector2(this.initialX, this.initialY);
        popup.fadeIn();
        this.learnedToMove=false;
    }

    update(dt) {
        let vel = new vector2(0, 0);

        for (let key of pressedKeys) {
            if (key in directionMap) {
                vel = vel.add(directionMap[key]);
            }
        }

        this.pos = this.pos.add(vel.scale(dt));
        popup.update(dt);
        if(this.length()){
            this.learnedToMove=true
            popup.fadeOut()
        }

    }

    render(context) {
        context.clearRect(0, 0, canvas.width, canvas.height);

        fillCircle(context, this.pos.x, this.pos.y, radius, "indigo");

        popup.render(context);
    }

    keydown(event) {
        pressedKeys.add(event.code);
    }

    keyup(event) {
        pressedKeys.delete(event.code);
    }
    length(){
        return (this.pos.x -this.initialX)!=0 || (this.pos.y -this.initialY)!=0
    }
}
