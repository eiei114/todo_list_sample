import Todo from "./components/Todo";
import "./App.css";
import {useEffect, useState} from "react";


//マウスストーカー


const App = () => {
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

    useEffect(() => {
        const mouseMoveHandler = (e: MouseEvent) => {
            setMousePosition({x: e.clientX, y: e.clientY});
        };

        window.addEventListener("mousemove", mouseMoveHandler);

        return () => {
            window.removeEventListener("mousemove", mouseMoveHandler);
        };
    }, []);

    return (
        <>
            <div className="App">
                <main>
                    <div
                        className="pointer"
                        style={{transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`}}
                    ></div>
                    <div
                        className="pointer is-small"
                        style={{transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`}}
                    ></div>
                    <header>
                        <h2 className="Title">🔭 Todo List</h2>
                    </header>
                    <Todo/>
                </main>
            </div>
            <small>© eisuke 2023</small>
        </>
    );
};

export default App;
