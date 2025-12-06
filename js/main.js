import TutorialPopup from './TutorialPopup.js'
import vector2 from './Vector2.js'
import  fillCircle  from './FillCircle.js'
import { directionMap,popup,pressedKeys,speed,radius } from './global.js'
(()=>{
    var canvas=document.getElementById("game")
    var context=canvas.getContext("2d")
    let start;
    let pos=new vector2(radius+10,radius+75)
    function step(timestamp){

        if(start===undefined){
            start=timestamp
        }
        let dt=(timestamp-start)*0.001
        start=timestamp
        popup.update(dt)

        var width=window.innerWidth
        var height=window.innerHeight
        canvas.width = width
        canvas.height = height
        let vel=new vector2(0,0)
        for (let key of pressedKeys){
        if(key in directionMap){
            vel=vel.add(directionMap[key])
        }
        }
        pos=pos.add(vel.scale(dt))
        context.clearRect(0,0,width,height)
        fillCircle(context,pos.x,pos.y,radius,"indigo")

        popup.render(context)

        context.font = "50px Bitcount Prop Single";
        context.fillStyle = "indigo";
        context.fillText("Movement List - ⬆️⬇️⬅️➡️",10,55);

        requestAnimationFrame(step)

    }
    requestAnimationFrame(step)
    document.addEventListener('keydown',event =>{
        pressedKeys.add(event.code)
        
    })
    document.addEventListener('keyup',event =>{
        pressedKeys.delete(event.code)
    })

    context.stroke()

})()