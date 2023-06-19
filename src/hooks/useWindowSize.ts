import { useLayoutEffect, useState } from "react"

export const useWindowSize = () => {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
    const updateSize = () => {
        setWindowWidth(window.innerWidth);
    }

    useLayoutEffect(() => {
        window.addEventListener('resize', updateSize);

        return () => window.removeEventListener("resize", updateSize);
    }, [])

    return {windowWidth};
}