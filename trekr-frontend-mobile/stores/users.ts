import { defineStore } from "pinia";

export const useUsersStore = defineStore('users', {
    state: () => ({
        users: [],
        usersErrors: null,
    }),
    getters:{},
    actions: {
        async fetchTeamUsers(teamName: string): Promise<any> {
            const config = useRuntimeConfig();
            return await useFetch(`${config.public.nestServerUrl}/teams/name/${teamName}`);
        },
        async fetchUser(userId: string): Promise<any> {
            const config = useRuntimeConfig();
            return await useFetch(`${config.public.nestServerUrl}/users/cdb/${userId}`);
        }

    }
})

