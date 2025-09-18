import { useState, useEffect } from "react";

export default function WindowSizeTracker() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 font-mono">
      <h1 className="text-2xl font-bold mb-4">Window Size Tracker</h1>
      <div className="bg-white  rounded-lg p-6 text-center border  shadow-[8px_8px_0px_rgba(0,0,0,1)]">
        <p className="text-lg">
          <span className="font-semibold">Width:</span> {windowSize.width}px
        </p>
        <p className="text-lg">
          <span className="font-semibold">Height:</span> {windowSize.height}px
        </p>
      </div>
    </div>
  );
}
