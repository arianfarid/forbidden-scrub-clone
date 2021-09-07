<template>
    <div class="bg-gray-50">
        <div class="flex flex-row text-lg m-2">
            <label>Number of players:</label>
            <div class="flex cursor-pointer">
                <div class="flex flex-row bg-gray-200 rounded-full ml-2 px-2 ring-gray-500 hover:ring-1 hover:ring-gray-400">
                    <div @click="setPlayerCount(2), createPlayers(players, players.length, player_count)" class="px-3 hover:bg-gray-300 border-r border-gray-500">2</div>
                    <div @click="setPlayerCount(3), createPlayers(players, players.length, player_count)" class="px-3 hover:bg-gray-300 border-r border-gray-500">3</div>
                    <div @click="setPlayerCount(4), createPlayers(players, players.length, player_count)" class="px-3 hover:bg-gray-300 border-r border-gray-500">4</div>
                    <div @click="setPlayerCount(5), createPlayers(players, players.length, player_count)" class="px-3 hover:bg-gray-300">5</div>
                </div>
            </div>
            <div>
                <button v-if="game_ready" class="inline-block px-4 py-2 leading-none border rounded text-purple-600 border-purple-600 hover:border-purple-300 hover:text-purple-600 hover:bg-white mt-4 lg:mt-0"
                @click="gameStart()">
                    Start Game
                </button>
            </div>
        </div>
        <div class="flex flex-wrap">
            <div v-for="player in players" v-bind:key="player.id">
                <game-player-card v-bind:player_data="player" @player-name-change="updatePlayerName($event)" @player-character-change="updatePlayerCharacter($event)"></game-player-card>
            </div>
            {{ players }}
        </div>
    </div>
</template>
<script>
import { inject, ref, watch } from 'vue';
import GamePlayerCard from '@/components/GamePlayerCard.vue';
export default {
    components: {
        GamePlayerCard
    },
    props: {

    },
    setup() {
        //////////////////
        // Player data variables 
        // and functions
        //
        const player_count = inject('player_count');
        const setPlayerCount = inject('setPlayerCount');
        const createPlayers = inject('createPlayers');
        const players = inject('players');
        const updatePlayerName = (event) => {
            players.value[event.id - 1].name = event.name;
        }
        const updatePlayerCharacter = (event) => {
            players.value[event.id - 1].character = event.character;
            players.value[event.id - 1].character_id = event.character_id;
        }

        //////////////////
        // Game state
        //
        const game_ready = ref(false);
        const checkGameReady = () => {
            if (players.value.some(element => element.character === '') || players.value.some(element => element.name === '')) {
                return game_ready.value = false;
            } else {
                return game_ready.value = true;
            }
        }
        const gameStart = inject('gameStart');
        //////////////////
        // update game state when any player 
        // data has been updated
        //
        watch(players.value, async () => {
            checkGameReady();
        });
        return {
            checkGameReady,
            createPlayers,
            gameStart,
            game_ready,
            player_count,
            players,
            setPlayerCount,
            updatePlayerCharacter,
            updatePlayerName
        }
    }
};
</script>