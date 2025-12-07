import { canvas } from './setup.js';

class TutorialPopup {
    constructor(text) {
        this.text = text;
        this.dalpha=0.0
        this.alpha=0.0
        this.controller=0.5
    }

    update(dt) {
        this.alpha+=(this.dalpha*dt*this.controller)
        if(this.alpha>=1.0){
            this.dalpha=0.0
            this.alpha=1.0
        } else if(this.alpha<0.0){
            this.alpha=0.0
            this.dalpha=0.0
        }
    }

    render(context) {
        const width = context.canvas.width;
        const height = context.canvas.height;
        context.font = "40px Bitcount Prop Single";
        context.fillStyle = `rgba(255,255,255,${this.alpha})`;
        context.textAlign="center"
        context.fillText(this.text,width/2,height/2);
    }
    fadeIn(){
        this.dalpha=  1.0
    }
    fadeOut(){
        this.dalpha= -1.0
    }
}

export default TutorialPopup;
