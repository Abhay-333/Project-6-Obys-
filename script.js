var incH4 = document.querySelector('.line-part1 h4')
var counter = 0
var time = gsap.timeline()

gsap.from(".line1 h1", {
    y: 100,
    opacity: 0,
    stagger: 0.2,
    delay: 0.5,
})

time.from(".line1 h4", {
    opacity: 0,
    delay: 1,
    onStart: function () {

        var clear
        clear = setInterval(function () {
            if (counter < 100) {
                counter++
                incH4.innerHTML = counter
            }
            else {
                incH4.innerHTML = 100
                clearInterval(clear)
            }
        }, 30)
    }

})

time.to(".loading-screen h1, h4",{
    opacity:0,
    duration:1,
    delay:2.8,
})

time.to(".loading-screen",{
    y:-1000,
    duration:0.8,
    display: "none"
})

time.to(".line1 span",{
    opacity:0,
    duration:0.1,
})
