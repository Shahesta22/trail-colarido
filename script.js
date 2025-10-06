    const eventsScroll = document.getElementById('eventsScroll');
    const scrollLeft = document.getElementById('scrollLeft');
    const scrollRight = document.getElementById('scrollRight');
    scrollLeft.addEventListener('click', () => { eventsScroll.scrollBy({ left: -300, behavior: 'smooth' }); });
    scrollRight.addEventListener('click', () => { eventsScroll.scrollBy({ left: 300, behavior: 'smooth' }); });

    const coordinatorsScroll = document.getElementById('coordinatorsScroll');
    const scrollLeftCoordinators = document.getElementById('scrollLeftCoordinators');
    const scrollRightCoordinators = document.getElementById('scrollRightCoordinators');
    scrollLeftCoordinators.addEventListener('click', () => { coordinatorsScroll.scrollBy({ left: -300, behavior: 'smooth' }); });
    scrollRightCoordinators.addEventListener('click', () => { coordinatorsScroll.scrollBy({ left: 300, behavior: 'smooth' }); });

    // Axe animation enhancement
    document.addEventListener('DOMContentLoaded', function() {
      const axe = document.querySelector('.axe');
      
      // Add subtle rotation on scroll
      window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const scheduleSection = document.getElementById('schedule');
        const schedulePosition = scheduleSection.offsetTop;
        const scheduleHeight = scheduleSection.offsetHeight;
        
        if (scrollPosition > schedulePosition - window.innerHeight/2 && 
            scrollPosition < schedulePosition + scheduleHeight) {
          const rotation = (scrollPosition - schedulePosition) / 10;
          axe.style.transform = `rotate(${rotation}deg)`;
        }
      });

      // Gallery filter functionality
      const filterBtns = document.querySelectorAll('.filter-btn');
      const galleryItems = document.querySelectorAll('.gallery-item');

      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          // Remove active class from all buttons
          filterBtns.forEach(b => b.classList.remove('active'));
          // Add active class to clicked button
          btn.classList.add('active');
          
          const filter = btn.getAttribute('data-filter');
          
          galleryItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
              item.style.display = 'block';
            } else {
              item.style.display = 'none';
            }
          });
        });
      });

      // Candle animation
      const candlesContainer = document.getElementById('candlesContainer');
      const numCandles = 15;
      
      // Create candles
      for (let i = 0; i < numCandles; i++) {
        const candle = document.createElement('div');
        candle.className = 'candle';
        
        const candleBody = document.createElement('div');
        candleBody.className = 'candle-body';
        
        const candleFlame = document.createElement('div');
        candleFlame.className = 'candle-flame';
        
        const candleGlow = document.createElement('div');
        candleGlow.className = 'candle-glow';
        
        candle.appendChild(candleBody);
        candle.appendChild(candleFlame);
        candle.appendChild(candleGlow);
        candlesContainer.appendChild(candle);
      }
      
      // Light candles with delay
      const candles = document.querySelectorAll('.candle-flame, .candle-glow');
      candles.forEach((candle, index) => {
        setTimeout(() => {
          candle.style.animation = 'lightCandle 1s forwards, candleFlicker 3s infinite alternate';
          if (candle.classList.contains('candle-glow')) {
            candle.style.animation += ', candleGlow 3s infinite alternate';
          }
        }, index * 300);
      });

      // Contact form submission
      const contactForm = document.getElementById('contactForm');
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
      });
    });
