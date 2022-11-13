<template>
  <div class="select-width">
    <select class="form-select form-select-sm mb-3 w-100" aria-label=".form-select-lg" v-model="selectedUser" @change="selectedId(selectedUser)" >
        <option disabled default selected value="">Select user to filter</option>
        <option v-for="user in userList" :key="user.id" :value="user.id" >{{user.name}}</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { User } from '../services/ApiTypes';
import { Ref, ref } from 'vue';

const selectedUser: Ref<string> = ref('')
  const emit = defineEmits(['selectedId'])

defineProps({
  userList: Array as () => Array<User>
})

function selectedId(id: User['id'])  {
  emit('selectedId',id)
}

</script>
<style scoped>
  .select-width {
    width: 250px;
  }
</style>