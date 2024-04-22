const langData = {
    "en": {
        "nav-about": "About",
        "nav-skills": "Skills",
        "nav-education": "Education",
        "nav-experience": "Experience",
        "nav-interests": "Interests",
        "contact-info-text": "RECIFE-PE · BRAZIL · (81) 97304-3045 ·",
        "introduction": "Bachelor of Computer Science with 5 years of experience as a Software Engineer, skilled in areas such as Web Development, Data Science, and Machine Learning. Passionate about technology, music, and soccer. Always striving to learn and grow more.",
        "experience-title": "Experiences",
        "education-title": "Education",
        "skills-title": "Skills",
        "skills-first-subtitle": "Programming Languages & Tools",
        "skills-second-subtitle": "Workflow",
        "skills-third-subtitle": "Languages",
        "workflow-item-one": "API-First, Design & Development",
        "workflow-item-two": "Testing and Debugging Multiplatform Systems",
        "workflow-item-three": "Data Handling & Optimization",
        "workflow-item-four": "Machine Learning Integration",
        "workflow-item-five": "Cross Functional Teams",
        "workflow-item-six": "Agile Development & Scrum",
        "experience-item-one": "Software Engineer",
        "experience-item-two": "FullStack Developer",
        "experience-item-three": "Artificial Intelligence Researcher",
        "experience-date-one": "June 2022 - Present",
        "experience-date-two": "July 2021 - May 2022",
        "experience-date-three": "April 2019 - July 2021",
        "education-university": "Federal University of Pernambuco",
        "education-course": "Bachelor's Degree in Computer Science",
        "language-one": "Portuguese · Native",
        "language-two": "English · Advanced",
        "experience-description-one": "As a Software Engineer in a financial market company, I develop and maintain essential microservices, focusing on high availability and security. I employ best practices in coding and software architecture, collaborating in an agile environment to contribute innovative ideas that continuously improve development processes. Additionally, I directly address complex technical issues, working to optimize system performance and scalability.",
        "experience-description-two": "Development and maintenance of virtual assistants for companies across various industries. Always focusing on providing efficient and intelligent interaction between users and automated systems.",
        "experience-description-three": "Research and development in artificial intelligence focused on urban mobility and smart cities, involving the creation and enhancement of optimization algorithms and predictive artificial intelligence, aimed at new approaches and solutions for complex problems.",
    },
    "pt":{
        "nav-about": "Sobre",
        "nav-skills": "Habilidades",
        "nav-education": "Educação",
        "nav-experience": "Experiência",
        "nav-interests": "Interesses",
        "contact-info-text": "RECIFE-PE · BRASIL · (81) 97304-3045 ·",
        "introduction": "Bacharel em Ciência da Computação atuando há 5 anos como Engenheiro de Sofware com experiências em áreas como Desenvolvimento Web, Data Science e Machine Learning. Apaixonado por tecnologia, música e futebol. Sempre em busca de aprender e crescer cada vez mais.",
        "experience-title": "Experiências",
        "education-title": "Educação",
        "skills-title": "Habilidades",
        "skills-first-subtitle": "Linguagens de Programação & Ferramentas",
        "skills-second-subtitle": "Fluxo de Trabalho",
        "skills-third-subtitle": "Idiomas",
        "workflow-item-one": "Abordagem API-First no Design & Development",
        "workflow-item-two": "Testing and Debugging Multiplatform Systems",
        "workflow-item-three": "Manipulação e Otimização de Dados",
        "workflow-item-four": "Integração com Machine Learning",
        "workflow-item-five": "Equipes Cross Functional",
        "workflow-item-six": "Desenvolvimento Ágil & Scrum",
        "experience-item-one": "Engenheiro de Software",
        "experience-item-two": "Desenvolvedor FullStack",
        "experience-item-three": "PESQUISADOR DE INTELIGÊNCIA ARTIFICIAL",
        "experience-date-one": "Junho 2022 - Presente",
        "experience-date-two": "Julho 2021 - Maio 2022",
        "experience-date-three": "Abril 2019 - Julho 2021",
        "education-university": "Universidade Federal de Pernambuco",
        "education-course": "Bacharelado em Ciência da Computação",
        "language-one": "Português · Nativo",
        "language-two": "Inglês · Avançado", 
        "experience-description-one": "Como Engenheiro de Software em uma empresa do mercado financeiro, desenvolvo e mantenho microserviços essenciais, focando na alta disponibilidade e segurança. Utilizo as melhores práticas de código e arquitetura de software, colaborando em um ambiente ágil para contribuir com ideias inovadoras que melhoram continuamente os processos de desenvolvimento. Além disso, atuo diretamente na resolução de problemas técnicos complexos, trabalhando para otimizar a performance e a escalabilidade dos sistemas.",
        "experience-description-two": "Desenvolvimento e manutenção de assistentes virtuais para empresas de diversos segmentos. Sempre focando em proporcionar uma interação eficiente e inteligente entre usuários e sistemas automatizados.",
        "experience-description-three": "Pesquisa e desenvolvimento em inteligência artificial focados em mobilidade urbana e smart cities, com criação e aprimoramento de algoritmos de otimização e inteligência artificial preditiva, visando novas abordagens e soluções para problemas complexos."
    }
}


function changeLanguage(lang){

    const elementIds = Object.keys(langData[lang])
    for(let i=0; i < elementIds.length; i++) {
        element = document.getElementById(elementIds[i])
        if (element != null){
            element.innerText = langData[lang][elementIds[i]];
        } 
    }
}
