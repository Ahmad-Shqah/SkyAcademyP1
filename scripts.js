
/*Main codes are : the news bar code to siwtch every 10 seconds , the search of req cards , hiding cards*/ 
document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.navigation-dot');
    const cards = document.querySelectorAll('.card');

    function showSlide(index) {
        if (index >= slides.length) currentIndex = 0;
        if (index < 0) currentIndex = slides.length - 1;

        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${-100 * currentIndex}%)`;
        });

        dots.forEach((dot, i) => {
            dot.classList.remove('active');
        });
        dots[currentIndex].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentIndex += 1);
    }

    function currentSlide(index) {
        showSlide(currentIndex = index);
    }

    // Set initial active dot
    showSlide(currentIndex);

    // Auto-slide every 5 seconds
    setInterval(nextSlide, 5000); // Change 5000 to adjust the interval

    // Attach click events for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => currentSlide(index));
    });

    // Search for cards
    const searchInput = document.getElementById('search-input');

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        cards.forEach(card => {
            const name = card.querySelector('h3')?.textContent.toLowerCase() ; // Added null check
            if (name.includes(searchTerm)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });


    // Hide card when approve or decline button is clicked
    cards.forEach(card => {
        const approveBtn = card.querySelector('.approve-btn');
        const declineBtn = card.querySelector('.decline-btn');

        if (approveBtn) {
            approveBtn.addEventListener('click', () => {
                card.style.display = 'none';
            });
        }

        if (declineBtn) {
            declineBtn.addEventListener('click', () => {
                card.style.display = 'none';
            });
        }
    });
});

// for new request button
document.querySelector('.new-request-btn').addEventListener('click', function() {
    alert('declined xD');
});

document.querySelector('.ButtonInside').addEventListener('click', function() {
    alert('declined xD');
});