<script setup lang="ts">
const useUser = useUsersStore()

const showEdit = ref(false);

const props = defineProps({
    userId: {
        type: String,
        required: true,
    }
})

defineEmits(['emittedUserId', 'showEdit']);

const { data: user } = await useUser.fetchUser(props.userId);

</script>
<template>
    <div class="my-5">
        <UButton icon="i-heroicons-chevron-double-left-20-solid" color="purple" variant="soft"
            @click="$emit('emittedUserId', '')"> Back</UButton>
    </div>

    <!-- {{ user }} -->

    <div class="text-sm bg-white rounded-2xl shadow-xl p-5">
        <div>
            <div class="border-b pb-5">
                <div class="flex justify-between">
                    <div class="text-green-500"><strong>Account Details</strong></div>
                    <div class="text-sky-500 text-xl cursor-pointer italic" @click="$emit('showEdit',true)">
                        <UIcon name="i-heroicons-pencil-square" />edit
                    </div>
                </div>

            </div>
            <div class="grid grid-cols-2 pt-5">
                <div class=""><strong>First Name:</strong></div>
                <div class="">{{ user.firstname }} </div>
            </div>
            <div class="grid grid-cols-2 mt-5">
                <div class=""><strong>Last Name:</strong></div>
                <div class="">{{ user.lastname }}</div>
            </div>
            <div class="grid grid-cols-2 mt-5">
                <div class=""><strong>Gender:</strong></div>
                <div class="">{{ user.gender }}</div>
            </div>
            <div class="grid grid-cols-2 mt-5">
                <div class=""><strong>@email:</strong></div>
                <div class="">{{ user.email }}</div>
            </div>
            <div class="grid grid-cols-2 mt-5">
                <div class=""><strong>Date Joined:</strong></div>
                <div class="">{{ user.dateJoined }}</div>
            </div>
            <div class="grid grid-cols-2 mt-5">
                <div class=""><strong>Trekr Mobile App Access:</strong></div>
                <div class="">{{ user.mobileAcess }}</div>
            </div>

        </div>

    </div>

    <div class="text-sm bg-white rounded-2xl shadow-xl p-5 mt-5">
        <div class="border-b pb-5">
            <div class=""><strong><span class="italic text-orange-500">{{ user.firstname }}'s</span> Teams</strong></div>
        </div>

        <div class="flex pt-5" v-for="(team, i) in user.teams">
            <div class=""><strong>{{ i + 1 }}</strong>)</div>
            <div class="mx-1">{{ team.name }}</div>
        </div>
    </div>
</template>