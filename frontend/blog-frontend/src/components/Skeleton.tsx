export const Skeleton = () => {
    // return <div className="w-screen">
    //     <div role="status" className="flex flex-col justify-center items-center gap-5 space-y-2.5 animate-pulse max-w-lg max-h-lg mb-5">
    //         <div className="flex items-center w-full">
    //             <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
    //             <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
    //             <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
    //         </div>
    //         <div className="flex items-center w-full max-w-[480px]">
    //             <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
    //             <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
    //             <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
    //         </div>
    //         <div className="flex items-center w-full max-w-[400px]">
    //             <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
    //             <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
    //             <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
    //         </div>
    //         <div className="flex items-center w-full max-w-[480px]">
    //             <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
    //             <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
    //             <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
    //         </div>
    //         <div className="flex items-center w-full max-w-[440px]">
    //             <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
    //             <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
    //             <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
    //         </div>
    //         <div className="flex items-center w-full max-w-[360px]">
    //             <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
    //             <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
    //             <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
    //         </div>
    //         <span className="sr-only">Loading...</span>
    //     </div>
    // </div>

    return <>
        <div className="h-screen flex items-center justify-center">
            <div className="animate-pulse space-y-8 w-full max-w-2xl px-4">
                {/* Title skeleton */}
                <div className="h-8 bg-gray-200 rounded-lg w-3/4"></div>

                {/* Date skeleton */}
                <div className="h-4 bg-gray-200 rounded-lg w-1/4"></div>

                {/* Image skeleton */}
                <div className="h-64 bg-gray-200 rounded-lg w-full"></div>

                {/* Content skeleton */}
                <div className="space-y-4">
                    <div className="h-4 bg-gray-200 rounded-lg w-full"></div>
                    <div className="h-4 bg-gray-200 rounded-lg w-5/6"></div>
                    <div className="h-4 bg-gray-200 rounded-lg w-4/6"></div>
                </div>

                {/* Author section skeleton */}
                <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
                    <div className="space-y-2">
                        <div className="h-4 bg-gray-200 rounded-lg w-24"></div>
                        <div className="h-3 bg-gray-200 rounded-lg w-32"></div>
                    </div>
                </div>
            </div>
        </div>
    </>
}