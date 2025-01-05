import { gsap } from "gsap";

// Animate the entire ASCII art container
gsap.to(".ascii-art", {
    duration: 2,
    opacity: 1, // Ensure the entire ASCII art is visible
    y: -20, // Shift the entire container upward
    ease: "power1.inOut",
});

// Explicitly animate the top half (green flicker)
gsap.to("#top-half", {
    y: -5, // Reduce spacing by moving it upward
    duration: 1,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    color: "#39ff14", // Green text color
    textShadow: "0 0 5px #39ff14, 0 0 15px #39ff14",
    opacity: 1, // Ensure text visibility
});

// Explicitly animate the bottom half (red flicker)
gsap.to("#bottom-half", {
    y: 5, // Reduce spacing by moving it downward
    duration: 1,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    color: "#b22222", // Red text color
    textShadow: "0 0 5px #b22222, 0 0 15px #b22222",
    opacity: 1, // Ensure text visibility
});
