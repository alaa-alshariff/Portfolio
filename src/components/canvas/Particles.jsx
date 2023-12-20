import Particles from "react-tsparticles";
import React, { useCallback } from "react";
import particlesConfig from "../config/particlesConfig";

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    await engine.loaded;
  }, []);

  const particlesLoaded = useCallback(() => {}, []);

  return (
    <Particles
      id="tsparticles"
      className="Particle"
      init={particlesInit}
      loaded={particlesLoaded}
      params={particlesConfig}
    ></Particles>
  );
};

export default ParticlesContainer;
