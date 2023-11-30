<script setup lang="ts">
const props = defineProps({
    columns: {
        type: Array<any>,
        required: true
    },
    teams: {
        type: Array<any>,
        required: true
    }
})

const q = ref('')
const page = ref(1)
const pageCount = 5

const getRows = (data: any) => {
    return data.filter((team: any) => {
        return Object.values(team).some((value) => {
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

defineEmits(['showTeamAccount'])
</script>
<template>
    <div class="flex px-3 pb-3.5 border-b border-gray-200 dark:border-gray-700">
        <UInput v-model="q" placeholder="Filter teams..." />
    </div>
    <div class="pb-1">
        <UTable :columns=columns :rows="getRows(teams)">
            <template #empty-state>
                <div class="flex flex-col items-center justify-center py-6 gap-3">
                    <span class="italic text-sm">No one here!</span>
                    <UButton label="Add Team" />
                </div>
            </template>
            <template #actions-data="{ row }">
                <!-- <NuxtLink :to="{ name: 'mentees-id', params: { id: row._id } }"> -->
                <UButton @click="$emit('showTeamAccount', row._id)" :items="items(row)" icon="i-heroicons-pencil-square"
                    size="sm" color="pink" square variant="outline" v-if="row._id">
                    Members | <span class=" text-orange-500">{{
                        row.members.length }}</span></UButton>
                <UButton :items="items(row)" icon="i-heroicons-pencil-square" size="sm" color="red" square variant="outline"
                    v-else disabled>Members | {{ row._id }}</UButton>
                <!-- </NuxtLink> -->

            </template>
        </UTable>
        <UPagination v-model="page" :page-count="pageCount" :total="teams.length" />
    </div>
</template>