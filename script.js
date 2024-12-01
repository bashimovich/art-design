// section one start 
let sections_h = gsap.utils.toArray(".section__one");

gsap.to(sections_h, {
    xPercent: -100 * (sections_h.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".h-scroll",
        pin: true,
        scrub: 1,
        snap: 1 / (sections_h.length - 1),
        end: () => "+=" + document.querySelector(".h-scroll").offsetWidth,
    }
});

var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.ml2 .letter',
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70 * i
    }).add({
        targets: '.ml2',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });
// section one end


// section two start
let sections_w = gsap.utils.toArray(".section__w").forEach((sec, i) => {
    ScrollTrigger.create({
        trigger: sec,
        start: "top top",
        start: "bottom bottom",
        pin: true,
        pinSpacing: false,
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
gsap.to(".circle__img", {
    scrollTrigger: {
        trigger: ".section__three",
        start: "top center",
        end: "center top",
        scrub: true, 
        toggleClass: {
            targets: ".circle__img",
            className: "active",
        },
    },
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