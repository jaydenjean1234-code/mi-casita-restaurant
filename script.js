// Menu Data with verified matching food images
const menuData = [
    {
        id: 1,
        name: 'Chicharron Con Tostones',
        category: 'mains',
        price: 14.99,
        description: 'Crispy fried pork belly served with twice-fried plantain slices',
        image: 'https://images.unsplash.com/photo-1625953452480-57f1e27e2b9d?w=500&h=500&fit=crop'
    },
    {
        id: 2,
        name: 'Chimi Sandwich',
        category: 'mains',
        price: 12.99,
        description: 'Traditional Dominican fried salami sandwich with cheese and onions',
        image: 'https://images.unsplash.com/photo-1562547256-c7b3a2f62e99?w=500&h=500&fit=crop'
    },
    {
        id: 3,
        name: 'Yaroa',
        category: 'mains',
        price: 16.99,
        description: 'Delicious layered dish with yuca, meat, cheese, and avocado',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop'
    },
    {
        id: 4,
        name: 'Camarones al Ajillo',
        category: 'mains',
        price: 18.99,
        description: 'Shrimp sautéed in garlic sauce served with rice and beans',
        image: 'https://images.unsplash.com/photo-1628840042255-ef305584b51f?w=500&h=500&fit=crop'
    },
    {
        id: 5,
        name: 'Pastelitos',
        category: 'appetizers',
        price: 8.99,
        description: 'Crispy Dominican pastries filled with cheese or meat (3 pieces)',
        image: 'https://images.unsplash.com/photo-1599599810694-c3ea39b52b5d?w=500&h=500&fit=crop'
    },
    {
        id: 6,
        name: 'Mofongo',
        category: 'appetizers',
        price: 10.99,
        description: 'Mashed plantains with garlic and oil, served with your choice of protein',
        image: 'https://images.unsplash.com/photo-1585521537836-e5b8b270a627?w=500&h=500&fit=crop'
    },
    {
        id: 7,
        name: 'Guacamole & Chips',
        category: 'appetizers',
        price: 7.99,
        description: 'Fresh guacamole made daily, served with crispy tortilla chips',
        image: 'https://images.unsplash.com/photo-1535992636343-69d996e41065?w=500&h=500&fit=crop'
    },
    {
        id: 8,
        name: 'Ceviche',
        category: 'appetizers',
        price: 11.99,
        description: 'Fresh fish marinated in citrus juice with onions and cilantro',
        image: 'https://images.unsplash.com/photo-1559050241-16e97e49c3d7?w=500&h=500&fit=crop'
    },
    {
        id: 9,
        name: 'Piña Colada',
        category: 'beverages',
        price: 6.99,
        description: 'Refreshing tropical drink with coconut cream and pineapple',
        image: 'https://images.unsplash.com/photo-1556766336-a71a3fd84000?w=500&h=500&fit=crop'
    },
    {
        id: 10,
        name: 'Mojito',
        category: 'beverages',
        price: 7.99,
        description: 'Fresh mint, lime, sugar, and sparkling water',
        image: 'https://images.unsplash.com/photo-1613478223032-40cbd8fdf541?w=500&h=500&fit=crop'
    },
    {
        id: 11,
        name: 'Horchata',
        category: 'beverages',
        price: 3.99,
        description: 'Traditional sweet rice milk drink with cinnamon and vanilla',
        image: 'https://images.unsplash.com/photo-1584261323614-fd3216b3dbb6?w=500&h=500&fit=crop'
    },
    {
        id: 12,
        name: 'Tres Leches Cake',
        category: 'desserts',
        price: 5.99,
        description: 'Sponge cake soaked in three types of milk, topped with whipped cream',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=500&fit=crop'
    },
    {
        id: 13,
        name: 'Flan',
        category: 'desserts',
        price: 4.99,
        description: 'Smooth caramel custard dessert',
        image: 'https://images.unsplash.com/photo-1488477181946-85a2893f3e9f?w=500&h=500&fit=crop'
    },
    {
        id: 14,
        name: 'Churros',
        category: 'desserts',
        price: 5.99,
        description: 'Fried dough pastries dusted with cinnamon sugar (4 pieces)',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&h=500&fit=crop'
    }
];

let cart = [];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderMenu('all');
    setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
    // Order type change
    document.querySelector('select[name="orderType"]').addEventListener('change', function() {
        const deliveryGroup = document.getElementById('deliveryAddressGroup');
        if (this.value === 'delivery') {
            deliveryGroup.style.display = 'block';
        } else {
            deliveryGroup.style.display = 'none';
        }
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }
}

