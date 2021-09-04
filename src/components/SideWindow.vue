<template>
    <div class="grid justify-items-center
      font-sans font-semibold text-xl text-white tracking-wide
      bg-gradient-to-t bg-green-700 to-green-600
      p-2
	">
        <h2>Side Nav</h2>

        <div class="flex grid grid-cols-3 grid-rows-3 text-sm">
            <button class="flex-initial col-start-2 bg-red-500 rounded-t-lg" @click="moveVortex('up')">Up</button>
            <button class="flex-initial col-start-1 bg-red-500 rounded-l-lg" @click="moveVortex('left')">Left</button>
            <button class="flex-initial col-start-3 bg-red-500 rounded-r-lg" @click="moveVortex('right')">Right</button>
            <button class="flex-initial col-start-2 bg-red-500 rounded-b-lg" @click="moveVortex('down')">Down</button>
        </div>
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