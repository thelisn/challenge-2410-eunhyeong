<template>
    <div id="search">
        <div class="inner">

            <ul class="search-form">
                <li>
                    <label for="searchKey">검색어</label>
                    <input 
                        type="search" 
                        id="searchKey" 
                        name="searchKey" 
                        v-model="searchKey"
                        placeholder="검색어를 입력하세요"
                        v-on:keyup.enter="onSearch">
                    <button 
                        id="submit-search" 
                        v-on:click="onSearch">
                        검색
                    </button>
                </li>
                <li>
                    <ul>
                        <li>
                            <span>
                                <label for="date1">시작 날짜</label>
                                <input 
                                    type="date" 
                                    id="date1"
                                    v-model="date1"
                                    v-on:keyup.enter="onSearch">
                            </span>
                            <p> ~ </p>
                            <span>
                                <label for="date2">종료 날짜</label>
                                <input 
                                    type="date" 
                                    id="date2"
                                    v-model="date2"
                                    v-on:keyup.enter="onSearch">
                            </span>
                        </li>
                        <li>
                            <button
                                class="reset"
                                v-on:click="resetSearch">
                                리셋
                            </button>                      
                        </li>
                    </ul>
                </li>
            </ul>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'search',
        data() {
            return {
                searched: false,
                searchKey: '',
                date1: '',
                date2: '',
            }
        },
        methods: {
            onSearch() {
                this.$store.dispatch('posts/search', {
                    searched: true,
                    searchKey: this.searchKey,
                    date1: this.date1,
                    date2: this.date2
                });
            },
            resetSearch() {
                this.$store.dispatch('header/main', {
                    headerMain: false,
                });

                this.$store.dispatch('posts/search', {
                    searched: false,
                    searchKey: '',
                    date1: '',
                    date2: ''
                });

                this.searched = false;
                this.searchKey = '';
                this.date1 = '';
                this.date2 = '';
            },
        },
    }
</script>

<style scoped lang="scss">
    @import '@/assets/scss/templates/search-form.scss';
</style>