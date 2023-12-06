<script setup lang="ts">
import {
    IonPage,
    IonHeader,
    IonText,
    IonTitle,
    IonToolbar,
    IonButton,
    IonContent
} from '@ionic/vue';
import * as yup from "yup";

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
   // useAuth.signin(values);
});


</script>
<template>
    <ion-page>

        <ion-content class="ion-padding">

            <div class=" flex items-center justify-center h-screen">
                <UForm :state="state" @submit="onSubmit" class="space-y-4">
                    <IonText><strong>Login to <span class="text-orange-500">trkr</span></strong></IonText>
                    <UFormGroup label="Email" name="email" v-bind="email">
                        <UInput v-bind="email" />
                    </UFormGroup>

                    <UFormGroup label="Password" name="password" v-bind="password">
                        <UInput v-bind="password" type="password" />
                    </UFormGroup>
                    <nuxt-link to="/dashboard">
                        <UButton type=""> Submit </UButton>
                    </nuxt-link>
                    

                    <UButton class="ml-4" color="white" variant="outline" type="button" @click="resetForm()">
                        Reset
                    </UButton>
                </UForm>
            </div>
        </ion-content>
    </ion-page>
</template>