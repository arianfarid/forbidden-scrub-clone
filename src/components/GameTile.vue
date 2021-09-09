<template>

    <div @click="advancePlayer()" 
    v-if="!is_vortex" 
    :class="sandVizualize()"
    class="grid justify-items-center 
    hover:ring-1 hover:ring-purple-600
    text-sm

    p-7 rounded-md shadow-md"
    >
    <!-- old tile bg     bg-gradient-to-t from-yellow-500 via-yellow-500 to-blue-300 -->
        <div>
            <div v-if="sand_count > 0" class="filter sepia flex flex-grow"></div>
            <p v-if="!crash_site && !is_vortex">
                {{tile_type}} 
            </p>
            <div v-if="crash_site">
                Start
            </div>
            <div>
                <div v-for="(position, index) in player_positions" v-bind:key="position" >
                    <img v-if="position === current_tile.index" 
                    class="rounded-full h-7 w-7 ring-gray-200 bg-gray-300 ring-1 m-1" 
                    :class="currentPlayerClass(index)"
                    :src="players[index].character_img" />
                </div>
            </div>
            <br>
        </div>
    </div>

    <div v-if="is_vortex" class="grid justify-items-center 
    text-sm
    bg-opacity-0 
    p-7 rounded-md ">
        <div>
            <p>
                ~VORTEX~
            </p>
        </div>
    </div>
</template>
<script>
import { inject } from 'vue';
export default {
    components: {},
    props: {
        current_tile: Object,
        tile_type: String,
        crash_site: Boolean,
        sand_count: Number,
        current_player_index: Number,
        player_positions: Array,
    },
    setup(props) {
        const is_vortex = (props.tile_type === 'Vortex');
        const advancePlayer = inject('advancePlayer');
        const players = inject('players');
        const currentPlayerClass = (index) => {
            if(props.current_player_index===index){
                return 'ring-red-400 ring-2'
            }
            return ''
        };
        const sandVizualize = () => {
            if(props.sand_count === 1) {
                return 'backdrop-filter backdrop-sepia-25'
            } else if (props.sand_count > 1) {
                return 'backdrop-filter backdrop-sepia-75'
            }
            return 'backdrop-filter backdrop-grayscale backdrop-opacity-40'
        }
        return {
            advancePlayer,
            currentPlayerClass,
            sandVizualize,
            is_vortex,
            players
        }
    }
};
</script>