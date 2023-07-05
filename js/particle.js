function initializeParticles() {
        particlesJS('particles-js', {
        particles: {
            number: {
                value: 40, // Adjust the number of particles
                density: {
                    enable: true,
                    value_area: 600 // Adjust the area in which particles are distributed
                }
            },
            color: {
                value: '#ffffff' // Adjust the color of particles
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#ffffff',
                },
            },
            opacity: {
                value: 0.5,
                anim: {
                    enable: true,
                    speed: 0.4,
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 10,
                    size_min: 2,
                    sync: false
                }
            },
            move: {
                enable: true,
                speed: 1,
                direction: 'none',
                random: true,
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse',
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 800,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 800,
                    size: 80,
                    duration: 2,
                    opacity: 0.8,
                    speed: 3
                },
                repulse: {
                    distance: 100, // Adjust the distance of repulsion
                    duration: 0.4
                }
            }
        },
        retina_detect: true
    });
}

document.addEventListener("DOMContentLoaded", function() {
    initializeParticles();
});