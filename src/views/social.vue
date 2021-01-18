<template>
    <div class="contentOverview">
        <h1 class="pageTitle">Sociaal</h1>
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

</style>
