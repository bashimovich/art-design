gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".section__w").forEach((sec, i) => {
  ScrollTrigger.create({
    trigger: sec,
    start: "top top",
    end: "bottom top",
    pin: true,
    pinSpacing: false,
    scrub: .5,
    snap: 1 / 4,
    ease: "power4.out",
  });
});

gsap.to(".images__size", {
    scrollTrigger: {
        trigger: ".section__three", 
        start: "center bottom",
        end: "bottom center",
        toggleActions: "restart pause resume pause",
        scrub: 5,
    },
    width: "30%",
    ease: "power4.out",
});

gsap.to(".parag p", {
    scrollTrigger: {
        trigger: ".section__three", 
        start: "top bottom",
        end: "bottom top",
        toggleActions: "restart pause resume pause",
        scrub: true,
    },
    fontSize: "4.8rem",
    opacity: 1,
    ease: "power4.out",
});

let sections = gsap.utils.toArray(".scroll__slider");
gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".section__four",
        pin: true,
        scrub: 5,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + document.querySelector(".section__four").offsetWidth
    }
});


gsap.fromTo(
    ".center__side",
    {
        scale: 1,
        width: '19%',
    },
    {
        scale: 1.8,
        width: '100%',
        ease: "none",
        scrollTrigger: {
            trigger: ".section__gallery__helper",
            start: "top center",
            end: "center top",
            scrub: 0.5, 
        },
    }
);

console.clear();
gsap.set(".center__side", { filter: "blur(0px)" });
gsap.to(".center__side", {
  filter: "blur(10px)",
  scrollTrigger: {
    trigger: ".section__design",
    start: "top center",
    end: "top top",
    scrub: true,
  }
});

gsap.to(".section__design__one__container",
    {
        scale: .5,
        opacity: 0.5, 
        ease: "none",
        scrollTrigger: {
            trigger: ".section__design__one__helper",
            start: "top center",
            end: "center top",
            scrub: 0.5, 
        },
    }
);

gsap.to(".section__design__two__container",
    {
        scale: .5,
        opacity: 0.5, 
        ease: "none",
        scrollTrigger: {
            trigger: ".section__design__two__helper",
            start: "top center",
            end: "center top",
            scrub: 0.5, 
        },
    }
);
gsap.to(".section__design__three__container",
    {
        scale: .5,
        opacity: 0.5, 
        ease: "none",
        scrollTrigger: {
            trigger: ".section__design__three__helper",
            start: "top center",
            end: "center top",
            scrub: 0.5, 
        },
    }
);