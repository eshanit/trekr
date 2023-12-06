<script setup lang="ts">
import {
    IonPage,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonBackButton,
    IonButtons,
    IonButton,
    IonContent
} from '@ionic/vue';
import type ITodo from '@/interfaces/ITodo'

const showTodos = ref(false);
const todoId = ref('');
const userId = '480c7cce-d38f-4aa5-90cd-010f9b97ee16';

const todoStore = useTodoStore();

const { data: todos } = await todoStore.fetchAllTodos(userId)



watch(todoId, () => {
    showTodos.value = true
})

const viewTodos = (todoId: string, todoData: Array<Object>): ITodo | Object[] => {
    return todoData.filter((todo: any) => todo.id === todoId)
}

</script>
<template>
    <ion-page>
        <ion-header :translucent="true">
            <div v-show="!showTodos">
                <ion-toolbar>
                    <IonTitle>List of todos</IonTitle>
                </ion-toolbar>
            </div>
            <div v-show="showTodos">
                <ion-toolbar>
                        <IonTitle>
                            <div class="flex">
                                <div class="pr-5 text-blue-500 cursor-pointer" @click="showTodos = false"><UIcon name="i-heroicons-arrow-small-left" /></div>
                                <div>Todos</div>
                            </div>
                        </IonTitle>
                </ion-toolbar>
            </div>
        </ion-header>

        <ion-content class="ion-padding">

            <div v-show="!showTodos">
                <TodosTablesAllTodos :todos="todos" @todo-id="todoId = $event" />
            </div>
            <div v-show="showTodos">
                <SharedToDoList :todo-data="viewTodos(todoId, todos)" :user-id="userId" />
            </div>

        </ion-content>

    </ion-page>
</template>
<style>
ion-content {
    --ion-background-color: #eeeeee;
}
</style>