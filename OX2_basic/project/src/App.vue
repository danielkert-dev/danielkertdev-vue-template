<script setup>
import { RouterView, RouterLink } from 'vue-router';
import WpAPIComp from './components/WpAPIComp.vue';

</script>

<template>
    <nav>
      <RouterLink to="/">Link1</RouterLink>
    </nav>

    <RouterView />
    <WpAPIComp />

</template>

<style lang="scss"></style>
