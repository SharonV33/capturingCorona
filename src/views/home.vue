<template>
    <div class="contentOverview">
        <section class="largeArticle" >
            <GraphArticle articleTitle="hoi"/>
        </section>

        <section class="largeArticle" >
            <GraphArticle articleTitle="doei"/>
        </section>


        <!--<section class="largeArticle" >-->
            <!--<GraphArticle articleTitle="hoi"/>-->
        <!--</section>-->
    </div>
</template>

<script>
    // @ is an alias to /src
    import GraphArticle from '@/components/GraphArticle.vue'
    // import SmallArticle from '@/components/SmallArticle.vue'
    // import NegativeSmallArticle from '@/components/NegativeSmallArticle.vue'

    export default {
        name: 'economy',
        components: {
            GraphArticle,
            // SmallArticle,
            // NegativeSmallArticle
        }
    }
</script>

<style scoped>

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

    .largeArticle {
        border: 1px solid darkgray;
        grid-column-end: span 2;
        width: 100%;
        border-radius: 9px;
        padding-left: 1rem;
    }

</style>
