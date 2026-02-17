import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Disable browser's automatic scroll restoration if possible
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }

        // 1. Immediate scroll
        window.scrollTo(0, 0);

        // 2. Extra Insurance: Scroll on next frame
        const requestRef = requestAnimationFrame(() => {
            window.scrollTo(0, 0);

            // 3. Last Resort: Small timeout for async content
            setTimeout(() => {
                window.scrollTo(0, 0);
                // Also scroll the body/html just in case
                document.documentElement.scrollTo(0, 0);
                document.body.scrollTo(0, 0);
            }, 50);
        });

        return () => cancelAnimationFrame(requestRef);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
