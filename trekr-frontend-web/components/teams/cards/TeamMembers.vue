<script setup lang="ts">

const emittedValue = ref('')
const memberId = ref(null);
let showTeamMembers = ref(true)

defineProps({
    members: {
        type: Array<any>,
        required: true
    },
    teamName: {
        type: String,
        required: true
    }

})

const emit = defineEmits(['back'])

watch(memberId, (newValue, oldValue) =>{
    if(newValue != oldValue){
        showTeamMembers = ref(true)
    }
})



</script>
<template>
    show: {{ showTeamMembers  }}
    membr: {{ memberId }}

    <div v-if="showTeamMembers && memberId ">
        {{ memberId }}
        
        <MonitoringDashApps :member-id="memberId" @back="showTeamMembers=$event" />
    </div>
    <div v-else>
        {{ members }}
        <div class="pl-5 pt-5">
            <UButton icon="i-heroicons-chevron-double-left-20-solid" color="purple" variant="soft"
                @click="$emit('back', true)">
                Back
            </UButton>
        </div>
        <div class="grid grid-cols-3 gap-5 p-24 pb-72 ">
            <div class="text-sm text-center p-5 pr-24">
                <div class="text-5xl text-rose-950"><strong>{{ teamName }}</strong></div>
            </div>
            <div class="  col-span-2 bg-white p-5 shadow-lg rounded-2xl">
                <TeamsTablesMemberList :members="members"
                    @show-monitor-apps="memberId = $event" />
            </div>
        </div>
    </div>
</template>