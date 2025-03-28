
import { motion } from 'framer-motion'
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { ArrowRight } from 'lucide-react';
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { useNavigate } from 'react-router-dom';


export const Hero = () => {

    const navigation = useNavigate()

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };


    return (
        <section className="h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 pt-32 pb-16 md:pt-40 md:pb-24">
            <div className="container px-4 md:px-6">
                <motion.div
                    className="flex flex-col items-center text-center space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        className="inline-block rounded-full bg-black text-white px-3 py-2 text-sm font-medium mb-2"
                        variants={itemVariants}
                    >
                        ✨ Welcome to Vividblogs
                    </motion.div>

                    <motion.h1
                        className="text-4xl md:text-6xl font-bold tracking-tighter max-w-3xl"
                        variants={itemVariants}
                    >
                        Thoughts, stories and ideas that <span className="text-transparent bg-clip-text bg-white ">inspire</span>
                    </motion.h1>

                    <motion.p
                        className="text-black text-base md:text-xl max-w-[700px] font-medium"
                        variants={itemVariants}
                    >
                        Discover articles on design, development, and creative thinking from leading voices in the industry.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 mt-6"
                        variants={itemVariants}
                    >
                        <RainbowButton onClick={() => navigation("/signin")} className="px-4 py-2 bg-primary text-primary-foreground text-lg rounded-md group flex items-center">
                            Start Reading
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </RainbowButton>
                    </motion.div>
                </motion.div>
            </div>

            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden  bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mt-8 ">
                <Marquee pauseOnHover className="[--duration:20s] ">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <Marquee pauseOnHover className="[--duration:20s] ">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
            </div>
        </section>
    )
}


const reviews = [
    {
        name: "Jack Thompson",
        username: "@jack",
        body: "The Future of Web Development: React and TypeScript",
        img: "https://avatar.vercel.sh/jack",
        blogTitle: "Modern Web Architectures",
    },
    {
        name: "Jill Rodriguez",
        username: "@jill",
        body: "Design Thinking in User Experience Design",
        img: "https://avatar.vercel.sh/jill",
        blogTitle: "UX Design Principles",
    },
    {
        name: "John Chen",
        username: "@john",
        body: "Machine Learning Algorithms for Beginners",
        img: "https://avatar.vercel.sh/john",
        blogTitle: "Introduction to AI",
    },
    {
        name: "Jane Kim",
        username: "@jane",
        body: "Sustainable Software Engineering Practices",
        img: "https://avatar.vercel.sh/jane",
        blogTitle: "Green Coding Techniques",
    },
    {
        name: "Jenny Martinez",
        username: "@jenny",
        body: "Cybersecurity Trends in 2024",
        img: "https://avatar.vercel.sh/jenny",
        blogTitle: "Protecting Digital Landscapes",
    },
    {
        name: "James Wong",
        username: "@james",
        body: "Blockchain Technology Beyond Cryptocurrency",
        img: "https://avatar.vercel.sh/james",
        blogTitle: "Decentralized Innovations",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

export const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "bg-white",
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",

            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};
