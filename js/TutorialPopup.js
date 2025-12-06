class TutorialPopup{
    constructor(){
        this.alpha=0.0
        this.dalpha=0.0
    }
    update(dt){

    }
    render(context){

    }
    fadeIn(){
        this.alpha=0.0
        this.dalpha=1.0
    }
    fadeout(){
        this.alpha=1.0
        this.dalpha=-1.0
    }
}
export default TutorialPopup;