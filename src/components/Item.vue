<template>
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 pb-3">
        <div class="card product-card">
            <div class="card-body">
                <p class="card-text">{{todo.title}}</p>
                <div class="card-text">
                    <div class="footer">
                        <span class="badge status" :class="{
                            'bg-success': todo.status === 'completed' , 
                            'bg-warning': todo.status === 'pending'}">
                            {{todo.status}}
                        </span>
                        <div class="date-time-wrapper">
                            <span class="date">{{new Date(todo.due_on).toLocaleDateString() }}</span>
                            <span class="time">{{new Date(todo.due_on).toLocaleTimeString()}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Todos } from "../services/ApiTypes";

defineProps({
    todo: Object as () => Todos
})
</script>
