<script setup lang="ts">

const props = defineProps({
    teamId: {
        type: Object,
        required: true,
    }

})

const emittedValue = ref()

const useTeam = useTeamStore();

const { data: teams } = await useTeam.fetchAllTeams();

const getMembers = (teamData:any[]) => {
    return teamData.find(team => team._id == props.teamId.teamId)
}

let showTeams = ref(true)

const showTeamMember = computed(() => {

    return props.teamId.key
});

watch(showTeamMember, (newValue, oldValue)=>{
    if(newValue == newValue ){
        showTeams = ref(false)
    }
}) 

const emit = defineEmits(['teamId'])

//emits to dash to trigger change in DOM to show team members

watch(emittedValue, (newValue, oldValue)=>{
    if(newValue ){
        emit('teamId', newValue)
    }
})



</script>
<template>
    <div><strong>Monitoring Section</strong></div>
    <div class="bg-slate-50 pt-5">
        <div v-if="showTeams == true">
          <SharedTeamsList @team-id="emittedValue=$event"/>
        </div>
        <div v-else-if="showTeams == false ">
            <TeamsCardsTeamMembers 
                :members="getMembers(teams).members" 
                :team-name="getMembers(teams).name" 
                @back="showTeams = $event"
                />
        </div>

    </div>
</template> 