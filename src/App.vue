<template>
    <header-component></header-component>
    <div v-if="game_creating">
        <game-set-up></game-set-up>
    </div>
    <div v-if="game_started" class="grid grid-cols-6 grid-rows-1">
        <side-window class="col-span-1"></side-window>
        <game-board class="col-span-5"></game-board>
    </div>
</template>
<script>
import { computed, onBeforeMount, provide, reactive, ref } from 'vue';
import GameBoard from "@/components/GameBoard.vue";
import GameSetUp from "@/components/GameSetUp.vue"
import HeaderComponent from "@/components/HeaderComponent.vue";
import SideWindow from "@/components/SideWindow.vue";

export default {
    components: {
        GameBoard,
        GameSetUp,
        HeaderComponent,
        SideWindow,
    },
    setup() {
        //////////////////
        // Game States
        //
        const game_creating = ref(true);
        const game_started = ref(false);
        const gameStart = () => {
            game_creating.value = false;
            game_started.value = true;
            current_player_index.value = 0;
        }
        provide('gameStart', gameStart);

        //////////////////
        // Logic for creating player data
        //
        const player_count = ref();
        provide('player_count', player_count);
        const setPlayerCount = (number) => {
            return player_count.value = number;
        }
        provide('setPlayerCount', setPlayerCount);
        const players = ref([]);
        provide('players', players);
        const createPlayers = (players_array, init_players_length, num, init_num = false) => {
            // players = empty players array
            // init_players_length = initial length of players array
            // num is number of players
            // init numb will be same as num from start of recursion
            if (!init_num) {
                init_num = num;
            }
            if (init_players_length > 0) {
                //if user presses same number of players again
                if (players_array.length === init_num) {
                    return
                }
                //if button pressed is bigger than players already is
                if (num >= players_array.length) {
                    players_array.push({
                        'id': (players_array[players_array.length - 1].id + 1),
                        'name': '',
                        'character': '',
                        'character_id': '',
                        'character_img': '',
                        'thirst': 0,
                    });
                    return createPlayers(players_array, init_players_length, num, init_num);
                }
                //if button pressed is smaller than players already is
                if (num <= players_array.length) {
                    return players_array.splice(num, players_array.length - num);
                }
                return
            }

            if (num === 0) return players_array;
            players_array.push({
                'id': (player_count.value - num + 1),
                'name': '',
                'character': '',
                'character_id': '',
                'thirst': 0,
            });
            return createPlayers(players_array, init_players_length, num - 1, init_num);
        };
        provide('createPlayers', createPlayers);
        const characters = ref([
            { 'id': 1, 'name': 'Gopher Frog', 'img': '/img/gopher_frog.png' },
            { 'id': 2, 'name': 'Gopher Tortoise', 'img': '/img/gopher_tortoise.png' },
            { 'id': 3, 'name': 'Sand Skink', 'img': '/img/sand_skink.jpeg' },
            { 'id': 4, 'name': 'Scrub Lizard', 'img': '/img/scrub_lizard.png' },
            { 'id': 5, 'name': 'Scrub Jay', 'img': '/img/scrub_jay.png' },

        ]);
        provide('characters', characters);
        const usableCharacters = computed(()=>{
            //filter character
            //filters character sheet by where the player character id is equal to character id
            
            return (characters.value.filter(character => {
              return !players.value.some(player => {
                return player.character_id === character.id;
              });
            }));

        });
        provide('usableCharacters', usableCharacters);

        //////////////////
        // Logic for current player
        //
        const current_player_index = ref('');
        provide('current_player_index', current_player_index);
        const nextPlayerTurn = () => {
          if(current_player_index.value === (players.value.length -1)) {
            return current_player_index.value = 0;
          } else {
            current_player_index.value = current_player_index.value + 1;
            return current_player_index.value;
          }
        }
        provide('nextPlayerTurn', nextPlayerTurn);
        //////////////////
        // Logic for game board 
        //
        const createTiles = (tile_set, num) => {
            //take empty array, start from zero for first tile, once 25 tiles are made, return tile array
            if (num === 25) return tile_set;
            tile_set.push({
                'id': num + 1,
                'text': "Tile",
                'crash_site': false,
                'sand_count': 0,
            });
            return createTiles(tile_set, num + 1);
        }
        const tiles = reactive(createTiles([], 0));
        provide('tiles', tiles);
        const createCrashSite = () => {
            //create a rand integer from 0 to 24
            let index = Math.floor(Math.random() * 25);
            if (index === 12) {
                return createCrashSite()
            } else {
                return index
            }
        }
        const addSandToTile = (tile) => {
            tile.sand_count = tile.sand_count + 1;
        }
        provide('addSandToTile', addSandToTile);
        const moveVortex = (direction) => {
            console.log(direction);

            let vortex_position = tiles.findIndex((tile) => {
                return tile.text === 'Vortex'
            });

            if (direction === 'left' && !([0, 5, 10, 15, 20].includes(vortex_position))) {
                addSandToTile(tiles[vortex_position - 1]);
                [tiles[vortex_position], tiles[vortex_position - 1]] = [tiles[vortex_position - 1], tiles[vortex_position]]
            }
            if (direction === 'right' && !([4, 9, 14, 19, 24].includes(vortex_position))) {
                addSandToTile(tiles[vortex_position + 1]);
                [tiles[vortex_position], tiles[vortex_position + 1]] = [tiles[vortex_position + 1], tiles[vortex_position]]
            }

            if (direction === 'up' && !([0, 1, 2, 3, 4].includes(vortex_position))) {
                addSandToTile(tiles[vortex_position - 5]);
                [tiles[vortex_position], tiles[vortex_position - 5]] = [tiles[vortex_position - 5], tiles[vortex_position]]
            }
            if (direction === 'down' && !([20, 21, 22, 23, 24].includes(vortex_position))) {
                addSandToTile(tiles[vortex_position + 5]);
                [tiles[vortex_position], tiles[vortex_position + 5]] = [tiles[vortex_position + 5], tiles[vortex_position]]
            }

        };
        provide('moveVortex', moveVortex);


        onBeforeMount(() => {
            //initialize board properties
            tiles[createCrashSite()].crash_site = true;
            tiles[12].text = 'Vortex';
            //setup initial sand on board
            [2, 6, 8, 10, 14, 16, 18, 22].forEach(tile_number => addSandToTile(tiles[tile_number]));
        });
        return {
            current_player_index,
            game_creating,
            game_started,
            gameStart,
            moveVortex,
            nextPlayerTurn,
            player_count,
            tiles,
        }
    }
};
</script>