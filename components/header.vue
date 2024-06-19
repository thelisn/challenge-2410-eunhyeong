<template>
    <div id="header">
        <div class="inner">
            <router-link to="/" class="logo">
                <img src="@/static/img/logo-black.png" v-on:click="clickLogo">
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            clickLogo() {
                this.$store.dispatch('posts/search', {
                    searched: false,
                    searchKey: '',
                });
            }
        }
    }
</script>

<style scoped>
    #header .logo {
        padding: 16vh 0 8vh;
        text-align: center;
        display: block;
    }
    #header .logo img {
        height: 8vh;
    }
</style>