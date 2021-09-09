<template>
    <div class="grid grid-cols-5 grid-rows-5
    justify-items-center gap-3 p-4
    bg-gradient-to-r from-yellow-100 to-yellow-300">
        <div v-for="tile in tiles" v-bind:key="tile.id">
            <game-tile v-bind:current_tile="(tile)" v-bind:current_player_index="current_player_index" v-bind:player_positions="player_positions" v-bind:tile_type="tile.text" v-bind:crash_site="tile.crash_site" v-bind:sand_count="tile.sand_count"></game-tile>
        </div>
    </div>
</template>
<script>
import { inject } from "vue";
import GameTile from "@/components/GameTile.vue";

export default {
    components: {
        GameTile,
    },
    setup() {
        const tiles = inject('tiles');
        const current_player_index = inject('current_player_index');
        const player_positions = inject('player_positions');
        return {
          current_player_index,
          player_positions,
          tiles,
        }
    }
};
</script>