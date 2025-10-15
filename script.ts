document.addEventListener('DOMContentLoaded', function() {

    // --- Menú Móvil (Hamburguesa) ---
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));

    // --- Contador del Próximo Partido ---
    const matchDate = new Date("Oct 15, 2025 20:00:00").getTime();
    const countdownFunction = setInterval(() => {
        const now = new Date().getTime();
        const distance = matchDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const format = (num) => num < 10 ? '0' + num : num;

        if(document.getElementById("days")){
            document.getElementById("days").innerText = format(days);
            document.getElementById("hours").innerText = format(hours);
            document.getElementById("minutes").innerText = format(minutes);
            document.getElementById("seconds").innerText = format(seconds);
        }

        if (distance < 0) {
            clearInterval(countdownFunction);
            if(document.getElementById("countdown")){
                document.getElementById("countdown").innerHTML = "<div class='match-live'>¡PARTIDO EN JUEGO!</div>";
            }
        }
    }, 1000);

    // --- Animaciones de Scroll (Intersection Observer) ---
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(element => {
        observer.observe(element);
    });
});

