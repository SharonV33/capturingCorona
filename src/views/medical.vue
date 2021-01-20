<template>
    <div class="contentOverview">
        <h1 class="pageTitle">Medisch</h1>
        <section class="smallArticle">
            <SmallArticle
                    title="Mensen schatten gezondheid hoger in ondanks de epidemie"
                    subTitle="Gemiddelde 1e en 2e kwartaal 2020 t.o.v. 2019"
                    icon="fas fa-stethoscope"
                    percentage="+2%"
                    update="14-01-2021 10:12"
            />
        </section>

        <section class="smallArticle">
            <SmallArticle
                    title="44 op de 100 mensen melden zich ziek in het 3e kwartaal"
                    icon="fas fa-virus"
                    percentage="4,4%"
                    update="14-01-2021 10:12"
            />
        </section>

        <p class="subTitlePage">Overige vragen en antwoorden</p>
        <section class="articleLink">
            <linkArticle title="Hoeveel mensen sterven er wekelijks in Nederland?"/>
        </section>
        <section class="articleLink">
            <linkArticle title="Hoeveel coronadoden zijn vastgesteld in maart en april 2020?"/>
        </section>
        <section class="articleLink">
            <linkArticle title="Hoeveel mensen overleden aan COVID-19 die niet als zodanig geregistreerd werden?"/>
        </section>
        <section class="articleLink">
            <linkArticle title="Hoe verschillen de sterftecijfers in institutionele en particuliere huishoudens?"/>
        </section>
        <section class="articleLink">
            <linkArticle title="In welke provincie overleden tijdens de tweede coronagolf meer mensen dan verwacht?"/>
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
        name: 'medical',
        components: {
            // GraphArticle,
            SmallArticle,
            linkArticle
        }
    }
</script>

<style scoped>

</style>
