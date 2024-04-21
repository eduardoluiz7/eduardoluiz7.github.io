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


const langData = {
    "en": {
        "nav-about": "About",
        "nav-skills": "Skills",
        "nav-education": "Education",
        "nav-experience": "Experience",
        "nav-interests": "Interests",
        "contact-info": "RECIFE-PE · BRAZIL · (81) 97304-3045 ·",
        "introduction": "Bachelor of Computer Science with 5 years of experience as a Software Engineer, skilled in areas such as Web Development, Data Science, and Machine Learning. Passionate about technology, music, and soccer. Always striving to learn and grow more."
    },
    "pt":{
        "nav-about": "Sobre",
        "nav-skills": "Habilidades",
        "nav-education": "Educação",
        "nav-experience": "Experiência",
        "nav-interests": "Interesses",
        "contact-info": "RECIFE-PE · BRASIL · (81) 97304-3045 ·",
        "introduction": "Bacharel em Ciência da Computação atuando há 5 anos como Engenheiro de Sofware com experiências em áreas como Desenvolvimento Web, Data Science e Machine Learning. Apaixonado por tecnologia, música e futebol. Sempre em busca de aprender e crescer cada vez mais."
    }
}
