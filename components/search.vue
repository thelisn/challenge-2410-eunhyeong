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
                                <label for="startDate"></label>
                                <input 
                                    type="date" 
                                    id="startDate"
                                    v-model="startDate"
                                >
                            </span>
                            <span>
                                <label for="endDate"></label>
                                <input 
                                    type="date" 
                                    id="startDate"
                                    v-model="endDate"
                                >
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
                searched: false,
                searchKey: '',
                startDate: '',
                endDate: '',
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
                        startDate: this.startDate,
                        endDate: this.endDate
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