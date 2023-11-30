<script setup lang="ts">
const showCreateTeamForm = ref(false)
defineEmits(['showAddUserForm', 'addUser'])

</script>
<template>
    <div class="bg-slate-50">
        <div class="">
            <UButton icon="i-heroicons-chevron-double-left-20-solid" color="purple" variant="soft"
                @click="$emit('showAddUserForm', false)"> Back</UButton>
        </div>
        <div class="flex p-32">
            <div class=" grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10">
                <div class=" bg-white shadow-lg text-center text-sm rounded-2xl p-24">
                 <div v-show="showCreateTeamForm">
                    <div class="mt-2"> Use the form on your right to create the team <span class="text-orange-500"><strong>OR</strong></span> if you have thought otherwise, close the form using the button below:</div>
                    <UButton variant="soft" color="orange" @click="showCreateTeamForm = false">Close Form</UButton>
                 </div>
                 <div v-show="showCreateTeamForm == false">
                    <div class="mb-5">
                        If the User you are about to create is <span class="text-rose-500"><strong>NOT</strong></span>
                        going
                        into any of the existing teams ,
                        please create a new team for the user. To do so, please click the button below:
                    </div>

                    <div class="mt-1">
                        <UButton variant="soft" color="rose" @click="showCreateTeamForm = true">Create Team</UButton>
                    </div>
                 </div>

                </div>
                <div class="bg-white shadow-lg text-center text-sm rounded-2xl p-24">
                    <div v-show="showCreateTeamForm">
                        <TeamsFormsCreateTeam/>
                    </div>
                    <div v-show="!showCreateTeamForm">
                        <div class="mb-10">If the User is <span class="text-sky-500"><strong>GOING</strong></span> into at
                            least
                            one
                            of the existing teams, then go ahead and create the user by clicking the button
                            below:</div>
                        <div class="mt-5">
                            <UButton variant="soft" color="sky" @click="$emit('addUser', false)">Create User</UButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>