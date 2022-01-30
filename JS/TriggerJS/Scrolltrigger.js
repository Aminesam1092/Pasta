gsap.to(".Header__Container", {
    scrollTrigger: {
        trigger: ".Header__Container",
        start: "center center",
        end: '+=1500',
        scrub: true,
        pin: true,
    },
    opacity: 1,
});
gsap.to(".Productntroduction__Headdingtext ", {
    scrollTrigger: {
        trigger: ".Productntroduction__Headdingtext",
        start: "top center",
        end: 'bottom center',
    },
    amount: 0.5,
    duraion: 5,
    opacity: 1,
});
gsap.to(".Productntroduction__Auxiliarysentence", {
    scrollTrigger: {
        trigger: ".Productntroduction__Auxiliarysentence",
        start: "top center",
        end: 'bottom center',
    },
    amount: 0.5,
    duraion: 5,
    opacity: 1,
});
gsap.to(".AuxiliaryImage", {
    scrollTrigger: {
        trigger: ".AuxiliaryImage",
        start: "center center",
        end: '+=1500',
        scrub: true,
        pin: true,
    },
    opacity: 1,
});