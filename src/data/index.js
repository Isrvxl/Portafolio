import project1 from "../assets/projects/project1.png"
import project2 from "../assets/projects/project2.png"
import project3 from "../assets/projects/project3.png"
import project4 from "../assets/projects/project4.png"
import project5 from "../assets/projects/project5.png"
import project6 from "../assets/projects/project6.png"
import project7 from "../assets/projects/project7.png"

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
        description: "Proyecto desarrollado con React (Vite), useState y utilizando LocalStorage.",
        urlGithub: 'https://github.com/Isrvxl/Control_de_Gastos',
        urlDemo: 'https://guitar-la-iv.netlify.app/',
    },
    {
        title: "Calculadora de Propinas",
        image: project2,
        description: "Proyecto desarrollado con TypeScript (Vite), TailwindCSS, useMemo.",
        urlGithub: 'https://github.com/Isrvxl/Calculadora_de_Propinas',
        urlDemo: 'https://calculadora-de-propinas-iv.netlify.app/',
    },
    {
        title: "Contador de Calorías",
        image: project3,
        description: "Proyecto desarrollado con TypeScript (Vite), TailwindCSS, useReducer.",
        urlGithub: 'https://github.com/Isrvxl/Calorie_Tracker',  
        urlDemo: 'https://calorie-tracker-iv.netlify.app/',
    },
    {
        title: "Control de Gastos",
        image: project4,
        description: "Proyecto desarrollado con TypeScript (Vite), TailwindCSS, Context API.",
        urlGithub: 'https://github.com/Isrvxl/Control_de_Gastos',
        urlDemo: 'https://control-de-gastos-iv.netlify.app/',
    },
    {
        title: "Pacientes Veterinaria",
        image: project5,
        description: "Proyecto desarrollado con TypeScript (Vite), TailwindCSS, Zustand, React Hook Form.",
        urlGithub: 'https://github.com/Isrvxl/Seguimiento_de_Pacientes_Veterinaria',
        urlDemo: 'https://seguimiento-pacientes-veterinaria-iv.netlify.app/',
    },
    {
        title: "Buscador de Clima",
        image: project6,
        description: "Proyecto desarrollado con TypeScript (Vite), CSS Modules, ZOD, Axios.",
        urlGithub: 'https://github.com/Isrvxl/Buscador_de_Clima',
        urlDemo: 'https://buscador-de-clima-iv.netlify.app/',
    },
    {
        title: "Cotizador de Cripto",
        image: project7,
        description: "Proyecto desarrollado con TypeScript (Vite), CSS, Zustand, ZOD, Axios.",
        urlGithub: 'https://github.com/Isrvxl/Cotizador_de_Cryptomonedas',
        urlDemo: 'https://cotizador-crypto-iv.netlify.app/',
    }
];

export const CONTACT = {
    address: "Santiago, Chile",
    phoneNo: "+569 34240921",
    email: "israel.verdugo.angeles@gmail.com",
};
