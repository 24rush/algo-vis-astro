<template>
    <h1 v-if="h1" :id=genSlug()>
        <slot></slot>
    </h1>
    <h2 v-if="h2" :id=genSlug()>
        <slot></slot>
    </h2>
    <h3 v-if="h3" :id=genSlug()>
        <slot></slot>
    </h3>
    <h4 v-if="h4" :id=genSlug()>
        <slot></slot>
    </h4>
    <h5 v-if="h5" :id=genSlug()>
        <slot></slot>
    </h5>
</template>

<script setup lang="ts">
import { useSlots } from 'vue'
const slots = useSlots()

const props = defineProps<{
    h1: boolean,
    h2: boolean,
    h3: boolean,
    h4: boolean,
    h5: boolean
}>();

const genSlug = () => {
    return "toc-" + slots.default()[0].props.value[0].replace(' ', '-').toLowerCase();
};

</script>

<style scoped>

</style>