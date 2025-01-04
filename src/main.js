"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gsap_1 = require("gsap");
const topHalf = document.querySelector(".top-half");
const bottomHalf = document.querySelector(".bottom-half");
gsap_1.gsap.to(topHalf, {
    duration: 2,
    y: -20,
    color: "#39ff14",
    textShadow: "0 0 5px #39ff14, 0 0 10px #39ff14",
    ease: "power2.inOut",
    repeat: -1,
    yoyo: true
});
gsap_1.gsap.to(bottomHalf, {
    duration: 2,
    y: 20,
    color: "#b22222",
    textShadow: "0 0 5px #b22222, 0 0 10px #b22222",
    ease: "power2.inOut",
    repeat: -1,
    yoyo: true
});
