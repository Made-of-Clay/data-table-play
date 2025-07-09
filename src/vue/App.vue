<template>
  <div class="container">
    <h1>Vue Page</h1>
    <div class="content">
      <p>This is the Vue implementation using TypeScript.</p>
      <p>This page is served independently and doesn't load React or native JS assets.</p>
      <p>Testing edits from nvim</p>
    </div>
    <div class="back-link">
      <a href="/">← Back to Home</a>
    </div>
  </div>
</template>

<script setup lang="ts">
// Vue 3 Composition API with TypeScript
console.log('test')
</script>

<style scoped>
.container {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  margin-top: 2rem;
}

h1 {
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
}

.content {
  margin-bottom: 2rem;
}

.back-link {
  text-align: center;
}

.back-link a {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #4fc08d;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 500;
}

.back-link a:hover {
  background: #3a9068;
}
</style>
