<script setup>
import { RouterView, RouterLink } from 'vue-router';
import WpAPIComp from './components/WpAPIComp.vue';
import {useSwAPIStore} from './stores/SwAPIStore.js';

import { ref, onMounted } from 'vue';
const swAPIStore = useSwAPIStore();
const info = ref([]);

onMounted(async() => {
  info.value = await swAPIStore.get('info/user');
  console.log(info.value);
})

</script>

<template>
    <nav>
      <RouterLink to="/">Link1</RouterLink>
    </nav>

    <RouterView />
    <WpAPIComp/>

</template>

<style lang="scss"></style>
