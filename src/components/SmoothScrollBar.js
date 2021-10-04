import React, { useEffect, useRef } from "react";
import ScrollBar from "react-smooth-scrollbar";
import { useLocation } from "react-router-dom";

function SmoothScrollBar({ children }) {
  const ref = useRef(null);
  const pathname = useLocation();

  useEffect(() => {
    const { scrollbar } = ref.current;
    scrollbar.setPosition(0, 0);
  }, [pathname]);

  return (
    <ScrollBar ref={ref} damping={.09}>
      {
        children
      }
    </ScrollBar>
  );
}

export default SmoothScrollBar;
