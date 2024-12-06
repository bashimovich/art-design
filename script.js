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
gsap.to(".section__one", {
    scrollTrigger: {
        trigger: ".section__five",
        start: "top center",
        end: "center top",
        scrub: true, 
    },
    background:"#141414",
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
gsap.to(".section__ten_img", {
    scrollTrigger: {
        trigger: ".section__ten",
        start: "top center",
        end: "center top",
        toggleActions: "restart pause resume pause",
        scrub: true, 
        toggleClass: {
            targets: ".section__ten_img",
            className: "active",
        },
    },
});

gsap.to(".text__circle__img", {
    scrollTrigger: {
        trigger: ".section__ele",
        start: "top center",
        end: "center top",
        toggleActions: "restart pause resume pause",
        scrub: true, 
        toggleClass: {
            targets: ".text__circle__img",
            className: "active",
        },
    },
});

gsap.to(".twe_img_1", {
    scrollTrigger: {
        trigger: ".section__twe",
        start: "top center",
        end: "center top",
        toggleActions: "restart pause resume pause",
        scrub: true, 
        toggleClass: {
            targets: ".twe_img_1",
            className: "active",
        },
    },
});

gsap.to(".circle__opening__animation", {
    scrollTrigger: {
        trigger: ".section__th__container",
        start: "center bottom",
        end: "bottom center",
        toggleActions: "restart pause resume pause",
        scrub: true, 
        toggleClass: {
            targets: ".circle__opening__animation",
            className: "active",
        },
    },
});

gsap.to(".twe_img_2", {
    scrollTrigger: {
        trigger: ".section__twe",
        start: "top center",
        end: "center top",
        toggleActions: "restart pause resume pause",
        scrub: true, 
        toggleClass: {
            targets: ".twe_img_2",
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




ymaps.ready(init),
	$(document).ready(function () {
		$(document).mousemove(function (e) {
			document.querySelector('.architecture__after-decor-left')
			var t = $('.architecture__after-decor-left').offset(),
				a = $('.architecture__after-decor-right').offset(),
				o = t.left,
				i = t.top,
				r = a.left,
				s = a.top,
				n = e.pageX - o,
				d = e.pageY - i,
				l = e.pageX - r,
				c = e.pageY - s
			$('.architecture__after-decor-left').css({
				transform: `translate(${n / 100}rem , ${d / 100}rem)`,
			}),
				$('.architecture__after-decor-right').css({
					transform: `translate(${l / 100}rem , ${c / 100}rem)`,
				})
		})
	})
function init() {
	var e = new ymaps.Map('map', {
			center: [55.734851, 37.614455],
			zoom: 15,
			controls: ['zoomControl', 'typeSelector'],
		}),
		t = new ymaps.Placemark(
			[55.734851, 37.614455],
			{ hintContent: 'москва,ул. Большая Якиманка, 33/13с2 ' },
			{
				iconLayout: 'default#image',
				iconImageHref:
					'https://rgcompany.ru/images/tild3431-3737-4562-a163-643934666561__holder.svg',
				iconImageSize: [24, 24],
				iconImageOffset: [-16, -16],
			}
		)
	jQuery(function (t) {
		t(document).mouseup(function (a) {
			t('.maps').is(a.target) || 0 !== t('.maps').has(a.target).length
				? e.behaviors.enable('scrollZoom')
				: e.behaviors.disable('scrollZoom')
		})
	}),
		e.geoObjects.add(t)
}
// slider scripts end

const cylinder_gallery = document.querySelector('.cylinder_gallery');
const cylinder_images = document.querySelector('.cylinder_images');

let mouseX = 0;
let mouseY = 0;
let rotationX = 0;
let rotationY = 0;

cylinder_gallery.addEventListener('mousemove', (e) => {
    mouseX = e.clientX / window.innerWidth - 0.5;
    mouseY = e.clientY / window.innerHeight - 0.5;
    
    rotationY = mouseX * 360;
    rotationX = -mouseY * 180;
    
    cylinder_images.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    cylinder_images.style.transition = `transform 2s`;
});



// 
gsap.registerPlugin(ScrollTrigger);

gsap.to(".bg__image__container", {
    x: () => -(document.querySelector(".bg__image__container").scrollWidth - window.innerWidth), // Sol kaydırma
    ease: "none",
    scrollTrigger: {
        trigger: ".scroll__slider", // Hedeflenen bölüm
        start: "top top", // Başlangıç noktası
        end: "bottom top", // Bitme noktası
        scrub: true, // Kullanıcının scroll hızına göre animasyon
    }
});