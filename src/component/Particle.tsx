import { FC, useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const Particle = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return(
        <Particles
            options={{
                fullScreen: { enable: false, zIndex: 0 },
                particles: {
                    color: {
                        value: "#fff"
                    },
                    number: {
                        value: 100
                    },
                    opacity: {
                        value: {min: 0.3, max: 1}
                    },
                    shape: {
                        type: "circle"
                    },
                    size: {
                        value: {min: 1, max: 5}
                    },
                    move: {
                        direction: "bottom",
                        enable: true,
                        speed: {min: 3, max: 5}
                    }
                }
            }} init={particlesInit}
        />
    )
}