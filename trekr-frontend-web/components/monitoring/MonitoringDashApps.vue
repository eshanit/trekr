<script setup lang="ts">

defineProps({
    memberId: {
        type: Object,
        required: true,
    }
})

defineEmits(['back'])

</script>
<template>
    <div class="bg-slate-50 ">
        <div class="pl-5 pt-5">
            <UButton icon="i-heroicons-chevron-double-left-20-solid" color="purple" variant="soft"
                @click="$emit('back', false)">
                Back
            </UButton>
        </div>
        <div class="p-36">
            <div><span class="text-cyan-700"><strong>{{ memberId.memberName }}</strong> </span>| <span class="text-rose-700">{{ memberId.memberLastname }}</span></div>
            <div class="grid grid-cols-3 gap-5 p-5 ">
                <div class="bg-white text-center p-12 rounded-xl shadow-lg cursor-pointer hover:bg-pink-50">
                    <div class=" text-teal-950"><strong>Diet</strong></div>
                </div>
                <div class="bg-white text-center p-12 rounded-xl shadow-lg cursor-pointer hover:bg-cyan-50">
                    <div class=" text-teal-950"><strong>Sleep</strong></div>
                </div>
                <div class="bg-white text-center p-12 rounded-xl shadow-lg cursor-pointer hover:bg-teal-50">
                    <div class=" text-teal-950"><strong>Hygiene</strong></div>
                </div>
                <div class="bg-white text-center p-12 rounded-xl shadow-lg cursor-pointer hover:bg-sky-50">
                    <div class=" text-teal-950"><strong>Medicals</strong></div>
                </div>
                <div class="bg-white text-center p-12 rounded-xl shadow-lg cursor-pointer hover:bg-yellow-50">
                    <div class=" text-teal-950"><strong>Vitals</strong></div>
                </div>
                <div class="bg-white text-center p-12 rounded-xl shadow-lg cursor-pointer hover:bg-red-50">
                    <div class=" text-teal-950"><strong>Health</strong></div>
                </div>
            </div>

        </div>
    </div>
</template> 