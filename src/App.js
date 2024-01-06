import "./styles.css";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import React from "react";
export default function App() {
  const intervalRef = React.useRef(null);
  const MAX = 3;
  const INTERVAL = 100;
  const callbackRef = React.useCallback((glider) => {
    if (glider) {
      if (!intervalRef.current) {
        intervalRef.current = setInterval(() => {
          let index = glider.page;
          if (index < MAX) {
            index += 1;
          } else {
            index = 0;
          }
          glider.scrollItem(index, false);
        }, INTERVAL);
      }
    }
  }, []);

  React.useEffect(
    () => () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    },
    [],
  );
  return (
    <div className="App">
      <Glider
        className="glider-container"
        draggable
        hasDots
        slidesToShow={3}
        // slidesToScroll={1}
        scrollLock
        ref={callbackRef}
      >
        <div>
          <img src="https://picsum.photos/seed/picsum/200/300" />
        </div>
        <div>
          <img src="https://picsum.photos/seed/picsum/200/300" />
        </div>
        <div>
          <img src="https://picsum.photos/seed/picsum/200/300" />
        </div>
        <div>
          <img src="https://picsum.photos/seed/picsum/200/300" />
        </div>
        <div>
          <img src="https://picsum.photos/seed/picsum/200/300" />
        </div>
        <div>
          <img src="https://picsum.photos/seed/picsum/200/300" />
        </div>
      </Glider>
    </div>
  );
}
