<script setup lang="ts">
import { ref, toRefs, defineProps } from 'vue';
import ExerciseItem from './types/ExerciseItem';

const props = defineProps<{
  exercises: { type: ExerciseItem[], required: false, default: [] },
}>()

</script>

<template>
  <ul class="list-group">
    <div v-for="exercise in props.exercises">
      <li class="list-group-item">
        <div>
          <div class="">
            <h3 style="margin: 0px; margin-right: 4px;">ID</h3><input v-model="exercise.id">
          </div>

          <div>
            <h3>Description</h3>
            <textarea v-model="exercise.desc" class="textarea-lg"></textarea>
          </div>

          <div>
            <h3>Solution</h3>
            <textarea v-model="exercise.solution" class="textarea-lg"></textarea>
          </div>

          <div>
            <h3>Code</h3>
            <textarea v-model="exercise.code" class="textarea-lg"></textarea>
          </div>
        </div>
      </li>
    </div>
  </ul>
</template>

<style scoped>
.textarea-lg {
  height: 200px;
  width: 100%;
  resize: both;
}

.content h3 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

@media (min-width: 1024px) {}
</style>
