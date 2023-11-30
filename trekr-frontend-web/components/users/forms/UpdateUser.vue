<script setup lang="ts">
import * as yup from "yup";

const useTeam = useTeamStore();

const useUser = useUsersStore()

const props = defineProps({
    userId: {
        type: String,
        required: true,
    }
})

const schema = yup.object({
    email: yup.string().required().email().label("Email address"),
    firstName: yup.string().required().label("First name"),
    lastName: yup.string().required().label("Last name"),
    gender: yup.string().required().label("Gender"),
    team: yup.string().required().label("Team"),
    mobileAcess: yup.string().label("Mobile")
});

defineEmits(['closeForm']);

const { data: user } = await useUser.fetchUser(props.userId);

console.log('userId: ', user.value._id);


const init = {
    firstName: user.value.firstname,
    lastName: user.value.lastname,
    email: user.value.email,
    gender: user.value.gender,
    dateJoined: user.value.dateJoined,
    team: JSON.stringify({
        name: user.value.teams[0].name,
        id: user.value.teams[0].id
    }),
    mobileAcess: user.value.mobileAcess

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
    const rev = user.value._rev
    const id = user.value._id
    const createdAt = user.value.createdAt
    const createResponse = await useUser.updateUser(id, rev, createdAt, values).then(
        (response: any) => {
            console.log("Created with", response.data._rawValue);
            // if(response.data._rawValue.ok == true){
            //     emit('showUsersList',true)
            //     emit('showAddUserForm',false)
            // }

        }
    );

});


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
    <UForm :state="state" @submit="onSubmit" class="space-y-4">
        <div class="text-sm">

            <div class="bg-white rounded-2xl shadow-xl p-5">
                <div class=" border-b pb-5">
                    <div class="flex justify-between">
                        <div class="text-green-500"><strong>Update {{ user.firstname }}'s' Details</strong></div>
                        <div class="">
                            <UButton icon="i-heroicons-x" color="purple" variant="soft" @click="$emit('closeForm', false)">
                                Close Form</UButton>
                        </div>
                    </div>

                </div>
                <div class="grid grid-cols-2 pt-5">
                    <div class=""><strong>First Name:</strong></div>
                    <div class="">
                        <UFormGroup label="" name="firstName" v-bind="firstName">
                            <UInput v-bind="firstName" :placeholder="user.firstname" autofocus />
                        </UFormGroup>
                    </div>
                </div>
                <div class="grid grid-cols-2 mt-5">
                    <div class=""><strong>Last Name:</strong></div>
                    <div class="">
                        <UFormGroup label="" name="lastName" v-bind="lastName">
                            <UInput v-bind="lastName" :placeholder="user.lastname" />
                        </UFormGroup>

                    </div>
                </div>
                <div class="grid grid-cols-2 mt-5">
                    <div class=""><strong>Gender:</strong></div>
                    <div class="">
                        <UFormGroup label="" name="gender" v-bind="gender">
                            <USelect v-bind="gender" :options="genderOptions" :selected="user.gender" />
                        </UFormGroup>

                    </div>
                </div>
                <div class="grid grid-cols-2 mt-5">
                    <div class=""><strong>@email:</strong></div>
                    <div class="">
                        <UFormGroup label="" name="email" v-bind="email">
                            <UInput v-bind="email" :placeholder="user.email" />
                        </UFormGroup>

                    </div>
                </div>
                <div class="grid grid-cols-2 mt-5">
                    <div class=""><strong>Date Joined:</strong></div>
                    <div class="">
                        <UFormGroup label="" name="dateJoined" v-bind="dateJoined">
                            <UInput v-bind="dateJoined"  type="date" />
                        </UFormGroup>
                    </div>
                </div>
                <div class="grid grid-cols-2 mt-5">
                    <div class=""><strong>Trekr Mobile App Access:</strong></div>
                    <div class="">
                        <UFormGroup label="" name="mobileAcess" v-bind="mobileAcess" class="mb-5">
                            <USelect v-bind="mobileAcess" :options="mobileAppOptions" />
                        </UFormGroup>
                    </div>
                </div>

            </div>

            <div class=" bg-white rounded-2xl shadow-xl mt-5 p-5">
                <div class=" border-b pb-5">
                    <div class="">
                        <strong>Update <span class="italic text-orange-500">{{ user.firstname }}'s</span>
                            Teams</strong>
                    </div>
                </div>

                <div class="flex pt-5" v-for="(teams, i) in user.teams">
                    <div class=""><strong>{{ i + 1 }}</strong>)</div>
                    <div class="mx-1 flex">
                        <div class="mr-4">
                            <UFormGroup label="" name="team" v-bind="team">
                                <USelect v-bind="team" :options="teamOptions" option-attribute="name"
                                    value-attribute="value" />
                            </UFormGroup>

                        </div> or <span class="ml-4 text-red-500 cursor-pointer">
                            <UIcon name="i-heroicons-trash" />
                        </span>
                    </div>

                </div>

                <!-- {{ values }} -->
            </div>


            <div class="flex justify-between my-5">
                <div>
                    Submit your changes
                </div>

                <div>
                    <UButton variant="outline" color="green" type="submit">Submit</UButton>
                </div>
            </div>
        </div>
    </UForm>
    <div class="flex justify-between text-sm my-10 border-t pt-5">
        <div>
            Want to delete this user from the system?
        </div>
        <div>
            <UButton icon="i-heroicons-trash" variant="solid" color="red">Delete</UButton>
        </div>
    </div>
</template>