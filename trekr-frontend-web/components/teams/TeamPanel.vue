<script setup lang="ts">

const showUserProfile = ref(null)

const useTeam = useTeamStore();


const { data: teams } = await useTeam.fetchAllTeams();



const addTeamForm = ref(false)
const showTeamAccount = ref(null)


const columns = [{
    key: 'name',
    label: 'Team Name'
},
{
    key: 'createdAt',
    label: 'Date Created'
},
{
    key: 'actions',
    label: 'View'
}]

//table stuff


</script>
<template>
    <div><strong>Team Settings</strong></div>

    <!-- <div class="text-green-500">{{ teams.length }}</div> -->
    <div v-if="!showTeamAccount">
        <div class="my-5">
            <div class="grid grid-cols-3 gap-4">
                <div class=" col-span-2">
                    <TeamsCardsMainTeamCard :show-info-panel="addTeamForm" :teams="teams" :columns="columns"
                        @add-team="addTeamForm = $event" @show-team-account="showTeamAccount = $event" />
                </div>
                <!--Add Team Form-->
                    <div v-if="addTeamForm">
                        <TeamsFormsCreateTeam />
                    </div>
                    <div v-else class="text-sm">
                        <div class="mb-5">
                            <div class="text-cyan-950"><strong>Creating Teams</strong></div>
                        </div>

                        <div class="flex">
                            <div class="text-orange-500 pt-1">
                                <UIcon name="i-heroicons-arrow-up-right" />
                            </div>
                            <p>
                                Teams (in this context) are a good way to organise people who fall into same
                                categories. Its important to group them together so that when you do your
                                tracking, analysis and reporting, it will be easier to manage.
                            </p>
                        </div>
                        <div class="flex">
                            <div class="text-orange-500 pt-3">
                                <UIcon name="i-heroicons-arrow-up-right" />
                            </div>
                            <p class="pt-2">
                                There are no strict rules to creating the teams. A person can be a member of one or more
                                teams.
                                You can edit or delete a team (or a team member) whenever it suits you.
                            </p>
                        </div>

                        <div class="flex">
                            <div class="text-orange-500 pt-3">
                                <UIcon name="i-heroicons-arrow-up-right" />
                            </div>
                            <p class="pt-2">
                                A team name should be <span class="text-red-500 italic"><strong>unique</strong></span>.
                                Though it is possible to do so, it is advisable
                                for teams to have different names to avoid confusion. Click on the green button to
                                create a
                                team.
                            </p>
                        </div>

                    </div>
            </div>
        </div>
    </div>
    <div v-else>
        <div v-if="!showUserProfile">
            <TeamsTeamAccount :team-id="showTeamAccount" @view-member-profile="showUserProfile=$event" />
        </div>
        <div v-else>
            <UsersCardsUserProfile :user-id="showUserProfile" />
        </div>
        
    </div>
</template>