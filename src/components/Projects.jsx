import {PROJECTS} from '../data/index'
import { motion } from "motion/react"

export default function Projects() {
    return (
        <div className="border-b border-neutral-900 pb-40 pt-20">
        <motion.h2 whileInView={{opacity: 1, y:0}} initial={{opacity:0, y: -100}} transition={{duration: 0.5}} className="my-20 text-center text-4xl">Mis últimos proyectos</motion.h2>
        <div className='relative z-10 grid max-w-6xl gap-6 mx-auto mt-4 md:grid-cols-4 sm:grid-cols-2'>
            {PROJECTS.map((project, index) => (
                <div key={index} className="p-4 border-2 border-neutral-800 rounded-2xl">
                    <motion.h3 whileInView={{opacity: 1, x:0}} initial={{opacity:0, x: -100}} transition={{duration: 1}} className="mb-4 text-xl text-center">{project.title}</motion.h3>
                    <div className="flex justify-center items-center">
                            <motion.img whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1 }} src={project.image} alt={project.title} className="rounded-2xl max-h-full"/>
                    </div>
                    <div className='flex gap-5 justify-center mt-5'>
                        <motion.a whileInView={{opacity: 1}} initial={{opacity:0}} transition={{duration: 1.5}} target='_blank' rel="noopener noreferrer" href={project.urlGithub} className='p-2 transition duration-150 rounded-lg bg-slate-800 text-white hover:bg-slate-900 uppercase'>Github</motion.a>
                        <motion.a whileInView={{opacity: 1}} initial={{opacity:0}} transition={{duration: 1.5}} target='_blank' rel="noopener noreferrer" href={project.urlDemo} className='p-2 transition duration-150 rounded-lg bg-blue-700 hover:bg-blue-900 uppercase'>Demo</motion.a>
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}
