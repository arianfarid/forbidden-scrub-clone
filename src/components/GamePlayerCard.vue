<template>
    <div class="bg-gray-200 w-72 h-96 rounded shadow-sm m-2 p-3">
        <div class="rounded-full h-24 w-24 bg-gray-300"></div>
        {{player_data}}
    </div>
</template>
<script>
export default {
    props: {
        player_data: Object,
    },
    setup() {
        return {
        }
    }
};
</script>