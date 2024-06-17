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
                    <dl>
                        <dd>
                            <span>
                                <label for="date1"></label>
                                <input type="date" id="date1">
                            </span>
                            <span>
                                <label for="date2"></label>
                                <input type="date" id="date2">
                            </span>
                            
                        </dd>
                        <dt>
                            <button id="submit-search" v-on:click="onSearch">검색</button>                        
                        </dt>
                    </dl>
                </li>
            </ul>

        </div>
    </div>
    
</template>

<script>
    export default {
        data() {
            return {
                searchKey: '',
                searched: false,
            }
        },
        methods: {
            searchByKey() {
                
            },
            onSearch(keyword) {
                if (this.searchKey == '') { 
                    alert('검색어를 입력해주세요.');
                } else {
                    this.$store.dispatch('posts/search', {
                        searchKey: this.searchKey,
                        searched: true,
                    });
                }
            }
        },
    }
</script>

<style>
    .search-form li:not(:first-child) {
        margin-top: 8px;
    }
    .search-form li dl {
        display: grid;
        grid-template-columns: 3fr 1fr;
        grid-gap: 8px;
    }
    .search-form li dl dd {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 8px;
    }
</style>