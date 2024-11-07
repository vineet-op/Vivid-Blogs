import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'



export const Hero = () => {

    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
            <nav className="fixed w-full z-10 bg-white bg-opacity-10 backdrop-blur-md">
                <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                    <a href="/" className="flex items-center space-x-2">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span className="text-2xl font-bold text-white">VividBlog</span>
                    </a>
                    <div className="flex space-x-2 gap-2">
                        <button className="text-white p-3  border-white hover:bg-white hover:text-purple-600 transition-colors duration-300 rounded-xl ">
                            <a href="/signin"  >
                                Sign In
                            </a>
                        </button>
                        <button className="bg-yellow-400 p-2 rounded-lg text-purple-800 hover:bg-yellow-300 transition-colors duration-300">
                            <a href="/signin">
                                Sign Up
                            </a>
                        </button>
                    </div>
                </div>
            </nav>

            <main className="container mx-auto px-4 pt-24">
                <motion.div
                    className="flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight"
                        style={{ y: scrollY * 0.2 }}
                    >
                        Welcome to <span className="text-yellow-300">VividBlog</span>
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl text-white mb-8 max-w-2xl"
                        style={{ y: scrollY * 0.1 }}
                    >
                        Explore a world of vibrant ideas, colorful stories, and inspiring content
                    </motion.p>
                </motion.div>

            </main>

            <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                <svg className="w-full h-auto" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#ffffff" fillOpacity="0.2" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        </div>
    )
}