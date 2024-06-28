<template>
    <header 
        id="header"
        :class="{ 
            'main': this.main !==false,
            'reset': this.reset === true,
            'scrolled': !notScrolled }">

        <div class="inner">
            <div class="logo">
                <img 
                    :class="{'reset': this.reset === true }"
                    v-on:click="clickLogo($event)"
                    src="@/assets/img/logo-black.png">
            </div>
        </div>
        
    </header>
</template>

<script>
    export default {
        props: {
            main: {
                type: Boolean,
                default: true,
            },
            reset: {
                type: Boolean,
                default: true,
            }
        },
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
            clickLogo(event) {
                if(event.target.classList.contains('reset')) {
                    this.$router.go(this.$router.currentRoute);
                } else {
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
    @import '@/assets/scss/layout/header.scss';
</style>