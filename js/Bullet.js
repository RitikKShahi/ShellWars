import fillCircle from './FillCircle.js';
import { canvas } from './setup.js';
import vector2 from './Vector2.js';
import { bullet_radius,BULLET_LIFETIME } from './global.js';
export default class Bullet{
    constructor(pos,vel){
        this.pos=pos
        this.vel=vel
        this.lifetime=BULLET_LIFETIME
    }
    update(dt){
        this.pos= this.pos.add(this.vel.scale(dt))
        // this.lifetime -=dt
        // if(this.lifetime<=0.0){
            
        // }
    }
    render(context){
        fillCircle(context,this.pos.x,this.pos.y,bullet_radius,"indigo")
    }
}