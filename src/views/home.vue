<template>
    <div class="contentOverview">
        <section class="largeArticleHome" >
            <GraphArticle articleTitle="hoi" class="home"/>
        </section>
        <section class="largeArticleHome" >
            <GraphArticle articleTitle="doei" class="home"/>
        </section>

    </div>
</template>

<script>
    // @ is an alias to /src
    import GraphArticle from '@/components/GraphArticle.vue'

    export default {
        name: 'economy',
        components: {
            GraphArticle
        }
    }
</script>

<style>

    .contentOverview {
        display: grid;
        grid-template-columns: 20% 20% 20% 20%;
        grid-auto-flow: column;
        align-items: start;
        align-content: start;
        grid-column-gap: 2rem;
        grid-row-gap: 1rem;
        width:80%;
        padding-top: 1rem;
    }

    .largeArticleHome {
        grid-column-start: span 2;
        width: 100%;
    }

    .home {
        min-height: 38rem!important;
        flex-direction: column!important;
        justify-content: space-between;
    }

    .home .mainContent {
        height: 100%;
    }
    .home button {
        align-self: baseline;
        width: 100%;
    }







</style>
