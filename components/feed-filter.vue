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
      searchKeyword() {
        return this.$store.state.posts.isSearched.searchKey;
      },
      searchedPosts() {
        return this.allPosts.filter(post => {
            return post.title.toLowerCase().includes(this.searchKeyword.toLowerCase()) > 0;
        });
      }
    },
}
</script>

<style>
#feed-filter {
    margin: 8vh 0;
}
</style>