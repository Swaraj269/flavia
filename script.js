gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true,
  smartphone: true,
  multiplier: 1.3,
  firefoxMultiplier: 200,
  tablet: {
    smooth: true
  },
  smartphone: {
    smooth: true
  }
});

gsap.to("body", {
  autoAlpha: 1
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: document.querySelector("main").style.transform
    ? "transform"
    : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



var tl = gsap.timeline();
tl.from("#hello",{
    duration: 0.5,
    y: "4vw",
    opacity: 0,
    delay: 0.5,
})
tl.from("#firstname",{
    duration: 0.5,
    y: "4vw",
    opacity: 0,
})
tl.to("#firstname",{
    duration: 0.5,
    y: "-4vw",
    delay: 0.3,
})
tl.to("#nickname",{
    duration: 0.5,
    y: "-3.5vw",
})
tl.to('#loader',{
    duration: 1,
    opacity: 0,
    y: -800,
    delay: 0.8,
    onStart: function(){
        var tl2 = gsap.timeline();
        tl2.from("#page1",{
            duration: 0.4,
            opacity: 0,
            y:60,
        })
        tl2.from("#message",{
            duration: 0.8,
            opacity: 0,
            y:60,
        })
        tl2.from("#bottomtext",{
            duration: 0.8,
            opacity: 0,
            y:60,
            delay: 0.1,
        })
        tl2.from("#uppertext",{
            duration: 0.8,
            opacity: 0,
            y:60,
            delay: 0.4,
        })
    }
})
tl.to('#loader',{
    duration: 0.2,
    display: "none",
})

gsap.to("#page1 .photos", {
    y: "-300%",
    scrollTrigger: {
        trigger: "#page1",
        scroller: "main",
        pin: true,
        scrub: 2,
        start: "top 0%",
        end: "top -320%",
    }
})

gsap.to("#bottomtext", {
    opacity: 0,
    scrollTrigger: {
        trigger: "#bottomtext",
        scroller: "main",
        scrub: 2,
        start: "top 57%",
        end: "top 55%",
    }
})
gsap.to("#uppertext", {
    opacity: 0,
    scrollTrigger: {
        trigger: "#uppertext",
        scroller: "main",
        scrub: 2,
        start: "top 2%",
        end: "top 0%",
    }
})
gsap.to(".textdiv", {
    transform: "translateY(-500%)",
    scrollTrigger: {
        trigger: ".textdiv",
        scroller: "main",
        scrub: 2,
        start: "top 0%",
        end: "top -400%",
    }
})

