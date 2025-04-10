document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalPrice = document.getElementById('cart-total-price');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>El carrito está vacío.</p>';
        return;
    }

    let totalPrice = 0;

    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <p>Categoría: ${item.category}</p>
                <p>Precio por unidad: $${item.price}</p>
                <p>Tallas seleccionadas:</p>
                <ul>
                    ${item.sizes.S > 0 ? `<li>S: ${item.sizes.S}</li>` : ''}
                    ${item.sizes.M > 0 ? `<li>M: ${item.sizes.M}</li>` : ''}
                    ${item.sizes.X > 0 ? `<li>X: ${item.sizes.X}</li>` : ''}
                    ${item.sizes.XL > 0 ? `<li>XL: ${item.sizes.XL}</li>` : ''}
                </ul>
                <p>Parches: ${item.patches === 'yes' ? 'Sí (+$30)' : 'No'}</p>
                <p>Cantidad total: ${item.totalQuantity}</p>
                <p>Precio total: $${item.totalPrice}</p>
                <button class="remove-btn" data-index="${index}">Eliminar</button>
            </div>
        `;
        cartItemsContainer.appendChild(itemElement);

        totalPrice += item.totalPrice;
    });

    // Mostrar el precio total
    cartTotalPrice.textContent = totalPrice;

    // Agregar funcionalidad a los botones de eliminar
    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = parseInt(e.target.dataset.index);
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            window.location.reload(); // Recargar la página para actualizar el carrito
        });
    });

    // Botón de finalizar compra (por ahora solo muestra una alerta)
    document.getElementById('checkout-btn').addEventListener('click', () => {
        if (cart.length > 0) {
            alert('¡Compra finalizada! Gracias por tu pedido.');
            localStorage.removeItem('cart'); // Vaciar el carrito
            window.location.reload();
        }
    });
});