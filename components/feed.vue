<template>
    <div id="feed">
        <div class="inner">

            <!-- 검색 결과 -->
            <div class="feed-filtered"
                v-if="isSearched===true">
                <p>
                    총 <b>{{ searchedPosts.length }}</b>개의 글이 검색되었습니다.
                </p>
                <ul class="article-list">
                    <Post
                        v-for="p in searchedPosts"
                        :key="p.id"
                        :post="p">
                    </Post>
                </ul>
            </div>


            <!-- 모든 포스트 -->
            <div class="feed_all"
                v-else>
                <ul class="article-list">
                    <Post
                        v-for="p in mainPosts"
                        :key="p.id"
                        :post="p">
                    </Post>
                </ul>
            </div>

        </div>
    </div>
</template>

<script>
    import Post from "@/components/post.vue"
    import BtnBack from "@/components/btnback.vue";

    export default {
        components: {
            'Post': Post,
            'BtnBack': BtnBack,
        },
        computed: {
            mainPosts() {
                return this.$store.state.posts.mainPosts;
            },
            isSearched() {
                return this.$store.state.posts.isSearched.searched;
            },
            searchData() {
                return this.$store.state.posts.isSearched;
            },
            searchByKeyword() {
                return this.mainPosts.filter(post => {
                    return post.title.toLowerCase().includes(this.searchData.searchKey.toLowerCase()) > 0;
                });
            },
            searchByDate() {
                const startDate = this.searchData.date1;
                const endDate = this.searchData.date2;

                return this.mainPosts.filter(post => {
                    const getDate = new Date(post.date);

                    var year = getDate.getFullYear();
                    var month = getDate.getMonth() + 1;
                    var day = getDate.getDate();
                    if ( month < 10 ) {
                        month = '0' + month;
                    }
                    if ( day < 10 ) {
                        day = '0' + day;
                    }
                    const postDate = year + '-' + month + '-' + day;
                    
                    if ( startDate !== null && endDate !== null ) {
                        return startDate <= postDate && postDate <= endDate;
                    }
                    if ( startDate !== null && endDate === null ) {
                        return startDate <= postDate;
                    }
                    if ( startDate === null && endDate !== null ) {
                        return postDate <= endDate;
                    }
                    return true;
                });
            },
            searchByAll() {
                return this.searchByDate.filter(post => {
                    return post.title.toLowerCase().includes(this.searchData.searchKey.toLowerCase()) > 0;
                });
            },
            searchedPosts() {
                if ( this.searchData.searchKey.trim() === '' && this.searchData.date1 === '' && this.searchData.date2 === '' ) {
                    // 키워드 X 날짜 X
                    alert('검색어를 입력해주세요.');
                    this.$emit('main', true);
                    this.$store.dispatch('posts/search', {
                        searched: false,
                    });
                    return this.mainPosts;
                } else if ( this.searchData.searchKey.trim() === '' && this.searchData.date1 !== '' && this.searchData.date2 !== '' ) {
                    // 키워드 X 시작날짜 O 종료날짜 O
                    this.$emit('main', false);
                    return this.searchByDate;
                } else if ( this.searchData.searchKey.trim() === '' && this.searchData.date1 !== '' && this.searchData.date2 === '' ) {
                    // 키워드 X 시작날짜 O 종료날짜 X
                    alert('종료 날짜를 입력해 주세요.');
                    this.$emit('main', true);
                    this.$store.dispatch('posts/search', {
                        searched: false,
                    });
                    return this.mainPosts;
                } 
                else if ( this.searchData.searchKey.trim() !== '' && this.searchData.date1 === '' && this.searchData.date2 === '' ) {
                    // 키워드 O 시작날짜 X 종료날짜 X
                    this.$emit('main', false);
                    return this.searchByKeyword;
                } else if ( this.searchData.searchKey.trim() !== '' && this.searchData.date1 !== '' && this.searchData.date2 !== '' ) {
                    // 키워드 O 시작날짜 O 종료날짜 O
                    this.$emit('main', false);
                    return this.searchByAll;
                } else if ( this.searchData.searchKey.trim() !== '' && this.searchData.date1 !== '' && this.searchData.date2 === '' ) {
                    // 키워드 O 시작날짜 O 종료날짜 X
                    alert('종료 날짜를 입력해 주세요.');
                    this.$emit('main', true);
                    this.$store.dispatch('posts/search', {
                        searched: false,
                    });
                    return this.mainPosts;
                }
            }
        },
        methods: {
            clickBack() {
                this.$store.dispatch('posts/search', {
                    searched: false,
                    searchKey: '',
                });
                this.$router.push({path: '/'});
            },
        }
    }
</script>

<style scoped lang="scss">
    @import '@/assets/scss/templates/feed.scss';
</style>