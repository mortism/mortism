import { gsap } from "gsap";

// Animate the entire ASCII art container
const asciiArt = document.querySelector(".ascii-art");
if (asciiArt) {
    gsap.to(asciiArt, {
        duration: 2,
        opacity: 1, // Ensure visibility
        y: -20, // Move the entire container upward
        ease: "power2.out",
    });
}

// Target the top half for spacing and flickering effects
const topHalf = document.querySelector("#top-half");
if (topHalf) {
    gsap.to(topHalf, {
        y: -10, // Move it upward to reduce spacing
        duration: 1,
        repeat: -1, // Infinite animation
        yoyo: true, // Reverse the animation
        ease: "power1.inOut",
        color: "#39ff14", // Ensure green color is retained
        textShadow: "0 0 5px #39ff14, 0 0 15px #39ff14", // Retain flicker effect
    });
}

// Target the bottom half for spacing and flickering effects
const bottomHalf = document.querySelector("#bottom-half");
if (bottomHalf) {
    gsap.to(bottomHalf, {
        y: 10, // Move it downward to reduce spacing
        duration: 1,
        repeat: -1, // Infinite animation
        yoyo: true, // Reverse the animation
        ease: "power1.inOut",
        color: "#b22222", // Ensure red color is retained
        textShadow: "0 0 5px #b22222, 0 0 15px #b22222", // Retain flicker effect
    });
}
