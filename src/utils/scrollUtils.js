import { useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

export const useSmartSticky = (threshold = 150) => {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > threshold) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return hidden;
};
