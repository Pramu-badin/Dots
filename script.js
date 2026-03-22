// ============================================
// BROWN DOTS COFFEE SHOP - JAVASCRIPT
// ============================================

// Menu Data Structure
const menuItems = {
    hot: [
        { id: 1, name: "Classic Espresso", price: 3.50, rating: 5, image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400", desc: "Rich and bold single shot" },
        { id: 2, name: "Caramel Latte", price: 4.50, rating: 5, image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=400", desc: "Espresso with steamed milk and caramel" },
        { id: 3, name: "Cappuccino", price: 4.00, rating: 4, image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400", desc: "Equal parts espresso, steamed milk, and foam" },
        { id: 4, name: "Mocha Deluxe", price: 5.00, rating: 5, image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400", desc: "Chocolate espresso with whipped cream" },
        { id: 5, name: "Americano", price: 3.00, rating: 4, image: "https://images.unsplash.com/photo-1551030173-122aabc4489c?w=400", desc: "Espresso diluted with hot water" },
        { id: 6, name: "Macchiato", price: 3.75, rating: 4, image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400", desc: "Espresso with a dash of froth" }
    ],
    iced: [
        { id: 7, name: "Iced Americano", price: 3.50, rating: 4, image: "https://images.unsplash.com/photo-1517701604599-bb29b5dd7359?w=400", desc: "Chilled espresso with water" },
        { id: 8, name: "Cold Brew", price: 4.50, rating: 5, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400", desc: "Steeped for 12 hours, smooth taste" },
        { id: 9, name: "Iced Latte", price: 4.50, rating: 4, image: "https://images.unsplash.com/photo-1517959105821-eaf2591984ca?w=400", desc: "Espresso with cold milk over ice" },
        { id: 10, name: "Frappuccino", price: 5.50, rating: 5, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400", desc: "Blended ice coffee with whipped cream" },
        { id: 11, name: "Iced Mocha", price: 5.00, rating: 4, image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=400", desc: "Chocolate iced coffee delight" },
        { id: 12, name: "Nitro Cold Brew", price: 5.50, rating: 5, image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400", desc: "Nitrogen-infused for creamy texture" }
    ],
    snacks: [
        { id: 13, name: "Butter Croissant", price: 3.50, rating: 5, image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400", desc: "Flaky, buttery French pastry" },
        { id: 14, name: "Chocolate Muffin", price: 3.00, rating: 4, image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400", desc: "Double chocolate chip muffin" },
        { id: 15, name: "Bagel with Cream Cheese", price: 4.00, rating: 4, image: "https://images.unsplash.com/photo-1623334044303-241021148842?w=400", desc: "Fresh toasted bagel" },
        { id: 16, name: "Almond Biscotti", price: 2.50, rating: 5, image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400", desc: "Perfect for dipping in coffee" }
    ],
    desserts: [
        { id: 17, name: "Tiramisu", price: 6.00, rating: 5, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400", desc: "Classic Italian coffee dessert" },
        { id: 18, name: "Cheesecake", price: 5.50, rating: 5, image: "https://images.unsplash.com/photo-1524351199678-941a58a3df26?w=400", desc: "New York style with berry compote" },
        { id: 19, name: "Chocolate Brownie", price: 4.50, rating: 4, image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400", desc: "Fudgy brownie with walnuts" },
        { id: 20, name: "Cinnamon Roll", price: 4.00, rating: 5, image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=400", desc: "Warm roll with cream cheese frosting" }
    ]
};

// Global State
let cart = JSON.parse(localStorage.getItem('brownDotsCart')) || [];
let currentCategory = 'hot';
let currentPaymentMethod = 'card';

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Simulate loading screen
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.classList.add('hidden');
        }
    }, 2000);

    // Initialize all components
    renderMenu('hot');
    updateCart();
    initAdSlider();
    initScrollAnimations();
    initNavbarScroll();
    initMobileMenu();
});

// ============================================
// ADVERTISEMENT SLIDER
// ============================================

function initAdSlider() {
    const slider = document.getElementById('adSlider');
    if (!slider) return;

    let currentSlide = 0;
    const totalSlides = slider.children.length;
    
    // Auto-rotate every 4 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }, 4000);
}

// ============================================
// MOBILE MENU
// ============================================

function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
}

function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem 5%';
            navbar.style.boxShadow = '0 2px 30px rgba(0,0,0,0.3)';
        } else {
            navbar.style.padding = '1rem 5%';
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.2)';
        }
    });
}

// ============================================
// MENU FUNCTIONS
// ============================================

function filterMenu(category) {
    currentCategory = category;
    
    // Update active tab
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Set active class on clicked button
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    renderMenu(category);
}

function renderMenu(category) {
    const grid = document.getElementById('menuGrid');
    if (!grid) return;

    const items = menuItems[category] || [];
    
    grid.innerHTML = items.map(item => `
        <div class="menu-card fade-in">
            <img src="${item.image}" alt="${item.name}" class="menu-image" loading="lazy">
            <div class="menu-content">
                <div class="menu-header">
                    <div>
                        <h3 class="menu-title">${item.name}</h3>
                        <div class="rating">${'⭐'.repeat(item.rating)}</div>
                    </div>
                    <div class="menu-price">$${item.price.toFixed(2)}</div>
                </div>
                <p style="color: var(--text-light); margin-bottom: 1rem; font-size: 0.9rem;">${item.desc}</p>
                <button class="add-to-cart" onclick="addToCart(${item.id}, '${category}')">
                    <span>+</span> Add to Cart
                </button>
            </div>
        </div>
    `).join('');
    
    // Trigger fade-in animations
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach(el => {
            el.classList.add('visible');
        });
    }, 100);
}

function scrollToMenu() {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// ============================================
// SHOPPING CART FUNCTIONS
// ============================================

function addToCart(itemId, category) {
    const item = menuItems[category]?.find(i => i.id === itemId);
    if (!item) return;

    const existingItem = cart.find(i => i.id === itemId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...item, quantity: 1 });
    }
    
    saveCart();
    updateCart();
    showToast(`${item.name} added to cart!`);
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCart();
    updateCart();
}

function updateQuantity(itemId, change) {
    const item = cart.find(i => i.id === itemId);
    if (!item) return;

    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(itemId);
    } else {
        saveCart();
        updateCart();
    }
}

