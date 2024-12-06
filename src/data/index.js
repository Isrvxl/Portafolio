import project1 from "../assets/projects/project1.png"
import project2 from "../assets/projects/project2.png"
import project3 from "../assets/projects/project3.png"
import project4 from "../assets/projects/project4.png"
import project5 from "../assets/projects/project5.png"
import project6 from "../assets/projects/project6.png"

export const HERO_CONTENT = `Desarrollador web e Ingeniero QA con 3 años de experiencia en el sector tecnológico. He colaborado en el diseño, desarrollo y aseguramiento de la calidad de 
proyectos tecnológicos, destacándome por mi capacidad de adaptarme a nuevos desafíos y aportar soluciones efectivas. Estoy enfocado en aplicar mis habilidades y conocimientos para 
contribuir al éxito de un equipo dinámico, enfrentar nuevos desafíos y seguir creciendo profesionalmente.`;

export const ABOUT_TEXT = `Soy un desarrollador web versátil y comprometido, con 3 años de experiencia profesional en tecnologías como Java, Laravel, Django, MySQL, PostgreSQL, 
JavaScript, React y TypeScript. Recientemente, me he especializado en crear aplicaciones eficientes y funcionales, integrando herramientas como Tailwind CSS, Context API y React Router DOM.
Comencé mi carrera como desarrollador freelance en 2020, trabajando en proyectos completos con Laravel mientras cursaba la universidad. Posteriormente, me desempeñé durante 
2 años como Ingeniero QA, fortaleciendo mi atención al detalle, mis habilidades analíticas y mi capacidad de trabajo en equipo.
Actualmente, estoy enfocado en el desarrollo web, con el objetivo de aplicar mis habilidades y conocimientos para crear soluciones innovadoras y de alta calidad.
Disfruto enfrentar desafíos, colaborar en equipo y el aprender nuevas tecnologías para seguir creciendo profesionalmente.`;

export const EXPERIENCES = [
    {
        year: "2022 - 2024",
        role: "Ingeniero QA (Manual y Automatizador)",
        company: "Sentra",
        description: `Automatización de pruebas con Selenium y Cucumber. Realización de pruebas de rendimiento con JMeter. Pruebas de APIs utilizando Postman. 
        Verificación de pasos a producción. Diseño y creación de planes de prueba manuales. Ejecución y certificación de casos de pruebas manuales en ambientes preproductivos.
        Elaboración de evidencias de pruebas. Acondicionamiento de datos.`,
        technologies: ["Selenium", "JMeter", "Postman", "SQL", "Jira"],
    },
    {
        year: "2020 - 2021",
        role: "Desarrollador Web Junior con Laravel",
        company: "Independiente",
        description: `Integración de diseño a templates: Blade. Desarrollo de Backend y API en Laravel. Integración Front con back tipo Ajax Jquery. Desarrollo de Frontend con Bootstrap. 
        Autentificación para App Laravel Passport. MySQL Esquema base de datos con migraciones.`,
        technologies: ["Laravel", "JavaScript", "Bootstrap", "HTML5", "MySQL"],
    },
    {
        year: "2018",
        role: "Desarrollador Junior con Java",
        company: "SENCE",
        description: `Desarrollo de Software en Java. Gestion de requisitos para la construccion de Software. Integración de módulos de Software. Soporte técnico de aplicaciones de Software.
        Diseño de base de datos MySQL. Modelamiento de procesos con Bizagi Modeler.`,
        technologies: ["Java", "Bootstrap", "HTML5", "MySQL"],
    },
];

export const PROJECTS = [
    {
        title: "GuitarLA - React",
        image: project1,
        description:
        "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
        urlGithub: 'https://github.com/Isrvxl/Control_de_Gastos',
        urlDemo: 'https://guitar-la-iv.netlify.app/',
        technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    },
    {
        title: "Calculadora de Propinas",
        image: project2,
        description:
        "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
        urlGithub: 'https://github.com/Isrvxl/Calculadora_de_Propinas',
        urlDemo: 'https://calculadora-de-propinas-iv.netlify.app/',
        technologies: ["HTML", "CSS", "Angular", "Firebase"],
    },
    {
        title: "Contador de Calorías",
        image: project3,
        description:
        "A personal portfolio website showcasing projects, skills, and contact information.",
        urlGithub: 'https://github.com/Isrvxl/Calorie_Tracker',  
        urlDemo: 'https://calorie-tracker-iv.netlify.app/',
        technologies: ["HTML", "CSS", "React", "Bootstrap"],
    },
    {
        title: "Control de Gastos",
        image: project4,
        description:
        "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
        urlGithub: 'https://github.com/Isrvxl/Control_de_Gastos',
        urlDemo: 'https://control-de-gastos-iv.netlify.app/',
        technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
    },
    {
        title: "Pacientes Veterinaria",
        image: project5,
        description:
        "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
        urlGithub: 'https://github.com/Isrvxl/Seguimiento_de_Pacientes_Veterinaria',
        urlDemo: 'https://seguimiento-pacientes-veterinaria-iv.netlify.app/',
        technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
    },
    {
        title: "Buscador de Clima",
        image: project6,
        description:
        "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
        urlGithub: 'https://github.com/Isrvxl/Buscador_de_Clima',
        urlDemo: 'https://buscador-de-clima-iv.netlify.app/',
        technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
    },
];

export const CONTACT = {
    address: "Santiago, Chile",
    phoneNo: "+569 34240921",
    email: "israel.verdugo.angeles@gmail.com",
};
