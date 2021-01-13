<template>
    <div class="contentOverview">
        <h1>SOCIAL</h1>
        <section class="smallArticle">
            <SmallArticle
                    question="oe ontwikkelt het aantal passagiers dat van en naar nationale luchthavens vliegt zich"
                    icon="fas fa-plane"
                    :percentage="12"
            />
        </section>
        <section class="smallArticle">
            <SmallArticle question="Hoeveel minder reizen we met het openbaar vervoer" icon="fas fa-train" :percentage="-99"/>
        </section>
        <section class="smallArticle">
            <SmallArticle question="Hoe ontwikkelt het goederenvervoer zich" icon="fas fa-truck" :percentage="99"/>
        </section>
        <section class="smallArticle">
            <NegativeSmallArticle />
        </section>
        <section class="largeArticle">
            <!--<GraphArticle />-->
        </section>
    </div>
</template>

<script>
    // @ is an alias to /src
    // import GraphArticle from '@/components/GraphArticle.vue'
    import SmallArticle from '@/components/SmallArticle.vue'
    import NegativeSmallArticle from '@/components/NegativeSmallArticle.vue'

    export default {
        name: 'social',
        components: {
            // GraphArticle,
            SmallArticle,
            NegativeSmallArticle
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
        border-radius: 9px;
        grid-row-start: 2;
        grid-column-start: 1;
        grid-column-end: 5;
        padding-left: 1rem;
    }

    .smallArticle {
        border: 1px solid darkgray;
        border-radius: 9px;
        grid-row-start: 1;
    }
</style>
