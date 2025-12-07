import { pressedKeys, radius, popup, directionMap,BULLET_SPEED,bulletset } from './global.js';
import { canvas } from './setup.js';
import vector2 from './Vector2.js';
import fillCircle from './FillCircle.js';
import Bullet from './Bullet.js';

export default class Game {
    constructor() {
        this.initialX=canvas.width/2 
        this.initialY=canvas.height/2
        this.PlayerPos = new vector2(this.initialX, this.initialY);
        this.mousePos=new vector2(0,0)
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
        this.PlayerPos = this.PlayerPos.add(vel.scale(dt));
        popup.update(dt);
        if(this.length()){
            this.learnedToMove=true
            popup.fadeOut()
            // shoot_tutorial.fadeIn()
        }
        for(let bullet of bulletset){
            bullet.update(dt)
            bullet.lifetime -= dt;

            if (bullet.lifetime <= 0) {
                console.log(bullet)
                bulletset.delete(bullet);
        }
        }

    }

    render(context) {
        const width = context.canvas.width;
        const height = context.canvas.height;
        context.clearRect(0, 0, width, height);

        fillCircle(context, this.PlayerPos.x, this.PlayerPos.y, radius, "indigo");

        popup.render(context);
        for(let bullet of bulletset){
            bullet.render(context)
        }
    }

    keydown(event) {
        pressedKeys.add(event.code);
    }

    keyup(event) {
        pressedKeys.delete(event.code);
    }
    length(){
        return (this.PlayerPos.x -this.initialX)!=0 || (this.PlayerPos.y -this.initialY)!=0
    }
    mouseMove(event){
        // this.mousePos=new vector2(event.offsetX,event.offsetY)
    }
    mouseDown(e){
        const mousePos= new vector2(e.offsetX,e.offsetY);
        const bulletVel=(mousePos.sub
        (this.PlayerPos))
            .normalize()
            .scale(BULLET_SPEED)
        
        bulletset.add(new Bullet(this.PlayerPos,bulletVel))
    }
}
