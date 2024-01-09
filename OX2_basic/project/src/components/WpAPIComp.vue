<script setup>
import { ref, onMounted, watch } from 'vue';
import { useWpAPIStore } from '../stores/WpAPIStore';

const wpAPIStore = useWpAPIStore();

// Define constants for posts and categories
const posts = ref([]);
const categories = ref([]);
const authors = ref([]);
const selectedCategory = ref('');
const selectedAuthor = ref('');

watch (selectedCategory, () => {
  //console.log('Categories updated:', selectedCategory.value);
});

// Fetch posts and categories on component mount
onMounted(async () => {
  posts.value = await wpAPIStore.get('posts?per_page=100', {});
  // console.log('Posts:', posts.value);

  categories.value = await wpAPIStore.get('categories?per_page=100', {});
  // console.log('Categories:', categories.value);

  authors.value = await wpAPIStore.get('users?per_page=100', {});
  //console.log('Authors:', authors.value);

});


</script>


<template>
     <div>

<div class="row">
<div class="col-2 mx-auto">
<h5>Categories</h5>
<!-- <pre>{{ categories.data }}</pre> -->
<select v-model="selectedCategory">
  <option value="" selected>All</option>
  <option v-for="category in categories.data" :key="category.id" :value="category.id">
    {{ category.name }}
  </option>
</select>
</div>
<div class="col-2 mx-auto">
<h5>Authors</h5>
<select v-model="selectedAuthor">
  <option value="" selected>All</option>
  <option v-for="author in authors.data" :key="author.id" :value="author.id">
    {{ author.name }}
  </option>
</select>
</div>
</div>

<h2 class="text-center m-4">Posts</h2>
<div class="row container mx-auto">
  <!-- {{ posts.data }} -->
  <div class="w-50" v-for="post in posts.data" :key="post.id">
    <div v-if="selectedCategory === post.categories[0] || selectedCategory === ''"> <!--Temporary post.categories first category-->
      <div v-if="selectedAuthor === post.author || selectedAuthor === ''">
        <div class="border p-4" style="height: 300px">
        <h3>{{ post.title.rendered }}</h3>
        <p>Category: {{ categories.data.find(c => c.id === post.categories[0]).name }}</p> <!--Temporary post.categories first category-->
        <p>Post ID: {{ post.id }}</p>
        <p>Link: <a :href="post.link" target="_blank">{{ post.link }}</a></p>
        <p v-html="post.content.rendered"></p>
      </div>
        </div>
    </div>
  </div>
</div>
<!-- <pre>{{ posts.data }}</pre> -->


<div v-if="wpAPIStore.wpLoading">Loading...</div>
<div v-if="wpAPIStore.wpError">Error: {{ wpAPIStore.wpError.message }}</div>
</div>
</template>