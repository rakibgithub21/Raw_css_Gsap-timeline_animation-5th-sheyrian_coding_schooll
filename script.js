let menu = document.querySelector('#nav i')
let cross = document.querySelector('#full i')

// let tl = gsap.timeline({paused:true})
let tl = gsap.timeline()

tl.to("#full", {
    right: 0,
    duration:0.8,
})

tl.from('#full h4', {
    x:100,
    opacity: 0,
    duration: 1,
    stagger:0.3
})


tl.from('#full i', {
    opacity:0
})

tl.pause()

menu.addEventListener('click', function (e) {
    tl.play()
})

cross.addEventListener('click', function () {
    tl.reverse()
})