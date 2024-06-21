<template>
    <button
        class="btn-back" 
        @click="clickBack">
        뒤로
    </button>
</template>

<script>
    export default {
        methods: {
            clickBack() {
                this.$store.dispatch('posts/search', {
                    searched: false,
                    searchKey: '',
                });
                this.$router.push({path: '/'})
            },
        }
    }
</script>