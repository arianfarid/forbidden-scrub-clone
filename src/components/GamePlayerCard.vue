<template>
    <div class="bg-white ring-gray-200 ring-1 w-72 h-96 rounded shadow-sm m-2 p-3">
        <div class="flex flex-row">
            <div class="rounded-full h-24 w-24 bg-gray-300">
                <img class="rounded-full h-24 w-24 ring-gray-200 ring-1" v-if="character_img" :src="character_img">
            </div>
            <div class="justify-center p-2">
                <div>
                    Name: {{player_name.value}}
                </div>
                <div>
                    <input ref="player_name" type="text" class="rounded-sm ring-1 ring-gray-200 focus:ring-1 w-32 focus:ring-purple-600 outline-none" v-on:input="updateInput()" @change="updateInput()">
                </div>
            </div>
        </div>
        <div class="flex flex-row">
            <div>
                Character:
            </div>
            <div>
                <select ref="character_selected" type="text" class="rounded-sm ring-1 ring-gray-200 focus:ring-1 ml-2 w-auto focus:ring-purple-600 outline-none" v-on:input="updateInput(), addCharacterImage()" @change="updateInput(), addCharacterImage()">
                    <option></option>
                    <option v-for="option in characters" v-bind:key="option.id" :value="option.name">{{option.name}}</option>
                </select>
            </div>
        </div>
    </div>
</template>
<script>
import { inject, ref } from 'vue';
export default {
    props: {
        player_data: Object,
    },
    setup(props, context) {
        const player_name = ref('');
        const characters = inject('characters');
        const character_selected = ref('');
        const character_img = ref('');
        const updateInput = () => {
            context.emit("playerInputChange", {
                "id": props.player_data.id,
                "name": player_name.value.value,
                "character": character_selected.value.value,
                "character_id": characters.value[characters.value.findIndex(element => element.name === character_selected.value.value)].id,
                "character_img": characters.value[characters.value.findIndex(element => element.name === character_selected.value.value)].img,
            });
        }
        const addCharacterImage = () => {
            return character_img.value = characters.value[characters.value.findIndex(element => element.name === character_selected.value.value)].img
        }
        return {
            addCharacterImage,
            character_img,
            character_selected,
            characters,
            player_name,
            updateInput,
        }
    }
};
</script>