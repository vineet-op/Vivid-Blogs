
import { useNavigate } from 'react-router-dom'

export const Error = () => {

    const navigate = useNavigate()

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-rose-400 to-orange-300">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-xl mb-8">Oops! The page you're looking for doesn't exist.</p>
            <div className="max-w-md text-center mb-8">
                <p className="mb-4">
                    It seems you've ventured into uncharted territory. Don't worry, even the best explorers sometimes lose their way!
                </p>
                <p>
                    Let's get you back on track.
                </p>
            </div>
            <button onClick={() => navigate("/blogs")} className='bg-black text-white p-2 rounded-xl' >
                Return to Home
            </button>
        </div>
    )
}