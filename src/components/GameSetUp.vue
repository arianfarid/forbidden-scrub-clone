<template>
    <div class="flex text-lg m-2">
        <label>Number of players:</label>
        <div class="flex cursor-pointer">
            <div class="flex flex-row bg-gray-200 rounded-full ml-2 px-2 ring-gray-500 hover:ring-1 hover:ring-gray-400">
                <div @click="setPlayerCount(2), createPlayers(players, players.length, player_count)" class="px-1 hover:bg-gray-300 border-r border-gray-500">2</div>
                <div @click="setPlayerCount(3), createPlayers(players, players.length, player_count)" class="px-1 hover:bg-gray-300 border-r border-gray-500">3</div>
                <div @click="setPlayerCount(4), createPlayers(players, players.length, player_count)" class="px-1 hover:bg-gray-300 border-r border-gray-500">4</div>
                <div @click="setPlayerCount(5), createPlayers(players, players.length, player_count)" class="px-1 hover:bg-gray-300">5</div>
            </div>
        </div>
    </div>
    <div class="flex flex-wrap">
        <div v-for="player in players" v-bind:key="player.id">
            <game-player-card v-bind:player_data="player"></game-player-card>
        </div>
    </div>
</template>
<script>
import { inject } from 'vue';
import GamePlayerCard from '@/components/GamePlayerCard.vue';
export default {
    components: {
        GamePlayerCard
    },
    props: {

    },
    setup() {
        const player_count = inject('player_count');
        const setPlayerCount = inject('setPlayerCount');
        const createPlayers = inject('createPlayers');
        const players = inject('players');
        return {
            createPlayers,
            player_count,
            players,
            setPlayerCount
        }
    }
};
</script>