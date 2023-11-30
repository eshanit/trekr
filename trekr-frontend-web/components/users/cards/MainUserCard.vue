<script setup lang="ts">

const emittedUserId = ref('')
const showEditForm = ref(false)

const userStore = useUsersStore();

const { data: users } = await userStore.fetchAllUsers();

defineProps({
    showInfoPanel: {
        type: Boolean
    }
})

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
        key: 'dateJoined',
        label: 'Joined',
    },
    {
        key: 'mobileAcess',
        label: 'Mobile App Access',
    },
    {
        key: 'actions',
        label: 'View'
    }
]

const buttonInfo = {
    color: 'blue',
    icon: 'i-heroicons-user',
    size: 'sm',
    variant: 'outline',
    label: 'profile',
}

defineEmits(['addUser'])
</script>
<template>
    <div class="my-5">
        <div v-if="!emittedUserId">
            <div class="bg-white rounded-2xl shadow-xl p-5">
                <div class="border-b pb-5">
                    <div class="flex justify-between">
                        <div class=" text-sm">
                            <strong><span class="text-cyan-950 ">Number of Users:</span></strong>
                            <span class="text-orange-500 mx-2">{{ users.length }}</span>
                        </div>
                        <div>
                            <UButton variant="soft" @click="$emit('addUser', true)">Add New User</UButton>
                        </div>
                    </div>
                </div>
                <div class="mt-5">
                    <UsersTablesUserList 
                        :users="users" 
                        :columns="columns"
                         @show-user-information="emittedUserId = $event"
                         :button-info="buttonInfo"
                          />
                </div>
            </div>
        </div>
        <div v-else>
            <div v-if="!showEditForm">
                <UsersCardsUserProfile :user-id="emittedUserId" @emitted-user-id="emittedUserId = $event" @show-edit="showEditForm = $event" />
            </div>
            <div v-else>
                <UsersFormsUpdateUser :user-id="emittedUserId" @close-form="showEditForm = $event"/>
            </div>
            
        </div>
    </div>
</template>