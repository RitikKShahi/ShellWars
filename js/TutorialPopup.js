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
        context.font = "40px Bitcount Prop Single";
        context.fillStyle = `rgba(255,255,255,${this.alpha})`;
        context.textAlign="center"
        context.fillText(this.text,innerWidth/2,innerHeight/2);
    }
    fadeIn(){
        this.dalpha=  1.0
    }
    fadeOut(){
        this.dalpha= -1.0
    }
}

export default TutorialPopup;
