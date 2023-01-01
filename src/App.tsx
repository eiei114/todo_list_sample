import Todo from "./components/Todo";
import "./App.css";
import {useEffect, useState} from "react";


//マウスストーカー



const App = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mouseMoveHandler = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", mouseMoveHandler);

        return () => {
            window.removeEventListener("mousemove", mouseMoveHandler);
        };
    }, []);

  return (
          <div className="Background">
          <h2 className="Title">🔭 Todo List</h2>
              <Todo />
          </div>
  );
};

export default App;
