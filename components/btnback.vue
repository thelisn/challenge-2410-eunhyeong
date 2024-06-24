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
                this.$router.go(-1);
            },
        }
    }
</script>