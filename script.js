document.addEventListener('DOMContentLoaded', () => {
    // Función para el botón de revelar mensaje
    const btn = document.getElementById('btnRevelar');
    const mensaje = document.getElementById('mensajeSecreto');
    if (btn) {
        btn.addEventListener('click', () => {
            btn.style.display = 'none';
            mensaje.style.display = 'block';
        });
    }

    // Decoración de corazones fijos al cargar
    const body = document.querySelector('body');
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 95 + 'vw';
        heart.style.top = Math.random() * 95 + 'vh';
        heart.style.fontSize = (Math.random() * 30 + 10) + 'px';
        heart.style.opacity = '0.3';
        heart.style.zIndex = '-1';
        heart.style.pointerEvents = 'none';
        body.appendChild(heart);
    }
});

// Esta función debe estar fuera del DOMContentLoaded para que el HTML la encuentre
function lanzarCorazones() {
    const contenedor = document.getElementById('corazones');
    for(let i=0; i<100; i++) {
        const c = document.createElement('div');
        c.innerHTML = '❤️';
        c.style.position = 'fixed';
        c.style.left = Math.random() * 100 + 'vw';
        c.style.top = '-20px';
        c.style.fontSize = (Math.random() * 20 + 10) + 'px';
        c.style.animation = `caer ${Math.random() * 2 + 1}s linear forwards`;
        contenedor.appendChild(c);
        setTimeout(() => c.remove(), 3000);
    }
}
