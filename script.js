// Smooth Scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate features on scroll
document.addEventListener('scroll', () => {
    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
        const featurePosition = feature.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.5;
        if (featurePosition < screenPosition) {
            feature.classList.add('animate');
        } else {
            feature.classList.remove('animate');
        }
    });
});
