<script setup lang="ts">
const props = defineProps({
    user: {
        type: Object,
        required: true
    }
})
</script>
<template>
    <div class="">
        <div><strong>Hello, {{ user.firstname }} </strong></div>
        <div class="text-gray-400">Today is, {{ Date.now() }}</div>

        <div class="grid grid-cols-3 gap-4 my-5">

            <div>
                <UCard class="bg-purple-700 text-white">
                    <div class="text-lg">
                        <h2><strong>Inhouse Tasks</strong></h2>
                    </div>
                    <div class="mt-5 text-sm">10 tasks | 72 %</div>
                    <UProgress :value="70" />

                </UCard>
            </div>

            <div>
                <UCard class="bg-cyan-500 text-white">
                    <div class="text-lg">
                        <h2><strong>OutDoor Activities</strong></h2>
                    </div>
                    <div class="mt-5 text-sm">12 tasks | 96 %</div>
                    <UProgress :value="96" />
                </UCard>
            </div>
            <div>
                <UCard class="bg-orange-500 text-white">
                    <div class="text-lg">
                        <h2><strong>Other Activities</strong></h2>
                    </div>
                    <div class="mt-5 text-sm">6 tasks | 12 %</div>
                    <UProgress :value="12" />
                </UCard>
            </div>

        </div>

        <div class="grid grid-cols-2 gap-6 mt-10">

            <div class="">
                <h3><strong>Tasks for today</strong></h3>

                <div class="mt-5">
                    <UCard class=" shadow-xl border-l-4 border-orange-500">

                        <div class="flex justify-between">
                            <div>Meeting at 13:00 </div>
                            <div class="">
                                <UCheckbox name="notifications" label="" />
                            </div>
                        </div>

                    </UCard>
                    <UCard class=" shadow-xl border-l-4 border-cyan-500 mt-5">

                        <div class="flex justify-between">
                            <div>Arrange for additions </div>
                            <div class="">
                                <UCheckbox name="notifications" label="" />
                            </div>
                        </div>

                    </UCard>
                    <UCard class=" shadow-xl border-l-4 border-purple-500 mt-5">

                        <div class="flex justify-between">
                            <div class="">Read memo </div>
                            <div class="">
                                <UCheckbox name="notifications" label="" />
                            </div>
                        </div>

                    </UCard>
                </div>

            </div>
            <div class="">
                <h3><strong>Statistics</strong></h3>

                <div class="grid grid-cols-3  gap-5 mt-5">
                    <div class="">
                        <UCard class=" bg-slate-50">
                            <div class="text-teal-900 text-xl"><strong>28h</strong></div>
                            <div class=" text-gray-400 mt-10"> Tracked time</div>

                        </UCard>
                    </div>
                    <div class="">
                        <UCard class=" bg-slate-50">
                            <div class="text-teal-900 text-xl"><strong>6</strong></div>
                            <div class=" text-gray-400 mt-10"> Workers on call</div>
                        </UCard>
                    </div>
                    <div class="">
                        <UCard class=" bg-slate-50">
                            <div class="text-teal-900 text-xl"><strong>14</strong></div>
                            <div class=" text-gray-400 mt-10"> Subjects needs</div>
                        </UCard>
                    </div>
                </div>

                <div class="mt-5">
                    <UCard>

                        <div class="flex">
                            <div class=" text-5xl ">
                                34
                            </div>
                        </div>

                    </UCard>
                </div>

            </div>

        </div>
    </div>
</template>