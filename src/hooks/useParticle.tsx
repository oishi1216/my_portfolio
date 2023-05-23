import { FC, useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const Particle = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    return(
        <Particles
            options={{
                fullScreen: { enable: false, zIndex: 0 },
                particles: {
                    color: {
                        value: "#333"
                    },
                    number: {
                        value: 100
                    },
                    opacity: {
                        value: {min: 0.2, max: 0.5}
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