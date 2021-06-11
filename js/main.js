window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas")
    const ctx = canvas.getContext("2d")
    resizeCanvas(canvas)
    // ctx.fillStyle = "green"
    // ctx.fillRect(10,10,100,100)
    // ctx.strokeStyle = "black"
    // ctx.lineWidth = "5"
    // ctx.strokeRect(50,50,100,100)
    // ctx.beginPath()
    // ctx.moveTo(100,100)
    // ctx.lineTo(200,100)
    // ctx.lineTo(200,200)
    // ctx.closePath()
    // ctx.stroke()

    // Variable
    let painting = false

    function startPosition(e) {
        painting = true
        draw(e)
    }

    function finishedPosition() {
        painting = false
        ctx.beginPath()
    }

    function draw(e) {
        if(!painting) return;
        ctx.lineWidth = 10;
        ctx.lineCap = "round"

        ctx.lineTo(e.clientX,e.clientY)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(e.clientX, e.clientY)
      }
    // Event Listeners

    canvas.addEventListener("mousedown", startPosition)
    canvas.addEventListener("mouseup", finishedPosition)
    canvas.addEventListener("mousemove", draw)
})

window.addEventListener("resize", () => {
    const canvas = document.querySelector("#canvas")
    resizeCanvas(canvas)
})

function resizeCanvas(canvas) {
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
}