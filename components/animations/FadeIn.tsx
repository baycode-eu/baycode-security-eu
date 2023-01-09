// React
import { useState } from "react";

// Libs
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "react-spring";

 
const FadeIn = ({ toLeft, children }: {toLeft?: any, children: any}) => {
  const [inView, setInview] = useState(false);

  const transition = useSpring({
    delay: 400,
    to: {
      x: !inView ? toLeft ? 40 : -40 : 0,
      y: !inView ? 0 : 0,
      opacity: !inView ? 0 : 1,
    },
  });
  return (
    <Waypoint onEnter={() => setInview(true)}>
      <animated.div style={transition}>
        {children}
      </animated.div>
    </Waypoint>
  );
};

export default FadeIn;