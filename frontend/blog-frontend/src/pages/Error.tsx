
import { useNavigate } from 'react-router-dom'

export const Error = () => {

    const navigate = useNavigate()

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-rose-400 to-orange-300">
            <h1 className="text-5xl text-center font-extrabold mb-4">404 - Page Not Found</h1>
            <p className="text-3xl text-center font-extrabold mb-8">Oops! The page you're looking for doesn't exist.</p>
            <button onClick={() => navigate("/blogs")} className='bg-black text-white text-lg p-2 rounded-xl' >
                Return to Home
            </button>
        </div>
    )
}