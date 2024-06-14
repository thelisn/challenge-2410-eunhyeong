<template>
    <div id="create-article">
        <div class="inner">

            <form ref="form" @submit.prevent="onSubmitForm">
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
                            v-on:click="onSubmitForm">
                    </li>
                </ul>
            </form>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            date: '',
            content: '',
        }
    },
    computed: {
        addMainPost() {
            return this.$store.state.articles.mainPosts;
        },
    },
    methods: {
        onSubmitForm() {
            this.$store.dispatch('articles/add', {
                title: this.title,
                date: this.date,
                content: this.content,
                id: Date.now(),
            })
            .then(() => {
                    this.$router.push({
                        path: '/',
                    });
                });
        }
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