import { gsap } from "gsap";

// Animate the entire ASCII art container
const asciiArt = document.querySelector(".ascii-art");
if (asciiArt) {
    gsap.to(asciiArt, {
        duration: 2,
        opacity: 1, // Ensure visibility
        y: 0, // Keep it centered
        ease: "power2.out",
    });
}

// Target the top half for spacing
const topHalf = document.querySelector("#top-half");
if (topHalf) {
    gsap.to(topHalf, {
        y: -5, // Slight upward adjustment
        duration: 1,
        repeat: -1, // Infinite animation
        yoyo: true, // Reverse animation
        ease: "power1.inOut",
    });
}

// Target the bottom half for spacing
const bottomHalf = document.querySelector("#bottom-half");
if (bottomHalf) {
    gsap.to(bottomHalf, {
        y: 5, // Slight downward adjustment
        duration: 1,
        repeat: -1, // Infinite animation
        yoyo: true, // Reverse animation
        ease: "power1.inOut",
    });
}
