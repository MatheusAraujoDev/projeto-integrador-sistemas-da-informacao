document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/cupcakes')
        .then(response => response.json())
        .then(cupcakes => {
            const container = document.getElementById('cupcake-container');
            const icons = ['🧁', '🍰', '🎂'];
            
            cupcakes.forEach((cupcake, index) => {
                const card = document.createElement('div');
                card.className = 'card';
                
                // Add a placeholder icon to simulate images for the cards
                const icon = icons[index % icons.length];
                
                card.innerHTML = `
                    <div class="card-img-placeholder">${icon}</div>
                    <h3>${cupcake.flavor}</h3>
                    <p>${cupcake.description}</p>
                    <p class="price">$${cupcake.price.toFixed(2)}</p>
                `;
                container.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching menu:', error));
});
