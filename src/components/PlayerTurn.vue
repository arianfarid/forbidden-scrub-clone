<template>
    <div class="rounded-full h-24 w-24 bg-gray-300">
        <img class="rounded-full h-24 w-24 ring-gray-200 ring-1" v-if="current_player_data.character_img" :src="current_player_data.character_img">
    </div>
    <div class="text-xs">
        {{ current_player_data.name }}
    </div>
    <!-- Debug button -->
    <button @click="nextPlayerTurn">Next Player</button>
</template>
<script>
import { inject } from "vue";
export default {
    components: {},
    props: {
        current_player_data: Object,
    },
    setup() {
        const nextPlayerTurn = inject('nextPlayerTurn');
        return {
            nextPlayerTurn,
        }
    }
};
</script>