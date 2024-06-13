<template>
    <div id="feed">
        <div class="inner">
            <ul>
                <Article></Article>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
#feed {
    margin: 8vh 0;
}
#feed ul li:not(:first-child) {
    margin-top: 32px;
}
</style>