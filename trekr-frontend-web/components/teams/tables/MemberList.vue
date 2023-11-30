<script setup lang="ts">
defineProps({
    members: {
        type: Array,
        required: true,
    }
})

const columns = [
    {
        key: 'firstname',
        label: 'First Name',
    },
    {
        key: 'lastname',
        label: 'Last Name',
    },
    {
        key: 'actions',
        label: 'Monitoring'
    }
]

const q = ref('')
const page = ref(1)
const pageCount = 5

const getRows = (data: any) => {
    return data.filter((member: any) => {
        return Object.values(member).some((value) => {
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

defineEmits(['showMonitorApps'])

</script>
<template>
        <div class="flex px-3 pb-3.5 border-b border-gray-200 dark:border-gray-700">
        <UInput v-model="q" placeholder="Filter members..." />
    </div>
    <div class="pb-1">
        <UTable :columns=columns :rows="getRows(members)">
            <template #empty-state>
                <div class="flex flex-col items-center justify-center py-6 gap-3">
                    <span class="italic text-sm">No one here!</span>
                    <UButton label="Add Member" />
                </div>
            </template>
            <template #actions-data="{ row }">
                <!-- <NuxtLink :to="{ name: 'mentees-id', params: { id: row._id } }"> -->
                <UButton @click="$emit('showMonitorApps', {
                    memberId:row.id,
                    memberName: row.firstname,
                    memberLastname: row.lastname,
                    key: Date.now(),
                    })" :items="items(row)" icon="i-heroicons-pencil-square"
                    size="sm" color="pink" square variant="outline">
                    Click To Monitor</UButton>
    

            </template>
        </UTable>
        <UPagination v-model="page" :page-count="pageCount" :total="members.length" />
    </div>
</template>