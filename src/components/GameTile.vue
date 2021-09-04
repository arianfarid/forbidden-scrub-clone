<template>
    <div class="grid justify-items-center 
    text-sm
    bg-gradient-to-t from-yellow-500 via-yellow-500 to-blue-300
    p-7 rounded-md shadow-md">
        <p v-if="!crash_site && !is_vortex">
            {{tile_type}}
            <br>
            {{sand_count}} sand layers
        </p>
        <p v-if="is_vortex">
            ~VORTEX~
        </p>
        <p v-if="crash_site">
            Crash Site
        </p>
    </div>
</template>
<script>
export default {
    components: {},
    props: {
        tile_type: String,
        crash_site: Boolean,
        sand_count: Number,
    },
    setup(props) {
        const is_vortex = (props.tile_type==='Vortex');
        return {
            is_vortex
        }
    }
};
</script>