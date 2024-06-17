<template>
    <div id="feed-filter">
        <div class="inner">
            <p>총 개의 글이 검색되었습니다.</p>
            {{ allPosts }}
        </div>
    </div>
</template>

<script>
export default {
    computed: {
      allPosts() {
        return this.$store.state.posts;
      },
    },
}
</script>

<style>
#feed-filter {
    margin: 8vh 0;
}
</style>