function saveCart() {
    localStorage.setItem('brownDotsCart', JSON.stringify(cart));
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');
    
    if (!cartItems || !cartCount || !cartTotal) return;

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    cartCount.textContent = totalItems;
    cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: var(--text-light);">
                <div style="font-size: 3rem; margin-bottom: 1rem;">☕</div>
                Your cart is empty
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)} each</div>
                    <div class="quantity-control">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                    <span class="remove-item" onclick="removeFromCart(${item.id})">Remove</span>
                </div>
            </div>
        `).join('');
    }
}

function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('overlay');
    
    if (cartSidebar && overlay) {
        cartSidebar.classList.toggle('open');
        overlay.classList.toggle('active');
    }
}

// ============================================
// PAYMENT FUNCTIONS
// ============================================

function openPayment() {
    if (cart.length === 0) {
        showToast('Your cart is empty!');
        return;
    }
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.08;
    const total = subtotal + tax;
    
    // Update payment summary
    const paymentSubtotal = document.getElementById('paymentSubtotal');
    const paymentTax = document.getElementById('paymentTax');
    const paymentTotal = document.getElementById('paymentTotal');
    
    if (paymentSubtotal) paymentSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    if (paymentTax) paymentTax.textContent = `$${tax.toFixed(2)}`;
    if (paymentTotal) paymentTotal.textContent = `$${total.toFixed(2)}`;
    
    // Close cart and open payment
    toggleCart();
    
    const paymentModal = document.getElementById('paymentModal');
    const paymentOverlay = document.getElementById('paymentOverlay');
    
    if (paymentModal && paymentOverlay) {
        paymentModal.classList.add('active');
        paymentOverlay.classList.add('active');
    }
}

function closePayment() {
    const paymentModal = document.getElementById('paymentModal');
    const paymentOverlay = document.getElementById('paymentOverlay');
    
    if (paymentModal) paymentModal.classList.remove('active');
    if (paymentOverlay) paymentOverlay.classList.remove('active');
}

function selectPayment(element, method) {
    currentPaymentMethod = method;
    
    // Update visual selection
    document.querySelectorAll('.payment-method').forEach(el => {
        el.classList.remove('selected');
    });
    element.classList.add('selected');
    
    // Show/hide relevant fields
    const cardFields = document.getElementById('cardFields');
    const mobileFields = document.getElementById('mobileFields');
    const cardNumber = document.getElementById('cardNumber');
    const cardName = document.getElementById('cardName');
    
    if (cardFields && mobileFields) {
        switch(method) {
            case 'card':
                cardFields.style.display = 'block';
                mobileFields.style.display = 'none';
                if (cardNumber) cardNumber.required = true;
                if (cardName) cardName.required = true;
                break;
            case 'cash':
                cardFields.style.display = 'none';
                mobileFields.style.display = 'none';
                if (cardNumber) cardNumber.required = false;
                if (cardName) cardName.required = true;
                break;
            case 'mobile':
                cardFields.style.display = 'none';
                mobileFields.style.display = 'block';
                if (cardNumber) cardNumber.required = false;
                if (cardName) cardName.required = true;
                break;
        }
    }
}

function formatCardNumber(input) {
    let value = input.value.replace(/\s/g, '').replace(/[^0-9]/gi, '');
    let formattedValue = value.match(/.{1,4}/g)?.join(' ') || '';
    input.value = formattedValue;
}

function formatExpiry(input) {
    let value = input.value.replace(/[^0-9]/g, '');
    if (value.length >= 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    input.value = value;
}

function processPayment(event) {
    event.preventDefault();
    
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.textContent : 'Pay Now';
    
    // Show processing state
    if (submitBtn) {
        submitBtn.textContent = 'Processing...';
        submitBtn.disabled = true;
    }
    
    // Simulate payment processing
    setTimeout(() => {
        closePayment();
        showSuccessModal();
        
        // Clear cart
        cart = [];
        saveCart();
        updateCart();
        
        // Reset button
        if (submitBtn) {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
        
        // Reset form
        event.target.reset();
    }, 2000);
}

function showSuccessModal() {
    const successModal = document.getElementById('successModal');
    if (successModal) {
        successModal.classList.add('active');
    }
}

function closeSuccess() {
    const successModal = document.getElementById('successModal');
    const paymentOverlay = document.getElementById('paymentOverlay');
    
    if (successModal) successModal.classList.remove('active');
    if (paymentOverlay) paymentOverlay.classList.remove('active');
}

// ============================================
// TOAST NOTIFICATIONS
// ============================================

function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    if (!toast || !toastMessage) return;
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ============================================
// CONTACT FORM
// ============================================

function handleContactSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    showToast('Message sent successfully! We will get back to you soon.');
    event.target.reset();
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Format currency
function formatCurrency(amount) {
    return `$${amount.toFixed(2)}`;
}

// Get cart item count
function getCartCount() {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
}

// Get cart total
function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// Clear entire cart
function clearCart() {
    cart = [];
    saveCart();
    updateCart();
    showToast('Cart cleared');
}

// Check if item is in cart
function isInCart(itemId) {
    return cart.some(item => item.id === itemId);
}

// Get item quantity in cart
function getItemQuantity(itemId) {
    const item = cart.find(i => i.id === itemId);
    return item ? item.quantity : 0;
}

// ============================================
// EXPORT FUNCTIONS (for testing)
// ============================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        menuItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getCartCount,
        getCartTotal,
        clearCart,
        formatCurrency
    };
}