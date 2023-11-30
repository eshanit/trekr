<script setup lang="ts">
const userStore = useUsersStore();

const { data: users } = await userStore.fetchAllUsers();

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
        key: 'Team',
        label: 'team',
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


</script>

<template>
    <UsersTablesUserList 
    :users="users" 
    :columns="columns" 
    @show-user-information="emittedUserId = $event"
    :button-info="buttonInfo" />
</template>