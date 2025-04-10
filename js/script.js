// Carrusel
const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.carousel-control.prev');
const nextBtn = document.querySelector('.carousel-control.next');
const itemCount = items.length;
let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;
}

function autoSlide() {
    currentIndex = (currentIndex + 1) % itemCount;
    updateCarousel();
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % itemCount;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + itemCount) % itemCount;
    updateCarousel();
});

// Desplazamiento automático cada 5 segundos
setInterval(autoSlide, 5000);

// Uniformes aleatorios
const uniforms = [
    { name: 'Camisa América', price: 500, category: 'Liga MX', image: 'https://static.wixstatic.com/media/f00e53_e7bb4a481c964a0cb14420a0aee220b9~mv2.jpg/v1/fill/w_322,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/uniforme-futbol-kappa-ghost-fosfo.jpg' },
    { name: 'Camisa Chivas', price: 500, category: 'Liga MX', image: 'https://static.wixstatic.com/media/f00e53_ceff97c2f5494fbeb04e723ad83ab24f~mv2.jpg/v1/fill/w_322,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/uniforme-futbol-kappa-laser-rojo.jpg' },
    { name: 'Camisa Pumas', price: 500, category: 'Liga MX', image: 'https://static.wixstatic.com/media/f00e53_3bd1692aa3974e1799c1cd4fb5df09b9~mv2.jpg/v1/fill/w_322,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/uniforme-futbol-kappa-tipo-united-naranja.jpg' },
    { name: 'Camisa Cruz Azul', price: 500, category: 'Liga MX', image: 'https://static.wixstatic.com/media/f00e53_5ff62adcf15147bb9a258b9ae2ad0c58~mv2.jpg/v1/fill/w_322,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/uniforme-futbol-kappa-tipo-united-blanco.jpg' },
    { name: 'Camisa Tigres', price: 500, category: 'Liga MX', image: 'https://static.wixstatic.com/media/f00e53_f149851f38fa4d0fa090e18280155c23~mv2.jpg/v1/fill/w_322,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/uniforme-futbol-kappa-tipo-united-fosfo.jpg' },
    { name: 'Camisa Monterrey', price: 500, category: 'Liga MX', image: 'https://static.wixstatic.com/media/f00e53_c63a28d2efa64912af56f798963485a8~mv2.png/v1/fill/w_322,h_320,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/kappa-ml-tipo-inter.png' },
    { name: 'Camisa Argentina', price: 600, category: 'Internacionales', image: 'https://static.wixstatic.com/media/f00e53_8a8b7b1c2f3e4a1e9b5c1d4fb5df09b9~mv2.jpg/v1/fill/w_322,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/uniforme-futbol-kappa-tipo-united-celeste.jpg' },
    { name: 'Camisa Brasil', price: 600, category: 'Internacionales', image: 'https://static.wixstatic.com/media/f00e53_4c2f3e4a1e9b5c1d4fb5df09b9~mv2.jpg/v1/fill/w_322,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/uniforme-futbol-kappa-tipo-united-amarillo.jpg' },
    { name: 'Camisa Alemania', price: 600, category: 'Internacionales', image: 'https://static.wixstatic.com/media/f00e53_6f3e4a1e9b5c1d4fb5df09b9~mv2.jpg/v1/fill/w_322,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/uniforme-futbol-kappa-tipo-united-negro.jpg' },
    { name: 'Camisa Francia', price: 600, category: 'Internacionales', image: 'https://static.wixstatic.com/media/f00e53_1e9b5c1d4fb5df09b9~mv2.jpg/v1/fill/w_322,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/uniforme-futbol-kappa-tipo-united-azul.jpg' },
    { name: 'Camisa España', price: 600, category: 'Internacionales', image: 'https://static.wixstatic.com/media/f00e53_3bd1692aa3974e1799c1cd4fb5df09b9~mv2.jpg/v1/fill/w_322,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/uniforme-futbol-kappa-tipo-united-rojo.jpg' },
    { name: 'Camisa Italia', price: 600, category: 'Internacionales', image: 'https://static.wixstatic.com/media/f00e53_1e9b5c1d4fb5df09b9~mv2.jpg/v1/fill/w_322,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/uniforme-futbol-kappa-tipo-united-azul.jpg' },
    { name: 'Camisa Real Madrid', price: 700, category: 'Champions_League', image: 'https://static.wixstatic.com/media/f00e53_5ff62adcf15147bb9a258b9ae2ad0c58~mv2.jpg/v1/fill/w_322,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/uniforme-futbol-kappa-tipo-united-blanco.jpg' },
    { name: 'Camisa FC Barcelona', price: 700, category: 'Champions_League', image: 'https://static.wixstatic.com/media/f00e53_3bd1692aa3974e1799c1cd4fb5df09b9~mv2.jpg/v1/fill/w_322,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/uniforme-futbol-kappa-tipo-united-azul-rojo.jpg' },
    { name: 'Camisa Manchester City', price: 700, category: 'Champions_League', image: 'https://static.wixstatic.com/media/f00e53_1e9b5c1d4fb5df09b9~mv2.jpg/v1/fill/w_322,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/uniforme-futbol-kappa-tipo-united-celeste.jpg' },
    { name: 'Camisa Bayern Munich', price: 700, category: 'Champions_League', image: 'https://static.wixstatic.com/media/f00e53_3bd1692aa3974e1799c1cd4fb5df09b9~mv2.jpg/v1/fill/w_322,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/uniforme-futbol-kappa-tipo-united-rojo.jpg' },
    { name: 'Camisa Paris Saint-Germain', price: 700, category: 'Champions_League', image: 'https://static.wixstatic.com/media/f00e53_1e9b5c1d4fb5df09b9~mv2.jpg/v1/fill/w_322,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/uniforme-futbol-kappa-tipo-united-azul-rojo.jpg' },
    { name: 'Camisa Liverpool', price: 700, category: 'Champions_League', image: 'https://static.wixstatic.com/media/f00e53_3bd1692aa3974e1799c1cd4fb5df09b9~mv2.jpg/v1/fill/w_322,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/uniforme-futbol-kappa-tipo-united-rojo.jpg' }
];

// Seleccionar 3 uniformes aleatorios
function getRandomUniforms(count) {
    const shuffled = uniforms.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function displayRandomUniforms() {
    const randomUniforms = getRandomUniforms(3); // Cambiamos de 4 a 3
    const catalog = document.getElementById('random-uniforms-catalog');
    randomUniforms.forEach(uniform => {
        const uniformBox = document.createElement('a');
        uniformBox.className = 'uniform-box';
        uniformBox.href = `pages/detalle-uniforme.html?uniforme=${uniform.name.replace(/ /g, '_')}&precio=${uniform.price}&categoria=${uniform.category}`;
        uniformBox.innerHTML = `
            <div class="uniform-content">
                <img src="${uniform.image}" alt="${uniform.name}">
                <h3>${uniform.name}</h3>
                <p>Precio estimado: $${uniform.price} MXN</p>
            </div>
        `;
        catalog.appendChild(uniformBox);
    });
}

// Mostrar uniformes aleatorios al cargar la página
document.addEventListener('DOMContentLoaded', displayRandomUniforms);