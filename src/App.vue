<template>
    <header-component></header-component>
    <div class="grid grid-cols-6 grid-rows-1">
        <side-window class="col-span-1"></side-window>
        <game-board class="col-span-5"></game-board>
    </div>
</template>
<script>
// import {ref} from 'vue';
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

        return {

        }
    }
};
</script>