<template>

    <div>
        <h4 class="mb-4">Posts</h4>
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 pb-3" v-for="post in postsList" :key="post.user_id">
                <div class="card product-card">
                    <div class="card-body">
                        <div class="details">
                        <h6 class="card-title">{{title(post.title)}}</h6>
                            <p class="card-text">{{description(post.body)}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    

</template>

<script setup lang="ts">
import {computed, ref} from 'vue'
import { Posts } from '../services/ApiTypes';

const props = defineProps({
    postsList: Array as () => Array<Posts>
})

function description(bodyText: Posts['body']) {
    if (!bodyText) return 'No Description !'
      if (bodyText.split('').length >= 70) {
        return `${bodyText
          .split(' ')
          .slice(0, 15)
          .join(' ')}...`
      }
      return bodyText
}

function title(title: Posts['title']) {
    if (!title) return 'No Title !'
      if (title.split('').length >= 70) {
        return `${title
          .split(' ')
          .slice(0, 5)
          .join(' ')}...`
    }
    return title   
}
  
   

</script>