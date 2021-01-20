<template>
    <div class="contentOverview">
        <h1 class="pageTitle">Sociaal</h1>
        <section class="smallArticle">
            <SmallArticle
                    title="oe ontwikkelt het aantal passagiers dat van en naar nationale luchthavens vliegt zich"
                    icon="fas fa-plane"
                    :percentage="12"
            />
        </section>
        <section class="smallArticle">
            <SmallArticle title="Hoeveel minder reizen we met het openbaar vervoer" icon="fas fa-train" :percentage="-99"/>
        </section>
        <section class="smallArticle">
            <SmallArticle title="Hoe ontwikkelt het goederenvervoer zich" icon="fas fa-truck" :percentage="99"/>
        </section>

        <p class="subTitlePage">Overige vragen en antwoorden</p>
        <section class="articleLink">
            <linkArticle title="Zijn er regionale verschillen in economische ontwikkelingen?"/>
        </section>
        <section class="articleLink">
            <linkArticle title="Laad meer vragen " class="loadMore"/>
        </section>
    </div>
</template>

<script>
    // @ is an alias to /src
    // import GraphArticle from '@/components/GraphArticle.vue'
    import SmallArticle from '@/components/SmallArticle.vue'
    import linkArticle from '@/components/linkArticle.vue'

    export default {
        name: 'social',
        components: {
            // GraphArticle,
            SmallArticle,
            linkArticle
        }
    }
</script>

<style scoped>

</style>
