<script setup lang="ts">
const useTeam = useTeamStore();

const { data: teams } = await useTeam.fetchAllTeams();

defineEmits(['teamId'])

</script>
<template>
    <div class=" absolute grid grid-cols-3 gap-10 ">
        <div class="bg-white text-center p-16 rounded-xl shadow-lg cursor-pointer hover:bg-pink-50"
            @click="$emit('teamId', { teamId: team._id,teamName: team.name, key: Date.now() })" v-for="team in teams">
            <div class=" text-teal-950"><strong>{{ team.name }}</strong></div>
        </div>
    </div>
</template>