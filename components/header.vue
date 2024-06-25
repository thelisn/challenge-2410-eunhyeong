<template>
    <header 
        id="header"
        :class="{ 'scrolled': !notScrolled }">

        <div class="inner">
            <div class="logo">
                <img 
                    v-on:click="clickLogo($event)"
                    src="@/assets/img/logo-black.png">
            </div>
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
        updated() {
            this.$store.dispatch('posts/add', {
                headerReset: this.headerReset,
            })
        },
        methods: {
            clickLogo(event) {
                if(event.target.classList.contains('reset')) {
                    console.log('has reset');
                    this.$router.go(this.$router.currentRoute);
                } else {
                    console.log('no');
                    this.$router.push({path: '/'});
                }
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