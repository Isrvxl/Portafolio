import project2 from "../assets/projects/project2.png"
import project3 from "../assets/projects/project3.png"
import project4 from "../assets/projects/project4.png"
import project5 from "../assets/projects/project5.png"
import project6 from "../assets/projects/project6.png"
import project7 from "../assets/projects/project7.png"
import project8 from "../assets/projects/project8.png"
import project9 from "../assets/projects/project9.png"

export const HERO_CONTENT = `Desarrollador web e Ingeniero QA con 3 años de experiencia en el sector tecnológico. He colaborado en el diseño, desarrollo y aseguramiento de la calidad de 
proyectos tecnológicos, destacándome por mi capacidad de adaptarme a nuevos desafíos y aportar soluciones efectivas. Estoy enfocado en aplicar mis habilidades y conocimientos para 
contribuir al éxito de un equipo dinámico, enfrentar nuevos desafíos y seguir creciendo profesionalmente.`;

export const ABOUT_TEXT = `Desarrollador web versátil y comprometido con 3 años de experiencia profesional en tecnologías como Java, Laravel,
JavaScript, React, TypeScript. Especializado en la creación de aplicaciones FullStack eficientes e innovadoras, integrando herramientas modernas como Tailwind CSS, 
React Router DOM, Jest, SuperTest y Swagger para la documentación de API's.
Inicié mi carrera en 2020 como desarrollador freelance, trabajando en proyectos basados en WordPress y Laravel. Posteriormente, me desempeñé como Ingeniero QA, 
fortaleciendo habilidades clave como la atención al detalle, análisis crítico y trabajo en equipo. Esta experiencia complementó mi enfoque en la calidad y la optimización en cada desarrollo.
Actualmente, estoy centrado en el desarrollo web, creando soluciones robustas y escalables. Disfruto enfrentar desafíos técnicos, colaborar en equipo y aprender 
continuamente nuevas tecnologías para mantenerme a la vanguardia en el sector tecnológico.`;

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
        title: "Calculadora de Propinas",
        image: project2,
        description: "Proyecto React-TypeScript con TailwindCSS y useMemo.",
        urlGithub: 'https://github.com/Isrvxl/Calculadora_de_Propinas',
        urlDemo: 'https://calculadora-de-propinas-iv.netlify.app/',
    },
    {
        title: "Contador de Calorías",
        image: project3,
        description: "Proyecto React-TypeScript con TailwindCSS, useReducer.",
        urlGithub: 'https://github.com/Isrvxl/Calorie_Tracker',  
        urlDemo: 'https://calorie-tracker-iv.netlify.app/',
    },
    {
        title: "Control de Gastos",
        image: project4,
        description: "Proyecto React-TypeScript con TailwindCSS, Context API.",
        urlGithub: 'https://github.com/Isrvxl/Control_de_Gastos',
        urlDemo: 'https://control-de-gastos-iv.netlify.app/',
    },
    {
        title: "Pacientes Veterinaria",
        image: project5,
        description: "Proyecto React-TypeScript con TailwindCSS, Zustand, React Hook Form.",
        urlGithub: 'https://github.com/Isrvxl/Seguimiento_de_Pacientes_Veterinaria',
        urlDemo: 'https://seguimiento-pacientes-veterinaria-iv.netlify.app/',
    },
    {
        title: "Buscador de Clima",
        image: project6,
        description: "Proyecto React-TypeScript con CSS Modules, ZOD, Axios.",
        urlGithub: 'https://github.com/Isrvxl/Buscador_de_Clima',
        urlDemo: 'https://buscador-de-clima-iv.netlify.app/',
    },
    {
        title: "Cotizador de Cripto",
        image: project7,
        description: "Proyecto React-TypeScript con CSS, Zustand, ZOD, Axios.",
        urlGithub: 'https://github.com/Isrvxl/Cotizador_de_Cryptomonedas',
        urlDemo: 'https://cotizador-crypto-iv.netlify.app/',
    },
    {
        title: "Buscador de Bebidas",
        image: project8,
        description: "Proyecto React-TypeScript con TailwindCSS, Zustand, ZOD, Axios, React Router DOM y Más.",
        urlGithub: 'https://github.com/Isrvxl/Buscador_de_Bebidas',
        urlDemo: 'https://buscador-bebidas-iv.netlify.app/',
    },    
    {
        title: "Admin de Productos",
        image: project9,
        description: "Proyecto PERN Stack con Jest, Swagger, TailwindCSS, React Router DOM y Más.",
        urlGithub: 'https://github.com/Isrvxl/PERN_CLIENT',
        urlDemo: 'https://administrador-de-productos-iv.vercel.app',
    },
];

export const CONTACT = {
    address: "Santiago, Chile",
    phoneNo: "+569 34240921",
    email: "israel.verdugo.angeles@gmail.com",
};
