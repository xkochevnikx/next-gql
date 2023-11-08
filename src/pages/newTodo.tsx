import { ADD_TODOS, GET_TODOS } from '@/apollo/apollo-client';
import { useMutation } from '@apollo/client';
import { useRef } from 'react';

export default function NewTodo() {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const [addTodo, {}] = useMutation(
        ADD_TODOS,
        //todo - пример рефетча после добавления новой todo
        {
            refetchQueries: [
                {
                    query: GET_TODOS,
                },
            ],
        }
    );

    const addTodoHandler = () => {
        addTodo({
            variables: {
                title: inputRef.current?.value,
                userId: 1,
                completed: false,
            },
        });
        if (inputRef.current?.value) {
            inputRef.current.value = '';
        }
    };

    return (
        <div className="newTodoPage">
            <form>
                <input type="text" ref={inputRef} />
                <button onClick={addTodoHandler} type="button">
                    add
                </button>
            </form>
        </div>
    );
}
