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
                console.log('test');
                this.$store.dispatch('posts/search', {
                    searched: false,
                    searchKey: '',
                });
                this.$router.go(-1);
            },
        }
    }
</script>