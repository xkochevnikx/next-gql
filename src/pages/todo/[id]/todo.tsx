export type TodoItemPage<T extends string> = {
    params: Record<T, string>;
};

//todo - функция работает с динамическими мета данными, в данном примере возвращаю в текст вкладки id
export async function generateMetadata({ params: { id } }: TodoItemPage<'id'>) {
    return {
        title: id,
    };
}

export default function Todo({ params }: TodoItemPage<'id'>) {
    return <h1>Todo Item {params.id}</h1>;
}
