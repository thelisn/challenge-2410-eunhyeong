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
                            required>
                        </textarea>
                    </li>
                    <li>
                        <input 
                            type="submit" 
                            id="submit-create"
                            placeholder="글쓰기"
                            v-on:click="createArticle">
                    </li>
                </ul>
            </form>

            <section>
                <a v-on:click="onTest">test</a>
                <p>{{ name }}</p>
            </section>

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
        name() {
            return this.$store.state.articles.name;
        }
    },
    methods: {
        createArticle: function() {
            console.log(this.title, this.date, this.content);
        },
        onTest() {
            this.$store.commit('articles/bye');
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