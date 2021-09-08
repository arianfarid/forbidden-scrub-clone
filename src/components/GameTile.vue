<template>
    <div v-if="!is_vortex" class="grid justify-items-center 
    hover:ring-1 hover:ring-purple-600
    text-sm
    bg-gradient-to-t from-yellow-500 via-yellow-500 to-blue-300
    p-7 rounded-md shadow-md">
    
        <div>
            <div v-if="sand_count > 0" class="filter sepia flex flex-grow"></div>
            <p v-if="!crash_site && !is_vortex">
                {{tile_type}}
            </p>
            <p v-if="crash_site">
                Start
            </p>
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
export default {
    components: {},
    props: {
        tile_type: String,
        crash_site: Boolean,
        sand_count: Number,
    },
    setup(props) {
        const is_vortex = (props.tile_type === 'Vortex');
        return {
            is_vortex
        }
    }
};
</script>