<script setup lang="ts">
import * as yup from "yup";

const useAuth = useAuthStore();

const schema = yup.object({
    email: yup.string().required().email().label("Email address"),
    password: yup.string().required().min(6).label("Password"),
});


const init = {
    email: undefined,
    password: undefined,
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


const email = defineComponentBinds("email", nuxtUiConfig);
const password = defineComponentBinds("password", nuxtUiConfig);


const onSubmit = handleSubmit((values) => {
    console.log("Submitted with", values);
    useAuth.signin(values);
});

</script>
<template>
    <div class="flex items-center justify-center h-screen">
        <UContainer>
            <UForm :state="state" @submit="onSubmit" class="space-y-4">
       
                <UFormGroup label="Email" name="email" v-bind="email">
                    <UInput v-bind="email" />
                </UFormGroup>

                <UFormGroup label="Password" name="password" v-bind="password">
                    <UInput v-bind="password" type="password" />
                </UFormGroup>

                <UButton type="submit"> Submit </UButton>

                <UButton class="ml-4" color="white" variant="outline" type="button" @click="resetForm()">
                    Reset
                </UButton>
            </UForm>
        </UContainer>
    </div>
</template>