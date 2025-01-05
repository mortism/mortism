import { gsap } from "gsap";

// Animate the top-half ASCII art
gsap.to(".top-half", {
  duration: 2,
  y: -10,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
  textShadow: "0 0 5px #39ff14, 0 0 15px #39ff14",
});

// Animate the bottom-half ASCII art
gsap.to(".bottom-half", {
  duration: 2,
  y: 10,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
  textShadow: "0 0 5px #b22222, 0 0 15px #b22222",
});

// Flicker effect for torches
const torches = gsap.utils.toArray<HTMLElement>(".torch");

torches.forEach((torch) => {
  gsap.to(torch, {
    duration: Math.random() * 0.5 + 0.5,
    filter: "brightness(1.5)",
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });
});


