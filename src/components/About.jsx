import {ABOUT_TEXT} from '../data/index'
import { motion } from "motion/react"

export default function About() {
  return (
    <div className="border-b border-neutral-900 pb-40 pt-20">
        <motion.h2 whileInView={{opacity: 1, y:0}} initial={{opacity:0, y: -100}} transition={{duration: 0.5}} className="my-20 text-center text-4xl">Sobre Mí</motion.h2>
        <div className="flex flex-wrap">
            <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 0.5}} className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <img src="./about_me.png" alt="about"/>
                </div>
            </motion.div>
            <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: 100}} transition={{duration: 0.5}} className="w-full lg:w-1/2">
                <div className="flex justify-center text-left lg:justify-start">
                    <p className='mt-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}
