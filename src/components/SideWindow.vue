<template>
    <div class="grid justify-items-center
      font-sans font-semibold text-xl text-white tracking-wide
      bg-gradient-to-t bg-green-700 to-green-600
      p-2
    ">
        <h2>Side Nav</h2>
        <vortex-d-pad></vortex-d-pad>
    </div>
</template>
<script>
// import { inject } from "vue";
import VortexDPad from "../components/VortexDPad.vue";
export default {
    components: { VortexDPad },
    setup() {
        return {
            VortexDPad
        }
    }
};
</script>