var incH4 = document.querySelector('.line-part1 h4')
var counter = 0
var time = gsap.timeline()
var time1 = gsap.timeline()
var cursor = document.querySelector(".cursor")
var page2Video = document.querySelector(".page2-video")
var p2Video = document.querySelector(".page2-video video")
var p2Videocrs = document.querySelector(".page2-video-cursor")
var flag = document.querySelector("#flag")
var web = document.querySelector("#web")
var graphic = document.querySelector("#graphic")
var texti = document.querySelector("#textillate")
var h1content;
var splitText;
var clutter = "";

if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
function loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
function loading() {
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

            clear = setInterval(function () {
                var clear
                if (counter < 100) {
                    counter++
                    incH4.innerHTML = counter
                }
                else {
                    // incH4.innerHTML = 100
                    clearInterval(clear)
                }
            }, 30)
        }

    })

    time.to(".loading-screen h1, .loading-screen h4", {
        opacity: 0,
        duration: 1,
        delay: 2.8,
    })

    time.to(".loading-screen", {
        y: -1000,
        duration: 0.8,
        display: "none"
    })

    time.to(".line1 span", {
        opacity: 0,
        duration: 0.1,
    })

    time.from(".nav-part1 svg", {
        opacity: 0
    })

    time.from(".page1-h1 h1", {
        y: 100,
        stagger: 0.1,
    })


    time.from(".nav-part2 h5", {
        // y:-100,
        opacity: 0,
        stagger: 0.2,
    })

    time.from(".nav-h5 h5", {
        x: 100,
        opacity: 0,
        stagger: 0.1,
    })
}

// window.addEventListener("load", function(){
//     document.body.style.cursor = 'none';
// })
function videoCrs() {
    page2Video.addEventListener("mouseenter", function () {
        page2Video.addEventListener("mousemove", function (dets) {
            gsap.to(".mousefollower", {
                opacity: 0,
                display: "none",
            })
            gsap.to(".page2-video-cursor", {
                left: dets.x - 480,
                top: dets.y - 270,
            })
        })
    })

    page2Video.addEventListener("mouseleave", function () {
        gsap.to(".mousefollower", {
            opacity: 1,
            display: "initial",
        })
        gsap.to(".page2-video-cursor", {
            left: "70%",
            top: "-15%",
        })
    })

    var flag = 0
    p2Videocrs.addEventListener("click", function () {
        if (flag === 0) {
            p2Video.play();
            p2Video.style.opacity = 1
            p2Videocrs.innerHTML = `<i class="ri-pause-fill"></i>`
            gsap.to(".page2-video-cursor", {
                scale: 0.5,
            })
            flag = 1
        }
        else {
            p2Video.pause();
            p2Video.style.opacity = 0
            p2Videocrs.innerHTML = `<i class="ri-play-fill"></i>`
            gsap.to(".page2-video-cursor", {
                scale: 1,
            })
            flag = 0
        }

    })
}

web.addEventListener("mousemove", function (dets) {
    gsap.to("#flag", {
        x: dets.x,
        y: dets.y,
        opacity: 1,
    })
})

web.addEventListener("mouseleave", function (dets) {
    gsap.to("#flag", {
        opacity: 0,
    })
})

graphic.addEventListener("mousemove", function (dets) {
    gsap.to("#flag", {
        x: dets.x,
        y: dets.y,
        opacity: 1,
    })
})

graphic.addEventListener("mouseleave", function (dets) {
    gsap.to("#flag", {
        opacity: 0,
    })
})


    Shery.mouseFollower();

    function sheryImage() {
        Shery.imageEffect(".img-div", {
            style: 5,
            config: { "a": { "value": 1.83, "range": [0, 30] }, "b": { "value": -0.88, "range": [-1, 1] }, "zindex": { "value": "999999", "range": [-9999999, 9999999] }, "aspect": { "value": 0.8663389884255589 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.31, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.53, "range": [0, 10] }, "metaball": { "value": 0.47, "range": [0, 2] }, "discard_threshold": { "value": 0.66, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.4, "range": [0, 2] }, "noise_scale": { "value": 8.4, "range": [0, 100] } },
            gooey: true,
        })
    }


    Shery.makeMagnet(".nav-part2 h5");



}
videoCrs()
sheryImage()
loading()
loco()
