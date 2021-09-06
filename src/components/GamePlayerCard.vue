<template>
    <div class="ring-1 bg-white ring-gray-200 w-72 h-96 rounded shadow-sm m-2 p-3">
        <div class="flex flex-row">
            <div class="rounded-full h-24 w-24 bg-gray-300"></div>
            <div class="justify-center p-2">
                <div>
                    Name: {{player_name.value}}
                </div>
                <div>
                    <input ref="player_name" type="text" class="rounded-sm ring-1 ring-gray-200 focus:ring-1 w-32 focus:ring-purple-600 outline-none" v-on:input="updateInput()" @change="updateInput()">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
export default {
    props: {
        player_data: Object,
    },
    setup(props, context) {
        const player_name = ref('');
        const updateInput = () => {
            console.log(player_name.value.value);
            context.emit("playerInputChange", { "id": props.player_data.id, "name": player_name.value.value });
        }
        return {
            player_name, updateInput
        }
    }
};
</script>