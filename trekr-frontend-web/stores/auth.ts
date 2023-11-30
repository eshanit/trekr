import { defineStore } from "pinia";
import Routes from "../constants/Routes";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authUser: null,
    authErrors: [],
    isLoggedIn: false,
    isRegistered: false,
  }),
  getters: {
    user: (state) => state.authUser,
    errors: (state) => state.authErrors,
    loggedIn: (state) => state.isLoggedIn,
  },
  actions: {
    async fetchUser(data: any) {
      this.authUser = data;
    },
    async registerUser(dataObj: any) {
      const router = useRouter();
      const config = useRuntimeConfig();
      const {
        data: responseData,
      } = await useFetch(`${config.public.nestServerUrl}/auth/signup`, {
        method: "POST",
        body: {
          firstname: dataObj.firstName,
          lastname: dataObj.lastName,
          email: dataObj.email,
          password: dataObj.password,
        },
      });

      router.push(Routes.LOGIN);

      if (responseData.value === true) {
        this.isRegistered = true;
      }
    },
    async signin(dataObj: any) {
      const { setupProfile } = useUser();


      const config = useRuntimeConfig();
      await useFetch(`${config.public.nestServerUrl}/auth/signin`, {
        method: "POST",
        body: {
          email: dataObj.email,
          password: dataObj.password,
        },
        credentials: "include",
      })
        .then(setupProfile)
        .finally(async () => {
          const { session } = await useSession();
          const router = useRouter();
          router.push(Routes.DASHBOARD);
        });
    },
  },
});
