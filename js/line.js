(()=>{
    console.log("Namaste Duniya")
    var c=document.getElementById("game")
    var ctx=c.getContext("2d")
    ctx.moveTo(0,0)
    ctx.lineTo(c.width,c.height)
    ctx.stroke()
})()

// function v2(x,y){
//     return {x,y}
// }
// function addv2(v1,v2){
//     return v2(v1.x+v2.x,v1.y+v2.y)
// }
// function scalev2(v,s){
//     return v2(v.x *s,v.y *s)
// }