// Render Menu Items
function renderMenu(category) {
    const menuItems = document.getElementById('menuItems');
    menuItems.innerHTML = '';

    menuData.forEach(item => {
        if (category === 'all' || item.category === category) {
            const itemHTML = `
                <div class="menu-item" data-category="${item.category}">
                    <div class="menu-item-image-wrapper">
                        <img src="${item.image}" alt="${item.name}" class="menu-item-image" loading="lazy">
                    </div>
                    <div class="menu-item-content">
                        <div class="menu-item-name">${item.name}</div>
                        <div class="menu-item-description">${item.description}</div>
                        <div class="menu-item-footer">
                            <div class="menu-item-price">$${item.price.toFixed(2)}</div>
                            <button class="add-to-cart-btn" onclick="addToCart(${item.id}, '${item.name}', ${item.price})">Add</button>
                        </div>
                    </div>
                </div>
            `;
            menuItems.innerHTML += itemHTML;
        }
    });
}

// Filter Menu
function filterMenu(category) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    renderMenu(category);
}

// Add to Cart
function addToCart(id, name, price) {
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }

    updateCart();
    showNotification(`${name} added to cart!`);
}

// Update Cart Display
function updateCart() {
    const cartDiv = document.getElementById('cart');
    const cartItemsInput = document.getElementById('cartItems');

    if (cart.length === 0) {
        cartDiv.innerHTML = '<p style="color: #999;">Your cart is empty. Add items from the menu!</p>';
        cartItemsInput.value = '[]';
        updateTotals();
        return;
    }

    let cartHTML = '';
    cart.forEach(item => {
        cartHTML += `
            <div class="cart-item">
                <div>
                    <strong>${item.name}</strong> x ${item.quantity}
                    <div style="font-size: 0.9rem; color: #666;">$${(item.price * item.quantity).toFixed(2)}</div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `;
    });

    cartDiv.innerHTML = cartHTML;
    cartItemsInput.value = JSON.stringify(cart);
    updateTotals();
}

// Remove from Cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

// Update Totals
function updateTotals() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const tax = subtotal * 0.06;
    const total = subtotal + tax;

    document.getElementById('subtotal').textContent = '$' + subtotal.toFixed(2);
    document.getElementById('tax').textContent = '$' + tax.toFixed(2);
    document.getElementById('total').textContent = '$' + total.toFixed(2);
}

// Submit Order
function submitOrder(event) {
    event.preventDefault();

    if (cart.length === 0) {
        alert('Please add items to your cart before placing an order!');
        return;
    }

    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const orderType = formData.get('orderType');

    // Simulate order submission (in real app, this would send to a server)
    const orderSummary = cart.map(item => `${item.quantity}x ${item.name}`).join(', ');
    
    const successMessage = `
        <strong>Thank you for your order, ${name}!</strong><br><br>
        <strong>Order Details:</strong><br>
        Items: ${orderSummary}<br>
        Total: $${document.getElementById('total').textContent}<br><br>
        <strong>Confirmation has been sent to:</strong> ${email}<br>
        <strong>We'll call you at:</strong> ${phone}<br><br>
        <strong>Order Type:</strong> ${orderType.charAt(0).toUpperCase() + orderType.slice(1)}<br>
        <strong>Estimated Time:</strong> 30-45 minutes
    `;

    document.getElementById('successMessage').innerHTML = successMessage;
    openModal();

    // Reset form
    event.target.reset();
    cart = [];
    updateCart();
}

// Submit Contact Form
function submitContact(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get('name');

    alert(`Thank you for contacting Mi Casita, ${name}! We will get back to you soon.`);
    event.target.reset();
}

// Modal Functions
function openModal() {
    document.getElementById('successModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('successModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('successModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Scroll to Section
function scrollTo(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Notification
function showNotification(message) {
    // You can enhance this with a better notification system
    console.log(message);
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    navMenu.style.position = 'absolute';
    navMenu.style.top = '60px';
    navMenu.style.left = '0';
    navMenu.style.right = '0';
    navMenu.style.flexDirection = 'column';
    navMenu.style.background = 'white';
    navMenu.style.gap = '0';
    navMenu.style.padding = '1rem';
    navMenu.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu.style.display === 'flex') {
            navMenu.style.display = 'none';
        }
    });
});
