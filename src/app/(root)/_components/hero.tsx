import Image from "next/image";

function Hero() {
    return (
        <div>
            <Image
                src="/cat.gif"
                alt="hero"
                height={500}
                width={500}
                // className="dark:invert filter hue-rotate-180 saturate-200"
            />
        </div>
    );
}

export default Hero;
