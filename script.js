document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling untuk tautan anchor
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });
            
            targetSection.classList.add('active');
            window.scrollTo({
                top: targetSection.offsetTop - header.offsetHeight,
                behavior: 'smooth'
            });
        });
    });

    // Dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const header = document.querySelector('header');

    darkModeToggle.addEventListener('change', () => {
        body.classList.toggle('dark-mode');
        header.classList.toggle('dark-mode');
        document.querySelectorAll('.section').forEach(section => section.classList.toggle('dark-mode'));
        document.querySelector('footer').classList.toggle('dark-mode');
    });

    // Animasi mengetik untuk bagian rumah (home)
    const typedTextElement = document.getElementById('typed-text');
    const textArray = ["Hi, I'm Fricho Cesarrea Yarangga", "Welcome to my portfolio"];
    const colors = ["#e87007", "#d13ad6", "#26a9e0", "#e92672", "#f0a830"];
    let arrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[arrayIndex].length) {
            const span = document.createElement('span');
            span.textContent = textArray[arrayIndex].charAt(charIndex);
            span.style.color = colors[charIndex % colors.length];
            typedTextElement.appendChild(span);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextElement.removeChild(typedTextElement.lastChild);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            arrayIndex = (arrayIndex + 1) % textArray.length;
            setTimeout(type, 500);
        }
    }

    // Set bagian aktif awal
    document.querySelector('.section.active').classList.remove('active');
    document.getElementById('home').classList.add('active');
    type();
});
