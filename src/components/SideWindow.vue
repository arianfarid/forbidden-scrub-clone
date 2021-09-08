<template>
    <div class="grid justify-items-center
      font-sans font-semibold text-xl text-white tracking-wide
      bg-gradient-to-t bg-green-700 to-green-600
      p-2
    ">
        <h2>Side Nav</h2>
        <player-turn v-bind:current_player_data="current_player"></player-turn>
        <!-- Debug things -->
        <vortex-d-pad></vortex-d-pad>
    </div>
</template>
<script>
import { inject, ref, watch } from "vue";
import PlayerTurn from "../components/PlayerTurn.vue"
import VortexDPad from "../components/VortexDPad.vue";
export default {
    components: { PlayerTurn, VortexDPad },
    setup() {
        const players = inject('players');
        const current_player_index = inject('current_player_index');
        const current_player = ref(players.value[current_player_index.value]);
        const updateCurrentPlayer = () => {
            return current_player.value = players.value[current_player_index.value];
        }

        watch(current_player_index, async () => {
            updateCurrentPlayer();
        })
        return {
            current_player,
            PlayerTurn,
            updateCurrentPlayer,
            VortexDPad,
        }
    }
};
</script>