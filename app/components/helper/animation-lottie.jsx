"use client";

import { useEffect, useState } from "react";

const AnimationLottie = ({ animationPath, width }) => {
  const [Lottie, setLottie] = useState(null);

  useEffect(() => {
    // Import Lottie only on client side
    import("lottie-react").then((module) => {
      setLottie(() => module.default);
    });
  }, []);

  if (!Lottie) {
    return (
      <div
        style={{
          width: "95%",
          height: "200px",
          backgroundColor: "#1a1443",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ color: "#16f2b3", fontSize: "14px" }}>Loading...</div>
      </div>
    );
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: "95%",
    },
  };

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;
