gsap.to(".section__title", {
    scrollTrigger: {
        trigger: ".section__one__ii_bg_img",
        start: "top center",
        end: "center top",
        scrub: true, 
    },
    top: "-150rem", 
    ease: "none", 
});

// section two start
gsap.utils.toArray(".section__w").forEach((sec, i) => {
    ScrollTrigger.create({
        trigger: sec,
        start: "top top",   
        end: "bottom top",  
        pin: true,          
        pinSpacing: false,  
        scrub: true,        
        snap: 1 / (gsap.utils.toArray(".section__w").length - 1), // Snap each section to the top
    });
});

gsap.to(".circle__img", {
    scrollTrigger: {
        trigger: ".section__two__container",
        start: "top center",
        end: "center top",
        scrub: true, 
    },
    top: "0", 
    ease: "none", 
});

gsap.to(".square__img", {
    scrollTrigger: {
        trigger: ".section__two",
        start: "top center",
        end: "center top",
        toggleActions: "restart pause resume pause",
        scrub: true, 
        toggleClass: {
            targets: ".square__img",
            className: "active",
        },
    },
});
gsap.to(".circle__img", {
    scrollTrigger: {
        trigger: ".section__three",
        start: "top center",
        end: "center top",
        toggleActions: "restart pause resume pause",
        scrub: true, 
        toggleClass: {
            targets: ".circle__img",
            className: "active",
        },
    },
});
gsap.to(".section__six__container", {
    scrollTrigger: {
        trigger: ".section__seven",
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
        scrub: true, 
        toggleClass: {
            targets: ".section__six__img_bg",
            className: "active",
        },
    },
    ease: "power2.out",
    scale: 1.7,
});

gsap.to(".section__two__text", {
    scrollTrigger: {
        trigger: ".section__two__text",
        start: "top 100%",
        end: "top 80%",
        scrub: true, 
    },
    rotation: -90,
    ease: "none", 
})
// section two end

// seciton four start

gsap.to(".section__four__text", {
    scrollTrigger: {
        trigger: ".section__four__text",
        start: "center bottom",
        end: "bottom center",
        scrub: true, 
        toggleClass: {
            targets: ".forani",
            className: "active",
        },
    },
});

// seciton four end

// slider scripts start
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})

let next2 = document.querySelector('.next2')
let prev2 = document.querySelector('.prev2')

next2.addEventListener('click', function(){
    let items2 = document.querySelectorAll('.item2')
    document.querySelector('.slide2').appendChild(items2[0])
})

prev2.addEventListener('click', function(){
    let items2 = document.querySelectorAll('.item2')
    document.querySelector('.slide2').prepend(items2[items2.length - 1])
})

// slider scripts end
