// Smooth Scroll Function
function scrollDown() {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
}

// Hover Effect - Log interaction (You can add 3D Tilt libraries here)
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        console.log("Exploring " + card.querySelector('h3').innerText);
    });
});

// Auto-Type Effect for the Hero Subtitle
const sub = document.querySelector('.hero p');
const text = sub.innerText;
sub.innerText = '';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        sub.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

window.onload = typeWriter;
