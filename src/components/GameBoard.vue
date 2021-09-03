<template>
    <div class="grid grid-cols-5 grid-rows-5
    justify-items-center gap-4 p-4
    bg-gradient-to-r from-yellow-100 to-yellow-300">
        <game-tile></game-tile>
        <game-tile></game-tile>
        <game-tile></game-tile>
        <game-tile></game-tile>
        <game-tile></game-tile>
        <game-tile></game-tile>
        <game-tile></game-tile>
        <game-tile></game-tile>
        <game-tile></game-tile>
        <game-tile></game-tile>
        <game-tile></game-tile>
        <game-tile></game-tile>
        <game-tile></game-tile>
        <game-tile></game-tile>
        <game-tile></game-tile>
        <game-tile></game-tile>
        <game-tile></game-tile>
        <game-tile></game-tile>
        <game-tile></game-tile>
        <game-tile></game-tile>
        <game-tile></game-tile>
        <game-tile></game-tile>
        <game-tile></game-tile>
        <game-tile></game-tile>
        <game-tile></game-tile>
    </div>
</template>
<script>
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