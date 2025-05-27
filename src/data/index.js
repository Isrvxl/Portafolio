import project4 from "../assets/projects/project4.png"
import project6 from "../assets/projects/project6.png"
import project7 from "../assets/projects/project7.png"
import project8 from "../assets/projects/project8.png"
import project9 from "../assets/projects/project9.png"
import project10 from "../assets/projects/project10.png"
import project11 from "../assets/projects/project11.png"
import project12 from "../assets/projects/project12.png"

export const HERO_CONTENT = `Desarrollador Full Stack e Ingeniero QA Senior con más de 3 años de experiencia en el sector tecnológico. He colaborado en el diseño, desarrollo y aseguramiento de calidad de 
proyectos tecnológicos, destacándome por mi capacidad de adaptarme a nuevos desafíos y aportar soluciones efectivas. Estoy enfocado en aplicar mis habilidades y conocimientos para 
contribuir al éxito de un equipo dinámico, enfrentar nuevos desafíos y seguir creciendo profesionalmente.`;

export const ABOUT_TEXT = `Desarrollador Full Stack con experiencia profesional en tecnologías como Java, Laravel,
JavaScript, React, TypeScript y Angular. Especializado en la creación de aplicaciones Full Stack eficientes e innovadoras, he trabajado con stacks como PERN y MERN, con herramientas modernas como Express, 
Tailwind CSS, Jest, SuperTest y Swagger para la documentación de API's.
Actualmente, estoy centrado en el desarrollo full stack, creando soluciones robustas y escalables con React y/o Angular. Disfruto enfrentar desafíos técnicos, colaborar en equipo y aprender 
continuamente nuevas tecnologías para mantenerme a la vanguardia en el sector tecnológico.`;

export const EXPERIENCES = [
    {
        year: "2022 - 2025",
        role: "Ingeniero QA Senior (Manual y Automatizador)",
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
        title: "Control de Gastos",
        image: project4,
        description: "Proyecto React-TypeScript con TailwindCSS, Context API.",
        urlGithub: 'https://github.com/Isrvxl/Control_de_Gastos',
        urlDemo: 'https://control-de-gastos-iv.netlify.app',
    },
    {
        title: "Buscador de Clima",
        image: project6,
        description: "Proyecto React-TypeScript con CSS Modules, ZOD, Axios.",
        urlGithub: 'https://github.com/Isrvxl/Buscador_de_Clima',
        urlDemo: 'https://buscador-de-clima-iv.netlify.app',
    },
    {
        title: "Cotizador de Cripto",
        image: project7,
        description: "Proyecto React-TypeScript con CSS, Zustand, ZOD, Axios.",
        urlGithub: 'https://github.com/Isrvxl/Cotizador_de_Cryptomonedas',
        urlDemo: 'https://cotizador-crypto-iv.netlify.app',
    },
    {
        title: "Buscador de Bebidas",
        image: project8,
        description: "Proyecto React-TypeScript con TailwindCSS, Zustand, ZOD, Axios, React Router DOM",
        urlGithub: 'https://github.com/Isrvxl/Buscador_de_Bebidas',
        urlDemo: 'https://buscador-bebidas-iv.netlify.app',
    },    
    {
        title: "Admin de Productos",
        image: project9,
        description: "Proyecto PERN Stack con Jest, Swagger, TailwindCSS, React Router DOM y Sequalize.",
        urlGithub: 'https://github.com/Isrvxl/PERN_CLIENT',
    },
    {
        title: "UpTask",
        image: project10,
        description: "Proyecto MERN Stack con TailwindCSS, ZOD, Axios, React Router DOM y Moongose.",
        urlGithub: 'https://github.com/Isrvxl/UpTask_Frontend',
        urlDemo: 'https://up-task-iv.vercel.app',
    },
    {
        title: "Quiosco Fresh Coffee",
        image: project11,
        description: "Proyecto Next.js con TypeScript, TailwindCSS, Server Actions, App Router, Prisma, ZOD",
        urlGithub: 'https://github.com/Isrvxl/Quiosco',
    },
    {
        title: "Countries App",
        image: project12,
        description: "Proyecto Angular-TypeScript con TailwindCSS, DaisyUI, Signals, RxJS.",
        urlGithub: 'https://github.com/Isrvxl/Countries_App',
        urlDemo: 'https://countries-app-iv.netlify.app/',
    },
];

export const CONTACT = {
    address: "Santiago, Chile",
    phoneNo: "+569 34240921",
    email: "isrvelverdugo@gmail.com",
};
