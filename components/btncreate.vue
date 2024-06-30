<template>
    <div>
        <router-link 
            to="/create" 
            class="btn-create">
            글쓰기
        </router-link>
    </div>
</template>

<style scoped lang="scss">
    @import '@/assets/scss/abstracts/variables.scss';

    .btn-create {
        position: fixed;
        bottom: 5vw;
        right: calc(50vw - #{$mobile-width} / 2);
        width: 15vh;
        height: 15vh;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: $base-color;
        color: $color-white;
        font-size: $font-size-m;
        padding: 1rem;
        transition: all $transition-sec;

        &:hover {
            box-shadow: $box-shadow;
            transition: all $transition-sec;
        }
    }

    /* ----- RESPONSIVE ----- */
    @media all and (max-width: $mobile-width) {
        .btn-create {
            right: 5vw;
        }
    }
</style>