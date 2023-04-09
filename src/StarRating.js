import React from 'react';
import './StarRating.css';
import { motion, AnimatePresence } from "framer-motion";

const starVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.445, 0.05, 0.55, 0.95],
        },
    },
};

const grayStarVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.445, 0.05, 0.55, 0.95],
        },
    },
};

function StarRating({ rating }) {
    return (
        <div className="star-rating">
            {[...Array(5)].map((_, i) => (
                <AnimatePresence key={i}>
                    {i < rating && (
                        <motion.span
                            className="star filled"
                            variants={starVariants}
                            initial="hidden"
                            animate="visible"
                        />
                    )}
                    {!(i < rating) && (
                        <motion.span
                            className="star"
                            variants={grayStarVariants}
                            initial="hidden"
                            animate="visible"
                        />
                    )}
                </AnimatePresence>
            ))}
        </div>
    );
}

export default StarRating;
