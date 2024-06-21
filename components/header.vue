<template>
    <header 
        id="header" 
        :class="{ 'scrolled': !notScrolled }">

        <div class="inner">
            <router-link to="/" class="logo">
                <img src="@/assets/img/logo-black.png" v-on:click="clickLogo">
            </router-link>
        </div>
        
    </header>
</template>

<script>
    export default {
        data() {
            return {
                notScrolled: true,
                lastScrollPosition: 0,
                scrollValue: 0,
            }
        },
        mounted() {
            this.lastScrollPosition = window.scrollY;
            window.addEventListener('scroll', this.onScroll);
            const viewportMeta = document.createElement('meta');
            viewportMeta.name = 'viewport';
            viewportMeta.content = 'width=device-width, initial-scale=1';
            document.head.appendChild(viewportMeta);
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.onScroll);
        },
        methods: {
            clickLogo() {
                this.$store.dispatch('posts/search', {
                    searched: false,
                    searchKey: '',
                });
            },
            onScroll() {
                if (window.scrollY < 0) {
                    return;
                }
                if (Math.abs(window.scrollY - this.lastScrollPosition) < 40) {
                    return;
                }
                this.notScrolled = window.scrollY < this.lastScrollPosition
                this.lastScrollPosition = window.scrollY
            }
        },
    }
</script>

<style scoped lang="scss">

</style>