<template>
    <div class="contentOverview">
        <h1 class="pageTitle">Hoe gaat het met nederland tijdens corona?</h1>
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
        grid-auto-flow: row;
        align-items: start;
        align-content: start;
        grid-column-gap: 2rem;
        grid-row-gap: 1rem;
        width:80%;
        padding-top: 1rem;
    }

    .pageTitle {
        grid-column-start: span 4;
    }

    .largeArticleHome {
        grid-column-start: span 2;
        width: 100%;
    }

    .smallArticle {
        grid-column-start: span 2;
    }

    .largeArticle {
        grid-column-start: 1;
        grid-column-end: 5;
    }

    .home {
        min-height: 38rem!important;
        flex-direction: column!important;
        justify-content: space-between!important;
        align-items: stretch!important;
    }

    .home .mainContent {
        height: 37rem!important;
        align-self: stretch!important;
        display: flex;
        flex-direction: column;
    }
    .home button {
        align-self: baseline;
        width: 100%;
    }

    .home .line {
        align-self: stretch!important;
        height: 100%!important;
    }

    .home .line svg{
        height: 100%!important;
    }




</style>
