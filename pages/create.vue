<template>
    <div id="create">
      
        <BtnBack></BtnBack>
        <Header
            :class="{'reset': headerReset }">
        </Header>

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
                        <button 
                            id="submit-create" 
                            v-on:click="onSubmitForm">
                            글쓰기
                        </button>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>
  
<script>
    import BtnBack from '@/components/btnback.vue';

    export default {
        name: 'Create',
        components: {
            'BtnBack': BtnBack
        },
        data() {
            return {
                title: '',
                date: '',
                content: '',
                headerReset: false,
            }
        },
        computed: {
            mainPosts() {
                return this.$store.state.posts.mainPosts;
            },
            dateSelected() {
                if (this.date === '') {
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
        },
        created() {
            this.$store.dispatch('header/reset', {
                headerReset: this.headerReset,
            })
        }
    }
</script>

<style scoped lang="scss">
    @import '@/assets/scss/pages/create.scss';
</style>