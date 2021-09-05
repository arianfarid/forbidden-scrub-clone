<template>
    <div class="grid grid-cols-3 grid-rows-3 text-sm">
        <button class="flex-initial h-9 p-0 col-start-2 bg-red-500 hover:ring-1 hover:ring-white rounded-t-lg" @click="moveVortex('up')">Up</button>
        <button class="flex-initial h-9 p-0 col-start-1 bg-red-500 hover:ring-1 hover:ring-white rounded-l-lg" @click="moveVortex('left')">Left</button>
        <button class="flex-initial h-9 p-0 col-start-3 bg-red-500 hover:ring-1 hover:ring-white rounded-r-lg" @click="moveVortex('right')">Right</button>
        <button class="flex-initial h-9 p-0 col-start-2 bg-red-500 hover:ring-1 hover:ring-white rounded-b-lg" @click="moveVortex('down')">Down</button>
    </div>
</template>
<script>
import { inject } from "vue";
export default {
    components: {},
    setup() {
        const moveVortex = inject('moveVortex');
        return {
            moveVortex
        }
    }
};
</script>