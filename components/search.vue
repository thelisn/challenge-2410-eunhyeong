<template>
    <div id="search">
        <div class="inner">

            <ul class="search-form">
                <li>
                    <label for="searchKey"></label>
                    <input 
                        type="search" 
                        id="searchKey" 
                        name="searchKey" 
                        v-model="searchKey"
                        placeholder="검색어를 입력하세요">
                </li>
                <li>
                    <ul>
                        <li>
                            <span>
                                <label for="date1"></label>
                                <input 
                                    type="date" 
                                    id="date1"
                                    v-model="date1"
                                >
                            </span>
                            <span>
                                <label for="date2"></label>
                                <input 
                                    type="date" 
                                    id="date2"
                                    v-model="date2"
                                >
                            </span>
                            
                        </li>
                        <li>
                            <button id="submit-search" v-on:click="onSearch">검색</button>                        
                        </li>
                    </ul>
                </li>
            </ul>


        </div>
    </div>
    
</template>

<script>
    export default {
        data() {
            return {
                searched: false,
                searchKey: '',
                date1: '',
                date2: '',
            }
        },
        methods: {
            onSearch(keyword) {
                if (this.searchKey.trim() === '') { 
                    console.log('검색어를 입력해주세요.');
                } else {
                    this.$store.dispatch('posts/search', {
                        searched: true,
                        searchKey: this.searchKey,
                        date1: this.date1,
                        date2: this.date2
                    });
                }
            }
        },
    }
</script>

<style>
    .search-form > li:not(:first-child) {
        margin-top: 8px;
    }
    .search-form li ul {
        display: grid;
        grid-template-columns: 3fr 1fr;
        grid-gap: 8px;
    }
    .search-form li ul li:first-child {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 8px;
    }
</style>