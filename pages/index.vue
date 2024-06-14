<template>
  <div id="app">
    
    <Header></Header>
    <Search></Search>
    <Feed></Feed>

    <router-link to="/create">글쓰기</router-link>

  </div>
</template>

<script>
  import Header from '../components/header.vue'
  import Search from '../components/search.vue'
  import Feed from '../components/feed.vue'
  import Create from './create.vue'

  export default {
    name: 'IndexPage',
    components: {
        'Header': Header,
        'Search': Search,
        'Feed': Feed,
        'Create': Create,
    }
  }
</script>

<style>
  *{
    margin:0; 
    padding:0; 
    box-sizing: border-box;
    color: #3e3c3c;
  }
  html {
    background-color: #FAF6F3;
  }
  .__nuxt-error-page {
    background-color: #FAF6F3;
  }
  .inner {
    width: 90%;
    margin: auto;
  }
  li { 
    list-style-type: none; 
  }
  a {
    text-decoration: none;
    color: #3e3c3c;
  }
  a:focus {
    outline: none;
  }
  ::selection {
    background-color: #3c16cbb8;
    color: #fff;
  }
  input {
    border: none;
    background-color: #EEE8E3;
    outline: none;
    padding: 8px 12px;
    border-radius: 4px;
    height: 40px;
  }
  input[type="search"] {
    width: 100%;
    cursor: pointer;
  }
  textarea {
    border: none;
    background-color: #EEE8E3;
    outline: none;
    padding: 8px 12px;
    border-radius: 4px;
    width: 100%;
    resize: none;
  }
  button {
    width: 100%;
    background-color: #3e3c3c;
    color: #F8F3F2;
    cursor: pointer;
    outline: none;
    padding: 8px 12px;
    border-radius: 4px;
    height: 40px;
}

  a[href="/create"] {
    position: fixed;
    bottom: 5vw;
    right: 5vw;
    width: 15vh;
    height: 15vh;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #3e3c3c;
    color: #F8F3F2;
    font-size: 0.8rem;
    padding: 0.4rem;
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.12);
  }
</style>