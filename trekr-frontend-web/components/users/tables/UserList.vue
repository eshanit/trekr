<script setup lang="ts">
const props = defineProps({
    users: {
        type: Array<any>,
        required: true
    },
    columns: {
        type: Array<any>,
        required: true
    },
    buttonInfo:{
        type: Object,
        required: true
    }
})


//

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

defineEmits(['showUserInformation'])

</script>
<template>
    <div class="flex px-3 pb-3.5 border-b border-gray-200 dark:border-gray-700">
        <UInput v-model="q" placeholder="Filter users..." />
    </div>
    <div class="pb-1">
        <UTable :columns=columns :rows="getRows(users)">
            <template #empty-state>
                <div class="flex flex-col items-center justify-center py-6 gap-3">
                    <span class="italic text-sm">No one here!</span>
                    <UButton label="Add User" />
                </div>
            </template>
            <template #actions-data="{ row }">
                <!-- <NuxtLink :to="{ name: 'mentees-id', params: { id: row._id } }"> -->
                <UButton 
                    @click="$emit('showUserInformation', {
                        id: row._id,
                        firstname: row.firstname,
                        lastname: row.lastname,
                        team: row.teamName
                        })" 
                    :items="items(row)" 
                    :icon="buttonInfo.icon"
                    :size="buttonInfo.size" 
                    :color="buttonInfo.color" 
                    square 
                    :variant="buttonInfo.variant">
                    {{ buttonInfo.label }}
                </UButton>

                <!-- </NuxtLink> -->

            </template>
        </UTable>
        <UPagination v-model="page" :page-count="pageCount" :total="users.length" />
    </div>
</template>