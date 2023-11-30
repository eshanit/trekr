<script setup lang="ts">
const showAddUserForm = ref(false)
const showUsersList = ref(false)
const showBeforeCreateForm = ref(true)


</script>
<template>
  <div><strong>Users Settings</strong></div>
  <div v-if="showAddUserForm == false || showUsersList == true">
    <UsersCardsMainUserCard  @add-user="showAddUserForm = $event" />
  </div>
  <div v-else-if="showAddUserForm">
    <div v-if="showBeforeCreateForm">
      <UsersCardsBeforeCreateUserForm @add-user="showBeforeCreateForm = $event"
        @show-add-user-form="showAddUserForm = $event" />
    </div>
    <div v-else>
      <UsersFormsCreateUser @show-add-user-form="showBeforeCreateForm = $event"
        @show-users-list="showUsersList == $event" />
    </div>

  </div>
</template>