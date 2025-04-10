// Lista de uniformes con sus imágenes
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

// Función para obtener parámetros de la URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        uniforme: params.get('uniforme'),
        precio: params.get('precio'),
        categoria: params.get('categoria')
    };
}

// Cargar los detalles del uniforme
document.addEventListener('DOMContentLoaded', () => {
    const { uniforme, precio, categoria } = getQueryParams();

    // Buscar el uniforme en la lista
    const uniformData = uniforms.find(u => u.name.replace(/ /g, '_') === uniforme);

    if (uniformData) {
        // Mostrar los detalles
        document.getElementById('uniform-name').textContent = uniformData.name;
        document.getElementById('uniform-category').textContent = `Categoría: ${uniformData.category}`;
        document.getElementById('uniform-price').textContent = `Precio: $${uniformData.price} por unidad`;
        document.getElementById('uniform-image').src = uniformData.image;
        document.getElementById('uniform-image').alt = uniformData.name;

        // Ajustar el enlace de "Volver al Catálogo" según la categoría
        const backLink = document.querySelector('.quote-btn');
        if (categoria === 'Liga_MX') {
            backLink.href = 'liga-mx.html';
        } else if (categoria === 'Internacionales') {
            backLink.href = 'internacionales.html';
        } else if (categoria === 'Champions_League') {
            backLink.href = 'champions-league.html';
        } else {
            backLink.href = '../index.html'; // Por defecto, volver al inicio
        }

        // Agregar funcionalidad al botón "Agregar al Carrito"
        document.getElementById('add-to-cart').addEventListener('click', () => {
            const sizes = {
                S: parseInt(document.getElementById('size-s').value) || 0,
                M: parseInt(document.getElementById('size-m').value) || 0,
                X: parseInt(document.getElementById('size-x').value) || 0,
                XL: parseInt(document.getElementById('size-xl').value) || 0
            };

            const patches = document.getElementById('patches').value;
            const patchesCost = patches === 'yes' ? 30 : 0;

            // Calcular el total de camisetas
            const totalQuantity = sizes.S + sizes.M + sizes.X + sizes.XL;

            if (totalQuantity === 0) {
                alert('Por favor, selecciona al menos una camiseta.');
                return;
            }

            // Crear el objeto del item para el carrito
            const cartItem = {
                name: uniformData.name,
                price: uniformData.price,
                category: uniformData.category,
                image: uniformData.image,
                sizes: sizes,
                patches: patches,
                patchesCost: patchesCost,
                totalQuantity: totalQuantity,
                totalPrice: (uniformData.price + patchesCost) * totalQuantity
            };

            // Obtener el carrito actual de localStorage o inicializar uno nuevo
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(cartItem);
            localStorage.setItem('cart', JSON.stringify(cart));

            // Redirigir al carrito o mostrar un mensaje
            alert('¡Producto agregado al carrito!');
            window.location.href = 'carrito.html';
        });
    } else {
        // Si no se encuentra el uniforme, mostrar un mensaje de error
        document.querySelector('.uniform-detail').innerHTML = '<p>Uniforme no encontrado.</p>';
    }
});