import { defineStore } from "pinia";
import type ITodo from "@/interfaces/ITodo";
import type ITask from "@/interfaces/ITask";

export const useTodoStore = defineStore("todos", () => {
  let todos = ref();
  const todoErrors = ref([]);
  const todoTasks = ref([]);

  //fetch all todos
  const fetchAllTodos = async (userId: string): Promise<any> => {
    const config = useRuntimeConfig();
    const { data: allTodos } = await useFetch(
      `${config.public.nestServerUrl}/todos/user/${userId}`
    );

    todos.value = allTodos;

    return allTodos.value;
  };

  //fetch all tasks

  const fetchTodoTasks = (todoId: string): Array<object> => {
   return todos.value.value.find((todo: ITodo) => todo.id == todoId).tasks;
  }

  //update todo
  const updateTodo = async (
    taskId: string,
    userId: string,
    todoId: string,
    newStatus: boolean
  ): Promise<any> => {
    const useUser = useUsersStore();

    const user = useUser.fetchUser(userId);

    return await user
      .then((response) => {
        //fetch todos and update todo status

        response.data._rawValue.todos
          .find((todo: ITodo) => todo.id == todoId)
          .tasks.find((task: ITask) => task.id == taskId).isCompleted =
          newStatus;
       
        return response.data._rawValue;
      })
      .then(async (resp: any) => {
        // send todo status to server
        console.log("edited", resp);

        const config = useRuntimeConfig();

        return await useFetch(
          `${config.public.nestServerUrl}/users/cdb/${userId}`,
          {
            method: "PATCH",
            body: resp,
          }
        );
      })
      .catch((errors: Error) => {
        console.log("error:", errors);
      });
  };

  //sorted

  const sortedTodos = computed(() =>
    todos.value.value[0].tasks.sort((a: any, b: any) =>
    a.isCompleted === b.isCompleted ? 0 : a.isCompleted ? 1 : -1
)
  );


  //
  const percentageCompleted = computed(() => {
    const tasks = todos.value.value[0].tasks;
    const completed = tasks.filter((t: {isCompleted: boolean}) => t.isCompleted )

    return 100*(completed.length/tasks.length)

  })

  return { todos, fetchAllTodos, updateTodo,fetchTodoTasks, percentageCompleted, sortedTodos };
});
