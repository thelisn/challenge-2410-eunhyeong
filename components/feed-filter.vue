<template>
    <div id="feed-filter">
        <div class="inner">
            <p>총 {{ searchedPosts.length }}개의 글이 검색되었습니다.</p>
            <div style="margin-top:20px">{{ searchedPosts }}</div>
            <div style="margin-top:20px">{{ allPosts }}</div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        allPosts() {
            return this.$store.state.posts.mainPosts;
        },
        searchData() {
            return this.$store.state.posts.isSearched;
        },
        searchByKeyword() {
            return this.allPosts.filter(post => {
                return post.title.toLowerCase().includes(this.searchData.searchKey.toLowerCase()) > 0;
            });
        },
        searchByDate() {
            const startDate = this.searchData.date1;
            const endDate = this.searchData.date2;

            return this.allPosts.filter(post => {
                const getDate = new Date(post.date);

                var year = getDate.getFullYear();
                var month = getDate.getMonth() + 1;
                var day = getDate.getDate();

                if(month < 10){
                    month = '0' + month;
                }
                if(day < 10){
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
            return this.searchByDate;
        }
    },
}
</script>

<style scoped>
#feed-filter {
    margin: 8vh 0;
}
</style>