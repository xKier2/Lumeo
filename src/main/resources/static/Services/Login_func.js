document.addEventListener('DOMContentLoaded', () => {
    const slides = [
        {
            image: "../Images/Login_Page/Graduation-bro.svg",
            text: "Unlock your potential with Lumeo's advanced learning tools."
        },
        {
            image: "../Images/Login_Page/Robotics-pana.svg",
            text: "Innovate and build the future with our specialized STEM tracks."
        },
        {
            image: "/Images/Login_Page/school bus-amico.svg",
            text: "Your academic journey, organized and accessible anywhere."
        }
    ];

    let currentIndex = 0;
    const imgEl = document.getElementById('carousel-image');
    const textEl = document.getElementById('carousel-text');

    function updateCarousel() {
        if (!imgEl || !textEl) return;

        // Fade out
        imgEl.style.opacity = '0';
        textEl.style.opacity = '0';

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % slides.length;

            // Update content
            imgEl.src = slides[currentIndex].image;
            textEl.innerText = slides[currentIndex].text;

            // Update Dots
            for (let i = 0; i < slides.length; i++) {
                const dot = document.getElementById(`dot-${i}`);
                if (dot) {
                    if (i === currentIndex) {
                        dot.className = "h-2 w-8 rounded-full bg-black transition-all duration-300";
                    } else {
                        dot.className = "h-2 w-2 rounded-full bg-gray-300 transition-all duration-300";
                    }
                }
            }

            // Fade in
            imgEl.style.opacity = '1';
            textEl.style.opacity = '1';
        }, 500);
    }

    // Auto-scroll every 5 seconds
    setInterval(updateCarousel, 2500);
});