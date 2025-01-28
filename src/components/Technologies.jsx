import { FaHtml5, FaCss3, FaJs, FaReact, FaJava, FaLaravel, FaGit } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiDjango, SiMysql, SiPostgresql, SiMongodb, SiPostman} from "react-icons/si";
import { motion } from "motion/react"

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse'
        }
    }
})

export default function Technologies() {
  return (
    <div className="border-b border-neutral-900 pb-40 pt-20">
        <motion.h2 whileInView={{opacity: 1, y:0}} initial={{opacity:0, y: -100}} transition={{duration: 0.5}} className="my-20 text-center text-4xl">Tecnologías</motion.h2>
        <motion.div whileInView={{opacity: 1, x:0}} initial={{opacity:0, x: -100}} transition={{duration: 1.5}} className="flex flex-wrap items-center justify-center gap-4">
            <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaCss3  className="text-7xl text-blue-500"/>
            </motion.div>
            <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaHtml5 className="text-7xl text-orange-600"/>
            </motion.div>
            <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTailwindcss  className="text-7xl text-blue-400"/>
            </motion.div> 
            <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaJs className="text-7xl text-yellow-400"/>
            </motion.div>
            <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaReact className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTypescript  className="text-7xl text-blue-600"/>
            </motion.div>
            <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaJava  className="text-7xl text-white"/>
            </motion.div>
            <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaLaravel  className="text-7xl text-red-500"/>
            </motion.div>
            <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiDjango  className="text-7xl text-green-900"/>
            </motion.div>
            <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPostman  className="text-7xl text-orange-600"/>
            </motion.div>
            <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 mt-2">
                <FaGit  className="text-7xl text-orange-600"/>
            </motion.div>
            <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 mt-2">
                <SiMysql  className="text-7xl text-blue-700"/>
            </motion.div>
            <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 mt-2">
                <SiMongodb  className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 mt-2">
                <SiPostgresql  className="text-7xl text-blue-600"/>
            </motion.div>
        </motion.div>
    </div>
  )
}
