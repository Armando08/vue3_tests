<template>

    <div class="mt-5 container">
        <PostsList :postsList="postsList"/>
        <TodosList :userList="userList" :postsList="postsList"/>
    </div>
</template>
<script setup lang="ts">
import ApiServices from '../services/ApiService';
// import UserSelect from '../components/UserList.vue'
import PostsList from '../components/PostsList.vue'
import TodosList from '../components/TodoList.vue'
import { onMounted, reactive, ref } from 'vue';
import type {Ref} from 'vue'
import { User, ResponseStructure, Todos, Posts } from '../services/ApiTypes';
import ApiService from '../services/ApiService';

let userList: Ref<Array<User>> = ref([])
let postsList: Ref<Array<Posts>> = ref([])
let todosList: Ref<Array<Todos>> = ref([])



onMounted(() => {

    Promise.all([ApiServices.getAllUsers(),ApiServices.getAllPosts(), ApiService.getAllTodos()]).then( (results: Array<any>) => {
         userList.value = results[0].data
         postsList.value = results[1].data
         todosList.value = results[2].data
    }).catch(err => {
        console.error(err.message)
    })

    
    
})

</script>