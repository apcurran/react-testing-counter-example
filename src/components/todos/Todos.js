import React, { useEffect, useState } from "react";

import Todo from "../todo/Todo";

function Todos() {
    const [todosData, setTodosData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((data) => {
                const topFiveTodos = data.slice(0, 5);

                setTodosData(topFiveTodos);
            });
    }, []);

    return (
        <div>
            {todosData.map((todo) => (
                <Todo todosData={todo} key={todo.id} />
            ))}
        </div>
    );
}

export default Todos;
