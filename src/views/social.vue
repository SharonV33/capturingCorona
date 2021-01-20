<template>
    <div class="contentOverview">
        <h1 class="pageTitle">Sociaal</h1>
        <section class="smallArticle">
            <SmallArticle
                    title="Aantal misdrijven in vergelijking tot vorig jaar"
                    icon="fas fa-siren-on"
                    update="14-01-2021 10:12"
                    :percentage="-8963"
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
