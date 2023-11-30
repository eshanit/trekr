<script setup lang="ts">
import * as yup from "yup";

const useAuth = useAuthStore();

const schema = yup.object({
    email: yup.string().required().email().label("Email address"),
    firstName: yup.string().required().label("First name"),
    lastName: yup.string().required().label("Last name"),
    password: yup.string().required().min(6).label("Password"),
    passwordConfirm: yup
        .string()
        .required()
        .oneOf([yup.ref("password")], "Passwords must match")
        .label("Password confirmation"),
    terms: yup
        .boolean()
        .required()
        .isTrue("You must agree to terms and conditions")
        .label("terms agreement"),
    // type: yup.string().required().label("Account type"),
});


const init = {
    terms: false,
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    password: undefined,
    passwordConfirm: undefined,
    // type: undefined,
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
const password = defineComponentBinds("password", nuxtUiConfig);
const passwordConfirm = defineComponentBinds("passwordConfirm", nuxtUiConfig);
const terms = defineComponentBinds("terms", nuxtUiConfig);
//const type = defineComponentBinds("type", nuxtUiConfig);

const onSubmit = handleSubmit((values) => {
    console.log("Submitted with", values);
    useAuth.registerUser(values);
});

const options = [
    {
        name: "Enterprise",
        value: "Enterprise",
    },
    {
        name: "Pro",
        value: "Pro",
    },
    {
        name: "Freelance",
        value: "Freelance",
    },
];

</script>
<template>
    <div class="flex items-center justify-center h-screen">
        <UContainer>
            <UForm :state="state" @submit="onSubmit" class="space-y-4">
                <UFormGroup label="First name" name="firstName" v-bind="firstName">
                    <UInput v-bind="firstName" />
                </UFormGroup>

                <UFormGroup label="Last name" name="lastName" v-bind="lastName">
                    <UInput v-bind="lastName" />
                </UFormGroup>

                <UFormGroup label="Email" name="email" v-bind="email">
                    <UInput v-bind="email" />
                </UFormGroup>

                <UFormGroup label="Password" name="password" v-bind="password">
                    <UInput v-bind="password" type="password" />
                </UFormGroup>

                <UFormGroup label="Confirm password" name="passwordConfirm" v-bind="passwordConfirm">
                    <UInput v-bind="passwordConfirm" type="password" />
                </UFormGroup>

                <!-- <UFormGroup label="Account type" name="passwordConfirm" v-bind="type">
            <USelect v-bind="type" :options="options" />
          </UFormGroup> -->

                <UFormGroup label="" name="terms" v-bind="terms">
                    <UCheckbox name="terms" v-bind="terms" label="I agree to terms and conditions" />
                </UFormGroup>

                <UButton type="submit"> Submit </UButton>

                <UButton class="ml-4" color="white" variant="outline" type="button" @click="resetForm()">
                    Reset
                </UButton>
            </UForm>
        </UContainer>
    </div>
</template>