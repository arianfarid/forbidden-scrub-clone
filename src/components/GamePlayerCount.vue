<template>
    <div class="flex text-lg m-2">
        <label>Number of players:</label>
        <div class="flex cursor-pointer">
            <div class="flex flex-row bg-gray-200 rounded-full ml-2 px-2 ring-gray-500 hover:ring-1 hover:ring-gray-400">
                <div @click="setPlayerCount(2)" class="px-1 hover:bg-gray-300 border-r border-gray-500">2</div>
                <div @click="setPlayerCount(3)" class="px-1 hover:bg-gray-300 border-r border-gray-500">3</div>
                <div @click="setPlayerCount(4)" class="px-1 hover:bg-gray-300 border-r border-gray-500">4</div>
                <div @click="setPlayerCount(5)" class="px-1 hover:bg-gray-300">5</div>
            </div>
        </div>
    </div>
</template>
<script>
import {ref} from 'vue'
export default {
    components: {},
    props: {

    },
    setup() {
        const player_count = ref();
        const setPlayerCount = (number) => {
            return player_count.value = number;
        }
        return {
            player_count, setPlayerCount
        }
    }
};
</script>