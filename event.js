function clicked() {
    console.log("the button was clicked")
}

window.onload = function () {
    console.log("the window was loadded")
}

firstcontainer.addEventListener("click", function () {
    console.log("clicked on container")
})

firstcontainer.addEventListener('mouseover', function () {
    console.log("mouse on container")
})

firstcontainer.addEventListener('mouseout', function () {
    console.log("mouse out from container")
})

firstcontainer.addEventListener('mouseup', function () {
    console.log("mouse clicked on container")
})

firstcontainer.addEventListener('mousedown', function () {
    console.log("mouse holded on container")
})