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

<style scoped lang="scss">
    @import '@/assets/scss/abstracts/variables.scss';

    .btn-back {
        text-indent: -9999px;
        width: $logo-height-mb;
        height: $logo-height-mb;
        display: block;
        position: fixed;
        top: $gap;
        left: calc(50vw - #{$mobile-width} / 2);
        z-index: 1;
        background: url('@/assets/img/btn-back.png') no-repeat 50% 50%;
        background-size: cover;
        border: none;
        outline: none;

        &:hover {
            box-shadow: none;
        }
    }

    /* ----- RESPONSIVE ----- */
    @media all and (max-width: $mobile-width) {
        .btn-back {
            left: 5vw;
        }
    }
</style>