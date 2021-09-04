<template>
    <div class="grid grid-cols-5 grid-rows-5
    justify-items-center gap-3 p-4
    bg-gradient-to-r from-yellow-100 to-yellow-300">
      <div v-for"tile in tiles">
        <game-tile></game-tile>
      </div>

    </div>
</template>
<script>
import {inject} from "vue";
import GameTile from "@/components/GameTile.vue";

export default {
    components: {
        GameTile,
    },
    setup() {

        return {

        }
    }
};
</script>