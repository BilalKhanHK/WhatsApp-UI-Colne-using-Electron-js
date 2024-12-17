import { useEffect } from "react";

const useSwipeNavigation = (onSwipeLeft, onSwipeRight) => {
  useEffect(() => {
    let touchstartX = 0;
    let touchendX = 0;

    const handleTouchStart = (event) => {
      touchstartX = event.changedTouches[0].screenX;
      console.log("Touch started at: ", touchstartX);
    };

    const handleTouchEnd = (event) => {
      touchendX = event.changedTouches[0].screenX;
      console.log("Touch ended at: ", touchendX);
      handleGesture();
    };

    const handleGesture = () => {
      if (touchendX < touchstartX - 50) {
        // Swiped left
        onSwipeLeft();
      }
      if (touchendX > touchstartX + 50) {
        // Swiped right
        onSwipeRight();
      }
    };

    // Adding event listeners to the window
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      // Clean up event listeners
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [onSwipeLeft, onSwipeRight]);
};

export default useSwipeNavigation;
