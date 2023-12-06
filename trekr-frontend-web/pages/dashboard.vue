<script setup lang="ts">
const user = useUser().profile;
const emitFromMonitoring = ref({});

const emittedValue = ref('dashboard');

</script>
<template>
    <section class="py-1 bg-blueGray-50">
        <div class="my-10">
            <div class="grid grid-cols-6 gap-0 ">
                <!--left panel-->
                <div class="border-r-2 border-gray-400 items-center text-center">
                    <SideMenu @showPanel="emittedValue = $event" :user="user" :activePanel="emittedValue" />
                </div>
                <!--end left panel-->
                <!--middle panel-->
                <div class="col-span-4 mx-4 bg-slate-50 p-5">
                    <div v-if="emittedValue == 'dashboard'">
                        <DashPanel :user="user" />
                    </div>
                    <div v-else-if="emittedValue == 'teams'">
                        <TeamsTeamPanel />
                    </div>
                    <div v-else-if="emittedValue == 'users'">
                        <UsersUserPanel />
                    </div>
                    <div v-else-if="emittedValue == 'tasks'">
                        <TasksTaskPanel :user="user"/>
                    </div>
                    <div v-else-if="emittedValue == 'monitoring'">
                        <MonitoringPanel  @teamId="emitFromMonitoring = $event"    :teamId="emitFromMonitoring"    />
                    </div>
                </div>
                <!--end middle panel-->
                <!--right panel-->
                <div class=" bg-orange-50">
                    <LiveActivities />
                </div>
            </div>
        </div>
    </section>
</template>
  
  