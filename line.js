(()=>{
    console.log("Namaste Duniya")
    var c=document.getElementById("game")
    var ctx=c.getContext("2d")
    ctx.moveTo(0,0)
    ctx.lineTo(c.width,c.height)
    ctx.stroke()
})()