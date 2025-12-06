function fillCircle(context,x,y,radius,color="green"){
    context.beginPath()
    context.arc(x,y,radius,0,2*Math.PI)
    context.fillStyle=color
    context.fill()
}

// function v2(x,y){
//     return {x,y}
// }
// function addv2(v1,v2){
//     return v2(v1.x+v2.x,v1.y+v2.y)
// }
// function scalev2(v,s){
//     return v2(v.x *s,v.y *s)
// }

class v2{
    constructor(x,y){
        this.x=x
        this.y=y
    }
    add(that){
        return new v2(this.x +that.x,this.y +that.y)
    }
    sub(that){
        return new v2(this.x -that.x,this.y -that.y)
    }
    scale(s){
        return new v2(this.x *s,this.y *s)
    }
}

(()=>{
    var canvas=document.getElementById("game")
    var context=canvas.getContext("2d")
    let radius=50
    let pos=new v2(radius+10,radius+10)
    let vel=new v2(0,0)
    let dx=0
    let dy=0
    let start
    const speed=1000
    let directionMap={
        'ArrowUp': new v2(0,-speed),
        'ArrowDown': new v2(0,speed),
        'ArrowLeft': new v2(-speed,0),
        'ArrowRight': new v2(speed,0),
    }
    function step(timestamp){

        if(start===undefined){
            start=timestamp
        }
        const dt=(timestamp-start)*0.001
        start=timestamp

        var width=window.innerWidth
        var height=window.innerHeight
        canvas.width = width
        canvas.height = height


        pos=pos.add(vel.scale(dt))
        context.clearRect(0,0,width,height)
        fillCircle(context,pos.x,pos.y,radius,"red")
        requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
    document.addEventListener('keydown',event =>{
        if(event.code in directionMap){
            vel=vel.add(directionMap[event.code])
        }
        else if(event.code==='Space'){
            vel=new v2(0,0)
        }
    })
    document.addEventListener('keyup',event =>{
        if(event.code in directionMap){
            vel=vel.sub(directionMap[event.code])
        }
    })
    context.stroke()

})()