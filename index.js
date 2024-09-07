document.addEventListener('DOMContentLoaded', () => {
    // Animate skill bars
    const skills = [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'React', level: 75 },
        { name: 'Node.js', level: 70 }
    ];

    const skillBars = document.querySelector('.skill-bars');
    skills.forEach(skill => {
        const skillBar = document.createElement('div');
        skillBar.classList.add('skill-bar');
        skillBar.innerHTML = `
            <div class="skill-name">${skill.name}</div>
            <div class="skill-progress" style="width: 0%"></div>
        `;
        skillBars.appendChild(skillBar);

        setTimeout(() => {
            skillBar.querySelector('.skill-progress').style.width = `${skill.level}%`;
        }, 300);
    });

    // Handle form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Here you would typically send the form data to a server
        console.log('Form submitted:', { name, email, message });

        // Show a thank you message
        contactForm.innerHTML = '<p>Thank you for your message! I\'ll get back to you soon.</p>';
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('animated');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check on page load
});