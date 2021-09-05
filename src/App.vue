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
import { onBeforeMount, provide, reactive } from 'vue';
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
        const game_started = false;
        const game_creating = true;
        const createTiles = (tile_set, num) => {
          //take empty array, start from zero for first tile, once 25 tiles are made, return tile array
          if (num===25) return tile_set;
          tile_set.push(
            {
              'id': num + 1,
              'text': "Tile",
              'crash_site': false,
              'sand_count': 0,
            });
          return createTiles(tile_set, num+1);
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

          if(direction === 'left' && !([0,5,10,15,20].includes(vortex_position))){
            addSandToTile(tiles[vortex_position-1]);
            [tiles[vortex_position], tiles[vortex_position-1]] = [tiles[vortex_position-1], tiles[vortex_position]]
          }
          if(direction === 'right' && !([4,9,14,19,24].includes(vortex_position))){
            addSandToTile(tiles[vortex_position+1]);
            [tiles[vortex_position], tiles[vortex_position+1]] = [tiles[vortex_position+1], tiles[vortex_position]]
          }

          if(direction === 'up' && !([0,1,2,3,4].includes(vortex_position))){
            addSandToTile(tiles[vortex_position-5]);
            [tiles[vortex_position], tiles[vortex_position-5]] = [tiles[vortex_position-5], tiles[vortex_position]]
          }
          if(direction === 'down' && !([20,21,22,23,24].includes(vortex_position))){
            addSandToTile(tiles[vortex_position+5]);
            [tiles[vortex_position], tiles[vortex_position+5]] = [tiles[vortex_position+5], tiles[vortex_position]]
          }

        };
        provide('moveVortex', moveVortex);


        onBeforeMount(()=>{
          //initialize board properties
          tiles[createCrashSite()].crash_site = true;
          tiles[12].text = 'Vortex';
          //setup initial sand on board
          [2,6,8,10,14,16,18,22].forEach(tile_number=>addSandToTile(tiles[tile_number]));
        });
        return {
            game_creating, game_started, moveVortex, tiles,
        }
    }
};
</script>