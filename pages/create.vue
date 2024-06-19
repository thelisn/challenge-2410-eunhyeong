<template>
    <div id="create">
      
        <button
            class="btn-back" 
            @click="clickBack">
                뒤로
        </button>
        <Header></Header>

        <div id="create-article">
            <div class="inner">
                <ul>
                    <li>
                        <label for="title">제목</label>
                        <input 
                            type="text" 
                            id="title" 
                            name="title" 
                            placeholder="제목" 
                            v-model="title"
                            required>
                    </li>
                    <li>
                        <label for="date">날짜</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            v-model="date">
                    </li>
                    <li>
                        <textarea 
                            v-model="content"
                            placeholder="게시글을 작성해 주세요."
                            required>
                        </textarea>
                    </li>
                    <li>
                        <button id="submit-create" v-on:click="onSubmitForm">글쓰기</button>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>
  
<script>    
    export default {
        name: 'Create',
        data() {
            return {
                title: '',
                date: '',
                content: '',
            }
        },
        computed: {
            mainPosts() {
                return this.$store.state.posts.mainPosts;
            },
            dateSelected() {
                if (this.date == '') {
                    return Date.now();
                } else {
                    return this.date;
                }
            }
        },
        methods: {
            onSubmitForm() {
                this.$store.dispatch('posts/add', {
                    title: this.title,
                    date: this.dateSelected,
                    content: this.content,
                    id: this.mainPosts.length +1,
                })
                this.$router.push({path: '/post/' + this.mainPosts.length})
            },
            clickBack() {
                this.$store.dispatch('posts/search', {
                    searched: false,
                    searchKey: '',
                });
                this.$router.push({path: '/'})
            },
        },
    }
</script>

<style scoped>
    #create-article {
        padding-top: 46px;
    }
    #create-article .inner {
        padding: 8px 0;
    }

    #create-article ul li:not(:first-child) {
        margin-top: 8px;
    }
    #create-article input {
        width: 100%;
    }
    #create-article textarea {
        height: 48vh;
    }
</style>