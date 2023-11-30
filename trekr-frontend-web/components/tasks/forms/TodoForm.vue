<script setup lang="ts">
import * as yup from "yup";

const props = defineProps({
    teamInfo: {
        type: Object,
        required: true,
    },
    dateForToDo: {
        type: null,
    }
})

const schema = yup.object({
    newToDo: yup.string().required().label("new To Do"),
    dateToDo: yup.date().label("date")

});


const init = {
    newToDo: undefined,
    dateToDo: props.dateForToDo,
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


const newToDo = defineComponentBinds("newToDo", nuxtUiConfig);
const dateToDo = defineComponentBinds("dateToDo", nuxtUiConfig);


const emit = defineEmits(['toDo'])

const onSubmit = handleSubmit((values) => {

    console.log("Submitted with", values);

    let newValues = {}

if(props.dateForToDo != undefined) {
    newValues = {
        newToDo: values.newToDo,
        dateToDo: props.dateForToDo
    }
}else{
    newValues = values
}
    emit('toDo', newValues);

    resetForm()
    // useAuth.signin(values);
});


</script>
<template>
    <div class=" items-center justify-center">
        <div class="pb-5 border-b text-sm">
            Tasks for Team: <strong>{{ teamInfo.teamName }}</strong>
        </div>
        <div class="pt-5">
            <UForm :state="state" @submit="onSubmit" class="space-y-4">

                <div v-if="dateForToDo">
                    <div class=" text-sm flex justify-between">
                        <div class="text-red-500">
                           <strong>{{ dateForToDo }}</strong> 
                        </div>
                        <div class=" text-cyan-500">
                            edit
                        </div>
                    </div>
                </div>
                <div v-else>
                    <UFormGroup label="Date for the tasks" name="dateToDo" v-bind="dateToDo">
                        <UInput v-bind="dateToDo" type="date" @keyup.enter=onSubmit />
                    </UFormGroup>
                </div>

                <UFormGroup label="New To Do Item" name="newToDo" v-bind="newToDo">
                    <UInput v-bind="newToDo" @keyup.enter=onSubmit />
                </UFormGroup>

                <UButton type="submit"> add </UButton>

                <UButton class="ml-4" color="white" variant="outline" type="button" @click="resetForm()">
                    Reset
                </UButton>
            </UForm>
        </div>
    </div>
</template>