import { motion } from "framer-motion";

const SectionWrapper = ({
    children,
    delay = 0,
    y = 40,
    duration = 0.6,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
                once: true,
                amount: 0.2,
            }}
            transition={{
                duration: 0.6,
                ease: "easeOut",
            }}
        >
            <div
                className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
            >
                <div
                    className="
                    absolute
                    left-1/2
                    top-1/2
                    h-96
                    w-96
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-blue-500/10
                    blur-3xl
                    animate-pulse
                    "
                />
            </div>
            {children}
        </motion.div>
    );
};

export default SectionWrapper;