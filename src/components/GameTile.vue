<template>
    <div class="grid justify-items-center 
    bg-gradient-to-t from-yellow-500 via-yellow-500 to-blue-300
    p-7 rounded-md shadow-md">
        {{tile_type}}
    </div>
</template>
<script>

export default {
    components: {
    },
    props: {
        tile_type: String,
    },
    setup() {

        return {

        }
    }
};
</script>