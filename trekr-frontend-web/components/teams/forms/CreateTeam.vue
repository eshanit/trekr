<script setup lang="ts">
import * as yup from "yup";

const useTeam = useTeamStore();

const schema = yup.object({
    team: yup.string().required().min(1).label("Team Name"),
});


const init = {
    team: undefined,
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


const team = defineComponentBinds("team", nuxtUiConfig);


const onSubmit = handleSubmit((values) => {
    console.log("Submitted with", values);
    useTeam.createTeam(values);
});

</script>
<template>
    <div class="">
        <UContainer>
            <UForm :state="state" @submit="onSubmit" class="space-y-4">

                <UFormGroup label="Team Name" name="team" v-bind="team">
                    <UInput v-bind="team" type="text" placeholder="e.g RGN" />
                </UFormGroup>

                <UButton type="submit"> Submit </UButton>

                <UButton class="ml-4" color="white" variant="outline" type="button" @click="resetForm()">
                    Reset
                </UButton>
            </UForm>
        </UContainer>
    </div>
</template>