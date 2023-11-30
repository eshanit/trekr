import { defineStore } from "pinia";
import generateID from "@/composables/useCreateId";

export const useTodoStore = defineStore("todos", {
  state: () => ({
    todos: [],
    todoErrors: null,
  }),
  getters: {},
  actions: {
    createTodosForTeam(teamId: string, todos: Array<any>) {
      if (todos[0].type === "team") {
        //step 1: pull up all users who are in team
        const useUsers = useUsersStore();

        const users = useUsers
          .getTeamUsers(teamId)
          .then((response) => {
            /// step 2: attach tasks to each user
            response.forEach((res) => {
              res.tasks = todos;
            });

            console.log("attached tasks", response);

            return response; //
          })
          .then((response: any) => {
            ///step 3: put back the re-invented users
            response.forEach(async (res: any) => {
              const config = useRuntimeConfig();

              return await useFetch(`${config.public.nestServerUrl}/users/cdb/${res._id}`, {
                method: "PATCH",
                body: res,
              });
            });
          })
          .finally(() => {
            return "success";
          }).catch((err: any) => {
            console.log("error", err);
          });

        console.log("users:", users);
      }
    },
  },
});
