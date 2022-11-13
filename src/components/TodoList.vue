<template>

        <div class="container-fluid mt-5">

        <UserListSelect :userList="props.userList" @selectedId="selectedId($event)"/>

        <h4 class="mb-4">Todos</h4>
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 pb-3" v-for="list in filteredTodos" :key="list.user_id">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{{list.title}}</h5>
                        <p class="card-text">{{list.body}}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import {Ref, ref} from 'vue'
import { Posts, User } from '../services/ApiTypes'
import UserListSelect from '../components/UserList.vue'
// import { User } from '../services/ApiTypes'

const selectedUser: Ref<string> = ref('')
let filteredTodos: Ref<Array<Posts>> = ref([])

const props = defineProps({
    userList: Array as () => Array<User>,
    todoList: Array as () => Array<Posts>
})

 

function selectedId(id: number)  {
     filteredTodos.value = props.todoList.filter((item => item.user_id === id))
}

</script>