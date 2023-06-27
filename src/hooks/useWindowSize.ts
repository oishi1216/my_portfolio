import { useLayoutEffect, useState } from "react"

export const useWindowSize = () => {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
    const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth < 1025 ? false : true);

    const updateSize = () => {
        setWindowWidth(window.innerWidth);
        window.innerWidth < 1025 ? setIsDesktop(false) : setIsDesktop(true);
    }

    useLayoutEffect(() => {
        window.addEventListener('resize', updateSize);

        return () => window.removeEventListener("resize", updateSize);
    }, [])

    return {windowWidth, isDesktop};
}