export const Loader = () => {

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col animate-pulse">
            {/* Skeleton Image */}
            <div className="w-full h-48 bg-gray-300 rounded-md mb-4"></div>

            {/* Skeleton Title */}
            <div className="h-6 bg-gray-300 rounded mb-4 w-3/4"></div>

            {/* Skeleton Content */}
            <div className="space-y-2 mb-4">
                <div className="h-4 bg-gray-300 rounded w-full"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                <div className="h-4 bg-gray-300 rounded w-2/3"></div>
            </div>

            {/* Skeleton Author */}
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>

            {/* Skeleton Read More Link */}
            <div className="h-4 bg-yellow-300 rounded w-1/3 mt-5"></div>
        </div>
    );
};

