function initializeFloat(){
    const floatingObjects = document.querySelectorAll('.floating-object');

    // Iterate over each floating object
    floatingObjects.forEach((object) => {
        // Generate a random duration between 2s and 6s
        const duration = Math.random() * 4 + 2;

        // Apply the animation properties to the floating object
        object.style.animationDuration = `${duration}s`;
    });
}

document.addEventListener("DOMContentLoaded", function() {
    initializeFloat();
});