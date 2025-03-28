import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export const Quote = () => {
    return (
        <div className="h-screen flex justify-center items-center bg-black">
            <Card className="max-w-lg bg-black">
                <CardHeader>
                    <CardTitle className="text-4xl font-bold text-white">
                        A blog is a <span className="text-white">window to the world of ideas</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-3xl text-white">
                        where words paint pictures, and stories <span className="text-yellow-500">spark new beginnings</span>.
                    </p>
                </CardContent>
                <CardFooter className="justify-end">
                    <CardDescription className="text-2xl text-yellow-500 italic">
                        ~ Vineet Jadhav
                    </CardDescription>
                </CardFooter>
            </Card>
        </div>
    )
}