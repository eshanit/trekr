import { defineStore } from "pinia";
import generateID from "@/composables/useCreateId";

export const useTeamStore = defineStore("teams", {
  state: () => ({
    teams: [],
    teamErrors: null,
  }),
  getters: {
    getTeams: (state) => state.teams,
  },
  actions: {
    async fetchTeam(teamId: string): Promise<any> {
      const config = useRuntimeConfig();
      return await useFetch(`${config.public.nestServerUrl}/teams/${teamId}`);
    },
    async fetchAllTeams(): Promise<any> {
      const config = useRuntimeConfig();
      return await useFetch(`${config.public.nestServerUrl}/teams`);
    },
    async createTeam(dataObj: any): Promise<any> {
      dataObj._id = generateID();
      const config = useRuntimeConfig();
      const { data: responseData } = await useFetch(
        `${config.public.nestServerUrl}/teams`,
        {
          method: "POST",
          body: {
            _id: dataObj._id,
            name: dataObj.team,
            createdAt: Date.now(),
            members: [],
          },
        }
      );
    },
    async updateTeam(dataObj: any): Promise<any> {
      console.log("updateTeam", dataObj);
      const config = useRuntimeConfig();
      return await useFetch(
        `${config.public.nestServerUrl}/teams/${dataObj._id}`,
        {
          method: "PATCH",
          body: {
            _id: dataObj._id,
            _rev: dataObj._rev,
            name: dataObj.name,
            members: dataObj.members,
            createdAt: dataObj.createdAt,
            updatedAt: Date.now(),
          },
        }
      );
    }
  },
});
