import {HERO_CONTENT} from '../data/index'
import { motion, useAnimation } from "motion/react"
import { useEffect } from 'react'

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
})

const imgVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 1, delay: 1.2 }
    },
    rotate: {
        rotate: [0, -5, 5, -5],
        transition: {
            duration: 5,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse'
        }
    }
}

export default function Hero() {

    const controls = useAnimation()

    useEffect(() => {
        controls.start('visible').then(() => {
            controls.start('rotate')
        })
    }, [controls])

    return (
        <div className="border-b border-neutral-900 pb-40 pt-10 lg:mb-35">
            <div className="flex flex-wrap items-center">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 variants={container(0)} initial="hidden" animate="visible" transition={{duration: 0.5, delay: 1}} className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Israel Verdugo</motion.h1>
                        <motion.span variants={container(0.5)} initial="hidden" animate="visible" className="bg-gradient-to-r from-blue-500 via-slate-500 to-purple-600 bg-clip-text text-4xl tracking-tight text-transparent">Ingeniero Civil Informático</motion.span>
                        <motion.p variants={container(1)} initial="hidden" animate="visible" className='my-2 max-w-xl py-6 font-light text-left text-lg tracking-tighter'>{HERO_CONTENT}</motion.p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center'>
                        <motion.img variants={imgVariants} initial="hidden" animate={controls} className='mt-10 h-72 sm:h-96 md:h-96 lg:h-96 rounded-3xl border-2 border-neutral-800' src="./hero.png" alt="Israel Verdugo"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
