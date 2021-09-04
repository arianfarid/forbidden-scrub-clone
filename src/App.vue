<template>
    <header-component></header-component>
    <div class="grid grid-cols-6 grid-rows-1">
        <side-window class="col-span-1"></side-window>
        <game-board class="col-span-5"></game-board>
    </div>
</template>
<script>
import { provide, reactive } from 'vue';
import GameBoard from "@/components/GameBoard.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import SideWindow from "@/components/SideWindow.vue";

export default {
    components: {
        GameBoard,
        HeaderComponent,
        SideWindow,
    },
    setup() {
        const tiles = reactive([{
                'text': 'Tile',
                'id': 1
            },
            {
                'text': 'Tile',
                'id': 2
            },
            {
                'text': 'Tile',
                'id': 3
            },
            {
                'text': 'Tile',
                'id': 4
            },
            {
                'text': 'Tile',
                'id': 5
            },
            {
                'text': 'Tile',
                'id': 6
            },
            {
                'text': 'Tile',
                'id': 7
            },
            {
                'text': 'Tile',
                'id': 8
            },
            {
                'text': 'Tile',
                'id': 9
            },
            {
                'text': 'Tile',
                'id': 10
            },
            {
                'text': 'Tile',
                'id': 11
            },
            {
                'text': 'Tile',
                'id': 12
            },
            {
                'text': 'Vortex',
                'id': 13
            },
            {
                'text': 'Tile',
                'id': 14
            },
            {
                'text': 'Tile',
                'id': 15
            },
            {
                'text': 'Tile',
                'id': 16
            },
            {
                'text': 'Tile',
                'id': 17
            },
            {
                'text': 'Tile',
                'id': 18
            },
            {
                'text': 'Tile',
                'id': 19
            },
            {
                'text': 'Tile',
                'id': 20
            },
            {
                'text': 'Tile',
                'id': 21
            },
            {
                'text': 'Tile',
                'id': 22
            },
            {
                'text': 'Tile',
                'id': 23
            },
            {
                'text': 'Tile',
                'id': 24
            },
            {
                'text': 'Tile',
                'id': 25
            },
        ]);
        provide('tiles', tiles);

        const moveVortex = (direction) => {
          console.log(direction);
          let vortex_position = tiles.findIndex((tile) => {
            return tile.text === 'Vortex'
          });
          if(direction === 'left' && !([0,5,10,15,20].includes(vortex_position))){
            [tiles[vortex_position], tiles[vortex_position-1]] = [tiles[vortex_position-1], tiles[vortex_position]]
          }
          if(direction === 'right' && !([4,9,14,19,24].includes(vortex_position))){
            [tiles[vortex_position], tiles[vortex_position+1]] = [tiles[vortex_position+1], tiles[vortex_position]]
          }

          if(direction === 'up' && !([0,1,2,3,4].includes(vortex_position))){
            [tiles[vortex_position], tiles[vortex_position-5]] = [tiles[vortex_position-5], tiles[vortex_position]]
          }
          if(direction === 'down' && !([20,21,22,23,24].includes(vortex_position))){
            [tiles[vortex_position], tiles[vortex_position+5]] = [tiles[vortex_position+5], tiles[vortex_position]]
          }

        };

        provide('moveVortex', moveVortex);
        return {
            tiles, moveVortex,
        }
    }
};
</script>