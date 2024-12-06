import { FaCode, FaLinkedin, FaGithub, FaGitlab } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="ml-8 flex flex-shrink-0 items-center gap-1 text-2xl">
                <FaCode />
                <h1 className='font-black mx-2 w-10'>IVERDUGO</h1>
            </div>
            <div className='mr-8 flex items-center justify-center gap-6 text-2xl'>
                <a
                    href="https://www.linkedin.com/in/israelverdugo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-700 transition-colors"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/Isrvxl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-700 transition-colors"
                >
                    <FaGithub />
                </a> 
                <a
                    href="https://gitlab.com/isrvxl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-700 transition-colors"
                >   
                    <FaGitlab />
                </a> 
            </div>
        </nav>
    )
}
