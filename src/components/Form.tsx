import React, { useState } from "react";
import "./Form.css";

// 受け取るPropsの型を定義する
type FormProps = {
    createTodo: Function;
};

const Form: React.FC<FormProps> = ({ createTodo }) => {
    // 入力値のState管理
    const [enteredTodo, setEnteredTodo] = useState("");

    // 作成したTODOを[createTodo]に渡す
    const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
        if (enteredTodo === '') {
            alert("Please enter a task");
        } else {
        e.preventDefault();
        const newTodo = {
            id: Math.floor(Math.random() * 1e5),
            content: enteredTodo,
        };
        createTodo(newTodo);
        setEnteredTodo("");
    };

    }

    return (
        <div className="FormParts">
            <form onSubmit={addTodo} className="Form">
                <input
                    type="text"
                    placeholder="Add a todo"
                    value={enteredTodo}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setEnteredTodo(e.target.value)
                    }
                    className="Input"
                />
                <button className="FormButton">Add</button>
            </form>
        </div>
    );
};

export default Form;