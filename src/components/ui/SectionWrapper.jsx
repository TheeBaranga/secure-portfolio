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
            {children}
        </motion.div>
    );
};

export default SectionWrapper;