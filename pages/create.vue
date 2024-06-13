<template>
    <div id="create">
      
      <router-link to="/" class="btn-back">뒤로</router-link>
      <Header></Header>
      <CreateArticle></CreateArticle>

    </div>
</template>
  
<script>
    import CreateArticle from '../components/create-article.vue'
    
    export default {
      name: 'Create',
      components: {
        'CreateArticle': CreateArticle,
      }
    }
</script>
  
<style>
  #create #header {
    position: fixed;
    top: 0;
    width: 100%;
  }
  #create #header .logo {
    padding: 8px 0;
  }
  #create #header .logo img {
    height: 24px;
  }

  .btn-back {
    text-indent: -9999px;
    width: 24px;
    height: 24px;
    display: block;
    position: fixed;
    top: 12px;
    left: 5vw;
    z-index: 1;
    background: url('../static/img/btn-back.png') no-repeat 50% 50%;
    background-size: cover;
  }
</style>