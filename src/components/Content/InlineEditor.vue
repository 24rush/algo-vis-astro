<template>
    <button type="button" class="btn btn-overrides btn-light av-btn-sm inline-editor-btn" style="display: none;" data-bs-toggle="collapse"
        :data-bs-target="'#collapseExample-'+editorId" aria-expanded="false" :aria-controls="'collapseExample-'+editorId">
        <i class="bi bi-hammer"></i>
    </button>

    <div class="collapse show" :id="'collapseExample-' + editorId">
        <div class="algovis" :av-exercise='props.exercise'></div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    exercise: string,
}>();

const randId = () => {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').slice(2, 10);
};

let editorId = randId();

</script>

<style scoped>
.inline-editor-btn {
    height: 30px;
    width: 30px;
    margin-left: 0.5em;
    vertical-align: unset;
    padding-left: 7px;
    padding-top: 4px;
}
</style>