<template>
    <div id="search">
        <div class="inner">
            <ul>
                <li>
                    <label for="textsearch"></label>
                    <input type="search" id="textsearch" name="textsearch" placeholder="검색어를 입력하세요">
                </li>
                <li>
                    <dl>
                        <dd>
                            <input type="date" id="date1">
                            <input type="date" id="date2">
                        </dd>
                        <dt>
                            <input type="submit" id="submit-search" value="검색">
                        </dt>
                    </dl>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
#search ul li:not(:first-child) {
    margin-top: 8px;
}
#search li dl {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 8px;
}
#search li dl dd {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 8px;
}
</style>