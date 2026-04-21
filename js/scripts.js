/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const id = entry.target.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${id}"]`);

        if (entry.isIntersecting) {
            // 當區塊進入畫面時，把所有標籤的 active 拿掉，只幫目前的加上
            document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
            navLink.classList.add('active');
        }
    });
}, { threshold: 0.5 }); // 0.5 表示區塊出現一半時就觸發

// 告訴偵測器要監控哪些 section
document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
});
