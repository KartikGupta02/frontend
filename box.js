function box1() {
    alert("Outer Box Clicked")
}
function box2(event) {
    event.stopPropagation()
        alert("Inner Box1 Clicked")
}
function box3(event) {
    event.stopPropagation()
        alert("Inner Box2 Clicked")
}