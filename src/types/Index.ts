export type TTodos = {
    id: number;
    title: string;
    completed: boolean;
    userId: number;
};

export type TTodosQueryData = {
    todos: TTodos[];
};
