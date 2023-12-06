<script setup lang="ts">

import { usePercertageCompletedTasks } from "@/composables/usePercentageCompletedTasks"

const useTodo = useTodoStore();

const props = defineProps({
    todoData: {
        type: Object,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
})


const init = {
    _todo: false,
    todonotes: ''
}

const todos = ref(props.todoData)


const state = reactive(init)

const handleChangeStatus = async (taskId: string,newStatus: boolean, todoId: string) => {

    console.log('handleChange', taskId, newStatus,todoId);

      try {
        const { data: updatedTodo, errors } = await useTodo.updateTodo(taskId, props.userId,todoId, newStatus)

        if (errors) throw errors;

        todos.value = todos.value.map((todo: any) =>
          todo._id === todoId ? updatedTodo : todo
        );
      } catch (errorList) {
        alert(errorList);
      }

};

</script>
<template>
    <div class="" v-if="todoData.length != 0">
        <div class="pl-5 pr-5">
            <div class="flex justify-between">
                <div class=" text-lime-500"><strong>{{ todoData[0].date }}</strong></div>
                <div class=" text-cyan-500"><strong>{{ todoData[0].type }}</strong></div>
                <div class=" text-rose-700"><strong>{{ todoData[0].team }}</strong> </div>
            </div>
            <div class=" flex justify-between pt-5">
                <div>You have <span class="text-2xl text-purple-500">{{ todoData[0].tasks.length }} </span> tasks for this
                    run.</div>
                <div> <span class="text-orange-500 text-5xl">{{usePercertageCompletedTasks(todoData[0].id).toFixed(0)}}%</span> complete</div>
            </div>
        </div>


        <div class="text-sm ">
            <div class="bg-white rounded-2xl shadow-xl" v-for="task in  todoData[0].tasks">
                <div class="flex justify-between  pt-5 pb-5 m-5">
                    <div v-bind:class="{ 'line-through': task.isCompleted }">{{ task.name }}</div>
                    <div>
                        <UFormGroup label="">
                            <UCheckbox name="_todo"
                                @change="handleChangeStatus(task.id,task.isCompleted = !task.isCompleted, todoData[0].id )"
                                :checked="task.isCompleted" />
                        </UFormGroup>
                    </div>
                </div>
                <!-- <div class="p-5">
                    <UFormGroup label="Notes">
                        <UTextarea />
                    </UFormGroup>
                </div> -->
            </div>
            <!-- {{ values }} -->

        </div>
    </div>
</template>