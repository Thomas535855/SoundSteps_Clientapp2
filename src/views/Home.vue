<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
 
});
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <h1 class="title">Admin Portal</h1>
      <p class="description">
        Welcome to the Admin Portal. Here, you can manage instruments for your application.
        To get started, navigate to create.
      </p>

    </div>
  </div>
</template>

<style>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75vh;
  background-color: #f8f9fa;
}

.container {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 40%;
  padding: 3%;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 2em;
  margin-bottom: 1em;
}

.description {
  font-size: 1em;
  margin-bottom: 2em;
  color: #6c757d;
}
</style>
