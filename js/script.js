// Testimonios rotativos (básico)
const testimonios = [
    "“Me siento más segura sabiendo que siempre puedo contar con Ñusta Kawsay.”",
    "“Gracias a la app, pude pedir ayuda a tiempo en una situación crítica.”",
];

let testimonialIndex = 0;
const testimonialElement = document.querySelector('.testimonial p');

setInterval(() => {
    testimonialElement.innerHTML = testimonios[testimonialIndex];
    testimonialIndex = (testimonialIndex + 1) % testimonios.length; // Cambia el índice del testimonio
}, 5000); // Cada 5 segundos cambia el testimonio
