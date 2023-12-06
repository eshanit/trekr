<script setup lang="ts">
import {
    IonPage,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonContent
} from '@ionic/vue';

const userStore = useUsersStore();

const { data: residents } = await userStore.fetchTeamUsers('PSW')

const columns = [
    {
        key: 'firstname',
        label: 'First Name',
    },
    {
        key: 'lastname',
        label: 'Last Name',
    },
    {
        key: 'gender',
        label: 'Gender',
    },
    {
        key: 'actions',
        label: 'View'
    }
]

//
const q = ref('')
const page = ref(1)
const pageCount = 5

const getRows = (data: any) => {
    return data.filter((user: any) => {
        return Object.values(user).some((value) => {
            return String(value).toLowerCase().includes(q.value.toLowerCase())
        });
    }).slice((page.value - 1) * pageCount, (page.value) * pageCount)
}

const items = (row: { id: any; }) => [
    [
        {
            label: 'Edit',
            icon: 'i-heroicons-pencil-square-20-solid',
            click: () => console.log('Edit', row.id)
        }
    ]
]

</script>
<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <IonTitle>Dashboard</IonTitle>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">

            <div class="grid grid-cols-2 gap-5 text-sm text-center">
                <nuxt-link to="todos/all">
                    <div class="bg-white rounded-xl shadow-xl p-5">
                        <div class="text-orange-500"><strong>View all tasks</strong></div>
                    </div>
                </nuxt-link>
                <nuxt-link to="todos/today">
                    <div class="bg-white rounded-xl shadow-xl p-5">
                        <div class="text-cyan-500"><strong>View today's tasks</strong></div>
                    </div>
                </nuxt-link>
            </div>
            <div class="pt-5 pb-5">
                <SharedTwCard>
                    <template #header>
                        <div class="text-sm text-purple-500">
                            <strong>Record Resident info:</strong>
                        </div>
                    </template>
                    <template #body>
                        <div class="flex pt-3 px-3 pb-3.5 border-b border-gray-200 dark:border-gray-700">
                            <UInput v-model="q" placeholder="Filter users..." />
                        </div>
                        <UTable :columns="columns" :rows="getRows(residents)">
                            <template #actions-data="{ row }">
                                <!--<NuxtLink :to="{ name: 'mentees-id', params: { id: row._id } }"> -->
                                <UButton @click="$emit('showUserInformation', {
                                    id: row._id,
                                })" :items="items(row)" size="sm" color="green" square variant="soft">
                                    record
                                </UButton>

                                <!-- </NuxtLink> -->

                            </template>
                        </UTable>
                    </template>
                </SharedTwCard>


            </div>



        </ion-content>
    </ion-page>
</template>
<style>
ion-content {
    --ion-background-color: #eeeeee;
}
</style>