import { BookOpen } from "lucide-react"


export const Hero = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-800">
            <header className="px-4 lg:px-6 h-14 flex items-center mt-5">
                <a className="flex items-center justify-center" href="/">
                    <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    <span className="ml-2 text-lg font-bold text-gray-900 dark:text-white">BlogVerse</span>
                </a>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <button>
                        <a href="/signin" className="text-sm font-medium text-blue-400  p-2 rounded-md">
                            Log In
                        </a>
                    </button>
                    <button>
                        <a href="/signup" className="text-sm font-medium text-blue-400  p-2 rounded-md">
                            Sign Up
                        </a>
                    </button>
                </nav>
            </header>
            <main className="flex-1 flex items-center justify-center">
                <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-8">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none max-w-3xl text-gray-900 dark:text-white">
                        Discover a World of Ideas
                    </h1>
                    <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-300">
                        Join our community of thinkers, dreamers, and doers. Share your stories, gain insights, and connect with
                        like-minded individuals.
                    </p>
                    <div className="w-full max-w-sm space-y-2">
                        <button className="text-md font-semibold text-blue-400 bg-white p-1.5 rounded-2xl">Get Started</button>
                    </div>
                </div>
            </main>
        </div>
    )
}