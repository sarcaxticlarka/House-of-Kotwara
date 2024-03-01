Shery.mouseFollower();
Shery.makeMagnet(".btns, .btn");
Shery.hoverWithMediaCircle(".hvr", {
  videos: ["./assests/hvr.mp4"],
});

Shery.imageEffect(".bgimg", {
    style: 5,  
    config:{"a":{"value":1.24,"range":[0,30]},"b":{"value":-1,"range":[-1,1]},"aspect":{"value":2.0686274509803924},"gooey":{"value":true},"infiniteGooey":{"value":true},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":1.87,"range":[0,10]},"metaball":{"value":0.26,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.3,"range":[0,2]},"noise_scale":{"value":9.35,"range":[0,100]}}, gooey: true });

 function page5anim() {
        var elems = document.querySelectorAll(".elem")
        var page5 = document.querySelector(".page5")
        elems.forEach(function (ele) {
            ele.addEventListener("mouseenter", function () {
                var bgimg = ele.getAttribute("data-img")
                page5.style.backgroundImage = `url(${bgimg})`
            })
        })
    }
page5anim();


gsap.to(".fleftelem", {
    scrollTrigger: {
      trigger: "#fimages",
      pin: true,
      start: "top top",
      end: "bottom bottom",
      endTrigger: ".last",
      scrub: 1,
    },
    y: "-300%",
    ease: Power1,
  });
  
let sections = document.querySelectorAll(".fleftelem");
Shery.imageEffect(".images", {
  style: 4,
  config: { onMouse: { value: 1 } },
  slideStyle: (setScroll) => {
    sections.forEach(function (section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 4,
        onUpdate: function (prog) {
          setScroll(prog.progress + index);
        },
      });
    });
  },
});