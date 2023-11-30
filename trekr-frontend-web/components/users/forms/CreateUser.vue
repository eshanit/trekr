<script setup lang="ts">
import * as yup from "yup";

const emit = defineEmits(['showAddUserForm', 'showUsersList'])

const useTeam = useTeamStore();

const useUser = useUsersStore()

const schema = yup.object({
    email: yup.string().required().email().label("Email address"),
    firstName: yup.string().required().label("First name"),
    lastName: yup.string().required().label("Last name"),
    gender: yup.string().required().label("Gender"),
    team: yup.string().required().label("Team"),
    mobileAcess: yup.string().label("Mobile")
});


const init = {
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    gender: undefined,
    dateJoined: undefined,
    team: undefined,
    mobileAcess: undefined

}

const state = reactive(init)

const { values, defineComponentBinds, handleSubmit, resetForm, errors } = useForm({
    validationSchema: schema,
    initialValues: init,
});


const nuxtUiConfig = (state: { errors: any[] }) => {
    return {
        props: {
            error: state.errors[0],
        },
    };
};

const firstName = defineComponentBinds("firstName", nuxtUiConfig);
const lastName = defineComponentBinds("lastName", nuxtUiConfig);
const email = defineComponentBinds("email", nuxtUiConfig);
const gender = defineComponentBinds("gender", nuxtUiConfig);
const dateJoined = defineComponentBinds("dateJoined", nuxtUiConfig);
const team = defineComponentBinds("team", nuxtUiConfig);
const mobileAcess = defineComponentBinds("mobileAcess", nuxtUiConfig);

const onSubmit = handleSubmit(async (values) => {
    console.log("Submitted with", values);
    const createResponse = await useUser.createUser(values).then(
        (response) => {
            console.log("Created with", response.data._rawValue);
            if (response.data._rawValue.ok == true) {
                emit('showUsersList', true)
                emit('showAddUserForm', false)
            }

        }
    );

});

//const createResponse = await useUser.createUser(values);

const genderOptions = [
    {
        name: "Male",
        value: "Male",
    },
    {
        name: "Female",
        value: "Female",
    },
    {
        name: "Other",
        value: "Other",
    }
];

const teamOptions = await useTeam.fetchAllTeams().then(
    (response) => {
        let vm: any[] = [];

        const teamData = response.data.value;

        const teamDataArray = Object.values(teamData);

        teamDataArray.forEach((team: any) => {
            vm.push({
                name: team.name,
                value: JSON.stringify({
                    id: team._id,
                    name: team.name
                }),
                //option:team.name
            })
        })

        return vm;
    }
);

const mobileAppOptions = [
    {
        name: "Yes",
        value: "Yes",
    },
    {
        name: "No",
        value: "No",
    },
]



</script>
<template>
    <div class="items-center my-5">
        <div v-if="teamOptions.length !== 0">
            <UContainer>
                <div class="my-5">
                    <UButton icon="i-heroicons-chevron-double-left-20-solid" color="purple" variant="soft"
                        @click="$emit('showAddUserForm', true)"> Back</UButton>
                </div>
                <UForm :state="state" @submit="onSubmit" class="space-y-4">
                    <div class="grid grid-cols-3 gap-4">
                        <div class="bg-slate-100 rounded-2xl shadow-xl shadow-slate-300 p-5">
                            <div class="text-sm text-center"><strong>User Infor Card 1</strong></div>
                            <UFormGroup label="First name" name="firstName" v-bind="firstName" class="mb-5">
                                <UInput v-bind="firstName" />
                            </UFormGroup>

                            <UFormGroup label="Last name" name="lastName" v-bind="lastName" class="mb-5">
                                <UInput v-bind="lastName" />
                            </UFormGroup>

                            <UFormGroup label="Gender" name="gender" v-bind="gender" class="mb-5">
                                <USelect v-bind="gender" :options="genderOptions" />
                            </UFormGroup>
                        </div>
                        <div class="bg-teal-100 rounded-2xl shadow-xl shadow-slate-300 p-5">
                            <div class="text-sm text-center"><strong>User Infor Card 2</strong></div>

                            <UFormGroup label="Date Joined" name="dateJoined" v-bind="dateJoined" class="mb-5">
                                <UInput type="date" v-bind="dateJoined" />
                            </UFormGroup>

                            <UFormGroup label="Email" name="email" v-bind="email" class="mb-5">
                                <UInput v-bind="email" />
                            </UFormGroup>

                            <UFormGroup label="Allocate Team" name="team" v-bind="team" class="mb-5">
                                <USelect v-bind="team" :options="teamOptions" option-attribute="name"
                                    value-attribute="value" 
                                    />
                            </UFormGroup>
                        </div>
                        <div v-if="team.modelValue">
                            <div v-if="JSON.parse(team.modelValue).name == 'Residents'">
                                <div class=" rounded-lg p-5">
                                    <div class=" flex justify-center p-28 ">
                                        <UButton type="submit"> Submit </UButton>
                                    </div>
                                </div>
                            </div>
                            <div v-else>
                                <div class="bg-cyan-100 rounded-2xl shadow-xl shadow-slate-300 p-5">
                                    <UFormGroup label="Do you want User to have access to Trekr Mobile App?" name="team"
                                        v-bind="mobileAcess" class="mb-5">
                                        <USelect v-bind="mobileAcess" :options="mobileAppOptions" />
                                    </UFormGroup>
                                </div>
                                <div v-if="mobileAcess.modelValue">
                                    <div class=" rounded-lg p-5">
                                        <div class=" flex justify-center p-28 ">
                                            <UButton type="submit"> Submit </UButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <UButton class="ml-4" color="white" variant="outline" type="button" @click="resetForm()">
                        Reset
                    </UButton>
                </UForm>

            </UContainer>
        </div>
        <div v-else>
            <div class="my-5">
                    <UButton icon="i-heroicons-chevron-double-left-20-solid" color="purple" variant="soft"
                        @click="$emit('showAddUserForm', false)"> Back</UButton>
                </div>
            <span>A user needs to be in a team, please create teams first.</span>
        </div>

    </div>
</template>