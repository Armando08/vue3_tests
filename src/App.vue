<template>
    <div>
        <h1>Hello World..!</h1>
        <UserSelect :data="usersListData"/>
    </div>
</template>

<script setup lang="ts">
import ApiServices from './services/ApiService';
import UserSelect from './components/UserList.vue'
import { onMounted, reactive, ref } from 'vue';
import type {Ref} from 'vue'
import { User, ResponseStructure } from './services/ApiTypes';
// import { User } from './services/responseTypes';



let usersListData: Ref<Array<User>> = ref([])




onMounted(() => {
  
    ApiServices.getAllUsers().then( (response: ResponseStructure) => {
        usersListData.value = response.data
    })

})




    
  
</script>


<style scoped lang="sass">
h1{
    color: brown;
}
</style>