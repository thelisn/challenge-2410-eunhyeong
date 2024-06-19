<template>
    <div id="feed">
        <div class="inner">

            <!-- 검색 결과 --->
            <div class="feed_filtered"
                v-if="isSearched===true">
                <p>총 <b>{{ searchedPosts.length }}</b>개의 글이 검색되었습니다.</p>
                <ul class="article_list">
                    <Post
                        v-for="p in searchedPosts"
                        :key="p.id"
                        :post="p">
                    </Post>
                </ul>
            </div>

            <!-- 모든 포스트 --->
            <div 
                v-else class="feed_all">
                <ul class="article_list">
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

export default {
    components: {
        'Post': Post,
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

                if (month < 10) {
                    month = '0' + month;
                }
                if (day < 10) {
                    day = '0' + day;
                }

                const postDate = year + '-' + month + '-' + day;


                if (startDate && endDate) {
                    return startDate <= postDate && postDate <= endDate;
                }
                if (startDate && !endDate) {
                    return startDate <= postDate;
                }
                if (!startDate && endDate) {
                    return postDate <= endDate;
                }
                return true;
            });

        },
        searchedPosts() {
            if ( this.searchData.date1 !== '' && this.searchData.date2 !== '' ) {
                return this.searchByDate;
            } 
            if ( this.searchData.searchKey.trim() === '' ) {
                alert('검색어를 입력해주세요.');
                this.$store.dispatch('posts/search', {
                        searched: false,
                    });
                return this.mainPosts;
            } else {
                return this.searchByKeyword;
            }
        }
    },
}
</script>

<style scoped>
    #feed {
        margin: 8vh 0;
    }
    .article_list li:not(:first-child) {
        margin-top: 32px;
    }

    .feed_filtered p {
        text-align: center;
        margin-bottom: 8vh;
        font-size: 14px;
    }
</style>