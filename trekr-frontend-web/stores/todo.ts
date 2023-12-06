import { defineStore } from "pinia";

export const useTodoStore = defineStore("todos", {
  state: () => ({
    todos: [],
    todoErrors: null,
  }),
  getters: {},
  actions: {
   async createTodosForTeam(teamId: string, todos: Array<object>) {
      //step 1: pull up all users who are in team
      const useUsers = useUsersStore();
console.log('todos', todos);
      try {
       return useUsers
          .getTeamUsers(teamId)
          .then((response) => {
            /// step 2: attach tasks to each user
            response.forEach((res) => {
              res.todos.push(todos[0]);
            });

            console.log("attached tasks", response);

            return response; //
          })
          .then((response: any) => {
            ///step 3: put back the re-invented users
   
          response.forEach(async (res: any) => {
              const config = useRuntimeConfig();

           return await useFetch(
                `${config.public.nestServerUrl}/users/cdb/${res._id}`,
                {
                  method: "PATCH",
                  body: res,
                }
              ).catch((err)=>{
                console.error('error',err);
              });

            });

            return response; //

          }).catch((err) => {
            console.error('error',err);
          });
      } catch (err) {
        console.log("error", err);
      }
    },
    async createTodosForUser(userId: string, todos: object) {
      // step 1: get user
      const useUsers = useUsersStore();

      try {
        const response = await useUsers.fetchUser(userId);
        //step 2:  attach tasks to user
        console.log("response from user:", response);

        response.data._rawValue.todos.push(todos);
        const resp = response;
        console.log("resp:", resp);

        const config = useRuntimeConfig();
        return await useFetch(
          `${config.public.nestServerUrl}/users/cdb/${resp.data._rawValue._id}`,
          {
            method: "PATCH",
            body: resp.data._rawValue,
          }
        );
      } catch (err) {
        console.log("error", err);
      }
    },
  },
});
