<template>
    <div v-if=props.attention class="attention-box">
        <div class="box-pill attention-pill">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
        </div>
        <slot></slot>
    </div>

    <div v-if=props.knowledge class="knowledge-box">
        <div class="box-pill know-pill">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
        </div>
        <slot></slot>
    </div>

    <div v-if=props.info class="info-box">
        <div class="box-pill tip-pill">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
        </div>
        <slot></slot>
    </div>
</template>
  
<script setup lang="ts">

const props = defineProps<{
    attention: boolean;
    knowledge: boolean;
    info: boolean;
}>();

</script>
  
<style>
.attention-box {
    position: relative;
    background: #ffdd0012;
    --box-content-color: #ff9d00;
    border-color: var(--box-content-color) !important;
    padding: 10px 20px;
    margin: 2rem 0rem 1rem 0rem;
    border-left: 5px solid;
}

.knowledge-box {
    position: relative;
    background: #00cc880f;
    --box-content-color:#00cc88;
    border-color: var(--box-content-color) !important;
    padding: 10px 20px;
    margin: 2rem 0rem 1rem 0rem;
    border-left: 5px solid;
}

.info-box {
    position: relative;
    background: #eaf8ffa3;
    --box-content-color: #1eb4ff;
    border-color: var(--box-content-color) !important;
    padding: 10px 20px;
    margin: 2rem 0rem 1rem 0rem;
    border-left: 5px solid;
}
</style>
  