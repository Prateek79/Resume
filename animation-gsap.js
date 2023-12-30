let loadingScreen = gsap.timeline();

loadingScreen.to(".elem1", {
  y: -30,
  delay: 0.5,
  stagger: 0,
  opacity: 0,
});

loadingScreen.to(".elem2", {
  y: -70,
  stagger: 0,
});
loadingScreen.to(".elem2", {
  y: -80,
  stagger: 0,
  opacity: 0,
});

loadingScreen.to(".elem3", {
  y: -140,
  stagger: 0,
});
loadingScreen.to(".elem3", {
  y: -150,
  stagger: 0,
  opacity: 0,
});

loadingScreen.to(".elem4", {
  y: -210,
  stagger: 0,
});
loadingScreen.to(".elem4", {
  y: -220,
  stagger: 0,
  opacity: 0,
});
loadingScreen.to(".progress", {
  y: -220,
  stagger: 0,
  opacity: 0,
});

loadingScreen.to(".animated-screen", {
  y: "-100%",
  opacity: 0,
});

let mainContainer = gsap.timeline();

mainContainer.from(".main-container", {
  y: "-200vh",
  delay: 4.2,
  duration: 0.2,
  stagger: 1,
});
mainContainer.from("nav", {
  y: "-7vh",
  duration: 0.3,
  stagger: 1,
});

// mainContainer.from(".sm-line", {
//   //   x: -200,
//   //   duration: 0.2,
//   opacity: 0.01,
//   duration:0.3,
//   stagger:5,
// });

// mainContainer.from(".left h1", {
//   // x:-400,
//   // duration:0.5
//   opacity: 0.01,
//   duration:0.3,
//   stagger:5,
// });

// mainContainer.from(".prateek", {
//   opacity: 0.01,
//   duration:0.3,
//   stagger:5,
// });
// mainContainer.from(".bhelave", {
//   opacity: 0.01,
//   duration:0.3,
//   stagger:5,
// });
// mainContainer.from(".contact", {
//   opacity: 0.01,
//   duration:0.3,
//   stagger:5,
// });

mainContainer.from(".left", {
  opacity: 0.01,
  stagger: 1,
});

mainContainer.from(".page2", {
  opacity: 0.01,
  stagger: 1,
});
mainContainer.from(".page3", {
  opacity: 0.01,
  stagger: 1,
});

let rightimg = gsap.timeline()
rightimg.from(".right", {
  opacity: 0.01,
  stagger: 1,
  delay: 4.3,
});









