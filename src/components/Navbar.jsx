import { FaCode, FaLinkedin, FaGithub, FaGitlab, FaFileDownload } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav className="mb-20 flex flex-col py-6 items-center justify-center gap-4 sm:flex-row sm:justify-between sm:px-8">
            <div className="flex items-center gap-2 text-2xl sm:justify-start sm:w-auto">
                <FaCode />
                <h1 className="font-black">IVERDUGO</h1>
            </div>

            <div className="flex items-center justify-center gap-6 text-2xl sm:justify-end sm:w-auto">
                <a
                    href="https://github.com/Isrvxl"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                    className="hover:text-blue-700 transition-colors"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://gitlab.com/isrvxl"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitLab"
                    className="hover:text-blue-700 transition-colors"
                >
                    <FaGitlab />
                </a>
                <a
                    href="https://www.linkedin.com/in/israelverdugo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                    className="hover:text-blue-700 transition-colors"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="/docs/Israel-Verdugo.docx"
                    download
                    title="Descargar CV"
                    className="hover:text-blue-700 transition-colors"
                >
                    <FaFileDownload />
                </a>
            </div>
        </nav>
    );
}
