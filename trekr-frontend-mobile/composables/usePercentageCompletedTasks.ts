export function usePercertageCompletedTasks(todoId: string){

    const useTodo = useTodoStore();

    const tasks =  useTodo.fetchTodoTasks(todoId);

    const completed = tasks.filter((todo: any) => todo.isCompleted)

    return 100*(completed.length/tasks.length)

}