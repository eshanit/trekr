import { defineStore } from "pinia";
import type ITodo from "@/interfaces/ITodo";
import type ITask from "@/interfaces/ITask";

export const useTodoStore = defineStore("todos", {
  state: () => ({
    todos: [],
    todoErrors: null,
  }),
  getters: {},
  actions: {
    async fetchAllTodos(userId: string): Promise<any> {
      const config = useRuntimeConfig();
      return await useFetch(
        `${config.public.nestServerUrl}/todos/user/${userId}`
      );
    },
    async fetchTodo(todoId: string): Promise<any> {
      const config = useRuntimeConfig();
    },
    async updateToDo(
      taskId: string,
      userId: string,
      todoId: string,
      newStatus: boolean
    ) : Promise<any>{
      const useUser = useUsersStore();

      const user = useUser.fetchUser(userId);

     return await user.then((response) => {
          //fetch todos and update todo status

          response.data._rawValue.todos
            .find((todo: ITodo) => todo.id == todoId)
            .tasks.find((task: ITask) => task.id == taskId).isCompleted =
            newStatus;

          return response.data._rawValue;

        }).then(async (resp: any) => {

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
        }).catch((errors : Error)=>{
          console.log('error:', errors)
        });
    },
  },
});
