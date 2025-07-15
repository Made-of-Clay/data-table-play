<template>
  <div class="container">
    <h1>Vue Page</h1>
    <div class="content">
      <DataTable
        :data="data"
        :columns="columns"
      ></DataTable>>
    </div>
    <div class="back-link">
      <a href="/">← Back to Home</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import data from '../avengers.json';
import DataTable from './DataTable.vue';
console.log(data);
const columns = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'aliases', label: 'Aliases', sortable: false },
  { key: 'origin_location', label: 'Home', sortable: true },
  { key: 'primary_power', label: 'Powers', sortable: false },
];
</script>

<style scoped>
.container {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 2rem;
}

h1 {
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
  text-shadow: 1px 1px 3px black;
  border-radius: 6px;
  font-weight: 500;
}

.back-link a:hover {
  background: #3a9068;
}
</style>
