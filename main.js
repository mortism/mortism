"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gsap_1 = require("gsap");
const asciiArt = document.querySelector(".ascii-art");
if (asciiArt) {
    gsap_1.gsap.to(asciiArt, {
        duration: 2,
        opacity: 1,
        y: -20,
        ease: "power2.out",
    });
}
