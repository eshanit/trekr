<script setup lang="ts">

import { usePercertageCompletedTasks } from "@/composables/usePercentageCompletedTasks"

defineProps({
    todos: {
        type: Array,
        required: true
    }
})

defineEmits(['todoId'])

const columns = [
    {
        key: 'date',
        label: 'Date',
    },
    {
        key: 'type',
        label: 'Allocation',
    },
    {
        key: 'actions',
        label: 'View'
    }
]

const q = ref('')
const page = ref(1)
const pageCount = 5

const getRows = (data: any) => {
    return data.filter((user: any) => {
        return Object.values(user).some((value) => {
            return String(value).toLowerCase().includes(q.value.toLowerCase())
        });
    }).slice((page.value - 1) * pageCount, (page.value) * pageCount)
}

const items = (row: { id: any; }) => [
    [
        {
            label: 'Edit',
            icon: 'i-heroicons-pencil-square-20-solid',
            click: () => console.log('Edit', row.id)
        }
    ]
]

</script>
<template>
    <SharedTwCard>
        <template #header>
            <div class="text-sm text-purple-500">
                <strong>Record Resident info:</strong>
            </div>
        </template>
        <template #body>
            <div class="flex pt-3 px-3 pb-3.5 border-b border-gray-200 dark:border-gray-700">
                <UInput v-model="q" placeholder="Filter users..." />
            </div>
            <UTable :columns="columns" :rows="getRows(todos)">
                <template #actions-data="{ row }">

                    <UButton :items="items(row)" size="sm" color="green" square variant="soft" @click="$emit('todoId',row.id)">
                        Completed | {{ usePercertageCompletedTasks(row.id).toFixed(0) }}%
                    </UButton>

                </template>
            </UTable>
        </template>
    </SharedTwCard>
</template>
