<template>
    <div @click="advancePlayer()" v-if="!is_vortex" class="grid justify-items-center 
    hover:ring-1 hover:ring-purple-600
    text-sm
    bg-gradient-to-t from-yellow-500 via-yellow-500 to-blue-300
    p-7 rounded-md shadow-md">
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
                    <img v-if="position === current_tile.index" class="rounded-full h-7 w-7 ring-gray-200 bg-gray-300 ring-1" :src="players[index].character_img" />
                </div>
            </div>
            <br>
            {{sand_count}} sands
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
        return {
            advancePlayer,
            is_vortex,
            players
        }
    }
};
</script>