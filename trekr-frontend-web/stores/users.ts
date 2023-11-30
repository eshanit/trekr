import { defineStore } from "pinia";
import generateID from "@/composables/useCreateId";
import type ITeamMemberUpdate from "~/interfaces/ITeamMemberUpdate";
import type ITeamMember from "~/interfaces/ITeamMember";

export const useUsersStore = defineStore("users", {
  state: () => ({
    users: null,
    userErrors: null,
  }),
  getters: {
    allUser: (state) => state.users,
  },
  actions: {
    async fetchUser(userId: string): Promise<any> {
      const config = useRuntimeConfig();
      return await useFetch(
        `${config.public.nestServerUrl}/users/cdb/${userId}`
      );
    },
    async fetchAllUsers(): Promise<any> {
      const config = useRuntimeConfig();
      return await useFetch(`${config.public.nestServerUrl}/users`);
    },
    async getTeamUsers(teamId: string){
      const users = this.fetchAllUsers();
      return users.then((response) =>{
        const vm:any[] = [];


        response.data._rawValue.forEach((element: any) => {
              vm.push(element)
              
        });

       const newArray = vm.filter((element: any) =>{
         return element.teams[0].id === teamId
        })

        console.log('teamFilteredUsers',newArray);

        return newArray;


      })
    },
    async updateUser(id: string, rev: string, createdAt: number, dataObj: any) {
      
      const team = JSON.parse(dataObj.team);

      const newDataObject: ITeamMemberUpdate = {
        _id: id,
        _rev: rev,
        firstname: dataObj.firstName,
        lastname: dataObj.lastName,
        gender: dataObj.gender,
        email: dataObj.email,
        dateJoined: dataObj.dateJoined,
        teams: [
          {
            id: team.id,
            name: team.name,
          },
        ],
        mobileAcess: dataObj.mobileAcess,
        createdAt: createdAt,
        updatedAt: Date.now(),
      };

      const config = useRuntimeConfig();

      return await useFetch(`${config.public.nestServerUrl}/users/cdb/${id}`, {
        method: "PATCH",
        body: newDataObject,
      });
    },
    async createUser(dataObj: any ): Promise<any> {
      dataObj._id = generateID();
      const team = JSON.parse(dataObj.team);
      let mobileAcess = "";

      if (!dataObj.mobileAcess) {
        mobileAcess = "No";
      } else {
        mobileAcess = dataObj.mobileAcess;
      }

      const newDataObject: ITeamMember =  {
        _id: dataObj._id,
        firstname: dataObj.firstName,
        lastname: dataObj.lastName,
        gender: dataObj.gender,
        email: dataObj.email,
        dateJoined: dataObj.dateJoined,
        teams: [
          {
            id: team.id,
            name: team.name,
          },
        ],
        mobileAcess: mobileAcess,
        createdAt: Date.now()
      }

      //step-1: create user
      const config = useRuntimeConfig();
      return await useFetch(`${config.public.nestServerUrl}/users`, {
        method: "POST",
        body: newDataObject,
      }).then(async (resp: any) => {
        const newUserId = resp.data._rawValue;
        console.log("newUSer", newUserId, dataObj);
        //step 2: inject user into team:
        const useTeam = useTeamStore();

        return await useTeam.fetchTeam(team.id).then((response) => {
          console.log("response", response.data._rawValue);

          const vm = response.data._rawValue;

          const newDataObject = {
            _id: vm._id,
            rev_id: vm._rev,
            name: vm.name,
            members: vm.members.push({
              id: dataObj._id,
              firstname: dataObj.firstName,
              lastname: dataObj.lastName,
            }),
            createdAt: vm.createdAt,
            updatedAt: Date.now(),
          };

          console.log("new team", newDataObject, newUserId);

          return useTeam.updateTeam(vm);
        });
      });
    },
  },
});
