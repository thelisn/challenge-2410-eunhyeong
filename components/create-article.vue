<template>
    <div id="create-article">
        <div class="inner">

            <form ref="form">
                <ul>
                    <li>
                        <label for="title"></label>
                        <input 
                            type="text" 
                            id="title" 
                            name="title" 
                            placeholder="제목" 
                            v-model="title"
                            required>
                    </li>
                    <li>
                        <label for="date"></label>
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
                        <input 
                            type="submit" 
                            id="submit-create"
                            value="글쓰기"
                            v-on:click="Post">
                    </li>
                </ul>
            </form>

        </div>
    </div>
</template>

<script  src="http://code.jquery.com/jquery-latest.min.js"></script>
<script>
export default {
    mounted() {
        document.getElementById('date').value = new Date().toISOString().substring(0, 10);    },
    data() {
        return {
            title: '',
            date: '',
            content: '',
        }
    },
    computed: {
        article() {
            return this.$store.state.articles.article;
        }
    },
    methods: {
        Post: function() {
            this.$store.dispatch('articles/createArticle', {
                title: this.title,
                date: this.date,
                content: this.content,
            })
                // .then(() => {
                //     this.$router.push({
                //         path: '/',
                //     });
                // });
        },
    },
}
</script>

<style>
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