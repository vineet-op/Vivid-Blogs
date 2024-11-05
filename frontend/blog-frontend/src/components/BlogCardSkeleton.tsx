import { Circle } from "lucide-react";

export const BlogCardSkeleton = () => {
    return (
        <div className="flex flex-col mt-10 items-center justify-center gap-4 animate-pulse">
            <div className="p-6 border-b border-slate-200 pb-4 w-screen max-w-screen-md">
                <div className="flex">
                    <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
                    <div className="flex flex-col justify-center pl-2">
                        <div className="h-4 w-24 bg-gray-300 rounded"></div>
                    </div>
                    <div className="pl-2 flex justify-center flex-col">
                        <Circle />
                    </div>
                    <div className="pl-2 flex justify-center flex-col">
                        <div className="h-4 w-16 bg-gray-300 rounded"></div>
                    </div>
                </div>
                <div className="h-6 w-3/4 bg-gray-300 rounded mt-2"></div>
                <div className="h-4 w-full bg-gray-300 rounded mt-2"></div>
                <div className="h-4 w-32 bg-gray-300 rounded mt-4"></div>
            </div>
            <div className="max-w-48 max-h-52">
                <div className="h-full w-full bg-gray-300 rounded"></div>
            </div>
            <div className="p-6 border-b border-slate-200 pb-4 w-screen max-w-screen-md">
                <div className="flex">
                    <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
                    <div className="flex flex-col justify-center pl-2">
                        <div className="h-4 w-24 bg-gray-300 rounded"></div>
                    </div>
                    <div className="pl-2 flex justify-center flex-col">
                        <Circle />
                    </div>
                    <div className="pl-2 flex justify-center flex-col">
                        <div className="h-4 w-16 bg-gray-300 rounded"></div>
                    </div>
                </div>
                <div className="h-6 w-3/4 bg-gray-300 rounded mt-2"></div>
                <div className="h-4 w-full bg-gray-300 rounded mt-2"></div>
                <div className="h-4 w-32 bg-gray-300 rounded mt-4"></div>
            </div>
            <div className="max-w-48 max-h-52">
                <div className="h-full w-full bg-gray-300 rounded"></div>
            </div>
            <div className="p-6 border-b border-slate-200 pb-4 w-screen max-w-screen-md">
                <div className="flex">
                    <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
                    <div className="flex flex-col justify-center pl-2">
                        <div className="h-4 w-24 bg-gray-300 rounded"></div>
                    </div>
                    <div className="pl-2 flex justify-center flex-col">
                        <Circle />
                    </div>
                    <div className="pl-2 flex justify-center flex-col">
                        <div className="h-4 w-16 bg-gray-300 rounded"></div>
                    </div>
                </div>
                <div className="h-6 w-3/4 bg-gray-300 rounded mt-2"></div>
                <div className="h-4 w-full bg-gray-300 rounded mt-2"></div>
                <div className="h-4 w-32 bg-gray-300 rounded mt-4"></div>
            </div>
            <div className="max-w-48 max-h-52">
                <div className="h-full w-full bg-gray-300 rounded"></div>
            </div>
        </div>
    );
};