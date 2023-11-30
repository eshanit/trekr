<script setup lang="ts">

const emittedValue = ref('')


const useTeam = useTeamStore();

const props = defineProps({
    teamId: {
        type: String,
        required: true,
    }
})

const columns: any[] = []

const { data: team } = await useTeam.fetchTeam(props.teamId);

const emit = defineEmits(['viewMemberProfile'])


watch(emittedValue, ( newValue, oldValue) =>{
    if(oldValue != newValue){
        emit('viewMemberProfile',newValue)
    }
})

</script>
<template>
    <div class="text-small my-5">
        <div class="text-orange-500"><strong>{{ team.name }}</strong></div>
        <TeamsCardsTeamMembers :members="team.members" :columns="columns" @view-member-profile="emittedValue = $event"/>
    </div>
</template>