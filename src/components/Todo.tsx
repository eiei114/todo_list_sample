import { useState } from "react";
import List from "./List";
import Form from "./Form";


// TODOの型を定義する
export type Todo = {
    id: number;
    content: string;
    editing: boolean;
};

const Todo = () => {

    // デフォルトのTODOリスト
    const todosList = [
        {
            id: 1,
            content: "サンプルTODO",
            editing: false,
        },
        {
            id: 2,
            content: "サンプルTODO2",
            editing: false,
        },
        {
            id: 3,
            content: "サンプルTODO3",
            editing: false,
        },
    ];

    // TODOリストのState管理
    const [todos, setTodos] = useState<Todo[]>(todosList);

    // 削除
    const deleteTodo = (id: number) => {
        const newTodos = todos.filter((todo) => {
            return todo.id !== id;
        });
        setTodos(newTodos);
    };

    // 作成
    const createTodo = (todo: Todo) => {
        setTodos([...todos, todo]);
    };

    // 更新
    const updateTodo = (todo: Todo) => {
        const newTodos = todos.map((_todo) => {
            return _todo.id === todo.id ? { ..._todo, ...todo } : { ..._todo };
        });
        setTodos(newTodos);
    };

    return (
        <>
            <List todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
            <Form createTodo={createTodo} />
        </>
    );
};
export default Todo;