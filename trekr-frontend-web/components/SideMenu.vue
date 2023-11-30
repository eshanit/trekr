<script setup lang="ts">
const props = defineProps({
    user: {
        type: Object,
        required: true
    },
    activePanel: {
        type: String,
        required: true
    }
})

defineEmits(['showPanel'])

</script>
<template>
    <UContainer>
        <div><strong>Chaart</strong></div>
        <div class="mx-5">
            <NuxtImg src="/images/avatar1.jpg" sizes="100vw sm:50vw md:200px" />
        </div>
        <div><strong>{{ user.firstname }} {{ user.lastname }}</strong></div>
        <div class="text-gray-300"> {{ user.email }}</div>
        <div class="my-10 mx-5">
            <div @click="$emit('showPanel', 'dashboard')" class="cursor-pointer hover:text-lg hover:text-cyan-500">
                <div class="flex text-orange-500" v-if="activePanel == 'dashboard'">
                    <div>
                        <UIcon name="i-heroicons-home-solid" />
                    </div>
                    <div class="mx-5"><strong>Dashboard</strong></div>
                </div>
                <div class="flex" v-else>
                    <div>
                        <UIcon name="i-heroicons-home" />
                    </div>
                    <div class="mx-5">Dashboard</div>
                </div>
            </div>
            <div @click="$emit('showPanel', 'analytics')" class="cursor-pointer hover:text-lg hover:text-cyan-500 my-5">
                <div class="flex text-orange-500" v-if="activePanel == 'analytics'">
                    <div>
                        <UIcon name="i-heroicons-chart-pie-solid" />
                    </div>
                    <div class="mx-5"><strong>Analytics</strong></div>
                </div>
                <div class="flex" v-else>
                    <div>
                        <UIcon name="i-heroicons-chart-pie" />
                    </div>
                    <div class="mx-5">Analytics</div>
                </div>
            </div>
            <div @click="$emit('showPanel', 'tasks')" class="cursor-pointer hover:text-lg hover:text-cyan-500 my-5">
                <div class="flex text-orange-500" v-if="activePanel == 'tasks'">
                    <div>
                        <UIcon name="i-heroicons-list-bullet-solid" />
                    </div>
                    <div class="mx-5"><strong>Task List</strong></div>
                </div>
                <div class="flex" v-else>
                    <div>
                        <UIcon name="i-heroicons-list-bullet" />
                    </div>
                    <div class="mx-5">Task List</div>
                </div>
            </div>
            <div @click="$emit('showPanel', 'monitoring')" class="cursor-pointer hover:text-lg hover:text-cyan-500 my-5">
                <div class="flex text-orange-500" v-if="activePanel == 'monitoring'">
                    <div>
                        <UIcon name="i-heroicons-clock-solid" />
                    </div>
                    <div class="mx-5"><strong>Monitoring</strong></div>
                </div>
                <div class="flex" v-else>
                    <div>
                        <UIcon name="i-heroicons-clock" />
                    </div>
                    <div class="mx-5">Monitoring</div>
                </div>
            </div>
            <!-- <div @click="$emit('showPanel', 'teams')" class="cursor-pointer hover:text-lg hover:text-cyan-500 my-5">
                <div class="flex" v-if="activePanel == 'teams'">
                    <div>
                        <UIcon name="i-heroicons-users-solid" />
                    </div>
                    <div class="mx-5"><strong>Teams</strong></div>
                </div>
                <div class="flex" v-else>
                    <div>
                        <UIcon name="i-heroicons-users" />
                    </div>
                    <div class="mx-5">Teams</div>
                </div>
            </div> -->
            <div @click="$emit('showPanel', 'users')" class="cursor-pointer hover:text-lg hover:text-cyan-500 my-5">
                <div class="flex text-orange-500" v-if="activePanel == 'users'">
                    <div>
                        <UIcon name="i-heroicons-users-solid" />
                    </div>
                    <div class="mx-5 "><strong>Users</strong></div>
                </div>
                <div class="flex" v-else>
                    <div>
                        <UIcon name="i-heroicons-users" />
                    </div>
                    <div class="mx-5">Users</div>
                </div>
            </div>
            <div @click="$emit('showPanel', 'settings')" class="cursor-pointer hover:text-lg hover:text-cyan-500 my-5">
                <div class="flex text-orange-500" v-if="activePanel == 'settings'">
                    <div>
                        <UIcon name="i-heroicons-cog-6-tooth-solid" />
                    </div>
                    <div class="mx-5"><strong>Settings</strong></div>
                </div>
                <div class="flex" v-else>
                    <div>
                        <UIcon name="i-heroicons-cog-6-tooth" />
                    </div>
                    <div class="mx-5">Settings</div>
                </div>
            </div>
        </div>
    </UContainer>
</template>