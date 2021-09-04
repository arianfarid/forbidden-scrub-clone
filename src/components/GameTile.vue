<template>
    <div class="grid justify-items-center 
    text-sm
    bg-gradient-to-t from-yellow-500 via-yellow-500 to-blue-300
    p-7 rounded-md shadow-md">
        <p v-if="!crash_site">
        {{tile_type}}
        </p>
        <p v-if="crash_site">
        Crash Site
        </p>
    </div>
</template>
<script>

export default {
    components: {
    },
    props: {
        tile_type: String,
        crash_site: Boolean,
    },
    setup() {

        return {

        }
    }
};
</script>