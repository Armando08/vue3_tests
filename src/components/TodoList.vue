<template>

        <div class="mt-5">
        <UserListSelect :userList="props.userList" @selectedId="selectedId($event)"/>

        <h4 class="mb-4">Todos</h4>
        <div class="text-center m-5" v-if="prefillsID === 0"><h2>Filter to show todos</h2></div>
        <div v-else-if="filteredTodos.length > 0" class="row">
            <Item  v-for="todo in filteredTodos" :key="todo.user_id" :todo="todo" />
            <!-- <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 pb-3" v-for="list in filteredTodos" :key="list.user_id">
                <div class="card product-card">
                    <div class="card-body">
                        <p class="card-text">{{list.title}}</p>
                        <div class="card-text">
                            <div class="footer">
                                <span class="badge status" :class="{
                                    'bg-success': list.status === 'completed' , 
                                    'bg-warning': list.status === 'pending'}">
                                    {{list.status}}
                                </span>
                                <div class="date-time-wrapper">
                                    <span class="date">{{new Date(list.due_on).toLocaleDateString() }}</span>
                                    <span class="time">{{new Date(list.due_on).toLocaleTimeString()}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
        <div v-else class="text-center m-5">
            <h2>This user do not have todos</h2>
        </div>
    </div>

</template>

<script setup lang="ts">
import {onMounted, Ref, ref} from 'vue'
import { Todos, User } from '../services/ApiTypes'
import UserListSelect from '../components/UserList.vue'
import Item from '../components/Item.vue'
// import { User } from '../services/ApiTypes'

const selectedUser: Ref<string> = ref('')
let filteredTodos: Ref<Array<Todos>> = ref([])
    let prefillsID: Ref<Todos['user_id']> = ref(0)

const props = defineProps({
    userList: Array as () => Array<User>,
    todoList: Array as () => Array<Todos>
})
 

function selectedId(id: User['id'])  {
    prefillsID.value = id
    filteredTodos.value = props.todoList.filter((item => item.user_id === id))
}

</script>