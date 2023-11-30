<script setup lang="ts">

const emittedValue = ref(null)

defineProps({
   teams:{
    type: Array<object>,
    required: true
   } ,
   columns:{
    type: Array<object>,
    required: true
   },
   showInfoPanel: {
    type: Boolean
   }

})

const emit = defineEmits(['addTeam','showTeamAccount'])

watch(emittedValue, (newValue, oldValue)=>{
    emit('showTeamAccount',newValue)
})

</script>
<template>
    <UCard class="">
        <template #header>
            <div class="flex justify-between">
                <div class=" text-sm">
                    <strong><span class="text-cyan-950 ">Number of teams:</span></strong>
                    <span class="text-orange-500 mx-2">{{ teams.length }}</span>
                </div>
                <div>
                    <div v-if="!showInfoPanel">
                        <UButton variant="soft" @click="$emit('addTeam', true)" >Create Team</UButton>
                    </div>
                    <div v-else>
                        <UButton color="pink" variant="soft" @click="$emit('addTeam', false)" >Show Info</UButton>
                    </div>
                    
                </div>
            </div>
        </template>

       <TeamsTablesTeamList 
         :teams="teams" 
         :columns="columns"
         @show-team-account="emittedValue = $event"
         />
      
    </UCard>
</template>