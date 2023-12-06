
import type { getOverlappingDaysInIntervals } from 'date-fns';
<script setup lang="ts">
const userStore = useUsersStore();

const { data: users } = await userStore.fetchAllUsers();

const emittedUserId = ref('')

//columns
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
        key: 'gender',
        label: 'Gender',
    },
    {
        key: 'teamName',
        label: 'Team',
    },
    {
        key: 'actions',
        label: 'View'
    }
]

const buttonInfo = {
    color: 'green',
    icon: 'i-heroicons-user',
    size: 'sm',
    variant: 'outline',
    label: 'Create Tasks',
}

watch(emittedUserId,(newValue,oldValue) =>{
  emit('emittedUserId',newValue)
})

const emit = defineEmits(['emittedUserId'])


</script>
<template>
    <UsersTablesUserList 
    :users="users" 
    :columns="columns" 
    @show-user-information="emittedUserId = $event"
    :button-info="buttonInfo" />
</template>