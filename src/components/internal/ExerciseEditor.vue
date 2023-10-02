<script setup lang="ts">
import { ref } from 'vue';

import ExerciseEditorItemView from './ExerciseEditorItemsView.vue'
import ExerciseItem from './types/ExerciseItem'

let exercises = ref<ExerciseItem[]>([]);
let fileSave = undefined;

async function save() {
  if (!fileSave)
    //@ts-ignore
    fileSave = await window.showSaveFilePicker();

  const writableStream = await fileSave.createWritable();

  await writableStream.write(JSON.stringify({ 'ro': exercises.value }, null, 2));

  await writableStream.close();
}

async function saveAs() {
  fileSave = undefined;
  save();
}

function handleFileChange(event) {
  let file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result.toString());
        exercises.value = data['ro'];
        console.log(exercises.value);
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    };

    reader.readAsText(file);
  }
}

</script>

<template>
  <header>
  </header>

  <input type="file" @change="handleFileChange" class="btn btn-secondary">

  <button @click="save" class="btn btn-primary mx-2">
    Save
  </button>

  <button @click="saveAs" class="btn btn-primary mx-1">
    Save As
  </button>

  <div class="wrapper">
    <ExerciseEditorItemView v-bind:exercises="exercises" />
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {}
</style>
