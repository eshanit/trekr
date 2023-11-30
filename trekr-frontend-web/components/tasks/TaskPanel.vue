<script setup lang="ts">
const showTeams = ref(false)
const showUsers = ref(false)
const showTaskForm = ref({ key: null })
const emittedTodos = ref({
    newToDo: '',
    dateToDo: ''
})
const placeholder: any[] = []
let dateToDo = ref()
const toDos = ref(placeholder);

const useToDo = useTodoStore()

const props = defineProps({
    user: {
        type: Object,
        required: true
    }
})

watch(emittedTodos, (newValue, oldValue) => {
    toDos.value.push(newValue.newToDo);
    dateToDo.value = newValue.dateToDo;
})

const deleteElement = (el: string) => {
    const indx = toDos.value.indexOf(el)
    toDos.value.splice(indx, 1);
}

const processToDos = (teamInfo: any, toDoDate: string, todoData: Array<Object>) => {

    const tasks: any[] = []
    const vm: any[] = [];

    todoData.forEach(t => {

        vm.push({
            name: t,
            status: 'incomplete'
        })

    })


    tasks.push({
        date: toDoDate,
        type: 'team',
        team: teamInfo.teamName,
        createdBy: props.user.firstname,
        tasks: vm
    })

    console.log('tasks', tasks, teamInfo.teamId)

    useToDo.createTodosForTeam(teamInfo.teamId, tasks)

}

</script>
<template>
    <!--teams todo Allocation-->
    <div v-show="showTeams" class="">
        <div v-show="showTaskForm.key == null">
            <UButton icon="i-heroicons-chevron-double-left-20-solid" color="purple" variant="soft"
                @click="showTeams = false">
                Back
            </UButton>
            <div class="text-sm pt-5 pb-5">Choose a team to make task allocations to:</div>
            <SharedTeamsList @team-id="showTaskForm = $event" />
        </div>
        <div v-show="showTaskForm.key != null">
            <div class=" grid grid-cols-2 gap-5">
                <div>
                    <div class="pb-5">
                        <UButton icon="i-heroicons-chevron-double-left-20-solid" color="purple" variant="soft"
                            @click="showTaskForm.key = null">
                            Back
                        </UButton>
                    </div>
                    <div class="">
                        <TasksCardsTodoCard>
                            <template #body>
                                <TasksFormsTodoForm :date-for-to-do="dateToDo" :team-info="showTaskForm"
                                    @to-do="emittedTodos = $event" />
                            </template>
                        </TasksCardsTodoCard>
                    </div>
                </div>
                <div>
                    <div class=" flex justify-between pb-7">
                        <div class="text-orange">
                            <strong>Tasks or Todos</strong>
                        </div>
                        <div class="text-teal-500 text-sm">
                            {{ dateToDo }}
                        </div>
                        <div>
                            <strong>Count:</strong> {{ toDos.length }}
                        </div>
                    </div>
                    <div class=" flex justify-between text-sm  border-slate-200 border-8 p-3 " v-for="todo in toDos">
                        <div class="text-cyan-950">{{ todo }}</div>
                        <div class="text-red-500 cursor-pointer" @click="deleteElement(todo)">
                            <UIcon name="i-heroicons-trash" />
                        </div>
                    </div>
                    <div class="flex justify-between pt-5 text-sm" v-if="toDos.length > 0">
                        <div> If satisfied with the tasks, click the Allocate button:</div>
                        <UButton icon="i-heroicons-chevron-double-up-20-solid" color="sky" variant="solid"
                            @click="processToDos(showTaskForm, dateToDo, toDos)">
                            Allocate
                        </UButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--end teams-->

    <!--indviduals todo Allocation-->
    <div v-show="showUsers">
        <TasksCardsTodoCard>
            <template #body>
                <TasksTablesUsers />
            </template>
        </TasksCardsTodoCard>
        
    </div>


    <div class="text-center p-24 ">
        <div v-show="!showTeams && !showUsers">
            <div class="grid grid-cols-2 gap-5">
                <div class=" bg-white rounded-2xl shadow-xl p-24 ">
                    <div class="text-rose-800 text-5xl pb-5">Prepare </div>
                    <div><strong>Tasks and Todo's</strong></div>
                    <div class="grid grid-cols-2 gap-5 mt-3 text-sm">
                        <div class="relative border-r pr-5">
                            <div> Allocate todo's to a Team all at once</div>
                            <UButton variant="soft" class="mt-3" @click="showTeams = true">Team Allocation</UButton>
                        </div>
                        <div class="">
                            <div> Allocate todo's to one person at a time</div>
                            <UButton variant="soft" color="purple" @click="showUsers = true" class="mt-3">Individual
                                Allocation</UButton>
                        </div>
                    </div>
                </div>
                <div class=" bg-white rounded-2xl shadow-xl p-24 cursor-pointer hover:bg-cyan-50">
                    <div class="text-cyan-800 text-5xl pb-5">View </div>
                    <div><strong>Tasks and Todo's</strong></div>
                </div>
            </div>
        </div>
    </div>
</template>