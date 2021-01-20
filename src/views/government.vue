<template>
    <div class="contentOverview">
        <h1 class="pageTitle">Overheid</h1>
        <section class="smallArticle">
            <SmallArticle
                    title="Hoe ontwikkelt het aantal passagiers dat van en naar nationale luchthavens vliegt zich"
                    icon="fas fa-plane"
                    :percentage="12"
            />
        </section>
        <section class="smallArticle">
            <SmallArticle
                    title="Hoeveel minder reizen we met het openbaar vervoer"
                    icon="fas fa-train"
                    :percentage="-99"/>
        </section>
        <section class="smallArticle">
            <SmallArticle
                    title="Hoe ontwikkelt het goederenvervoer zich"
                    icon="fas fa-truck"
                    :percentage="99"/>
        </section>

        <p class="subTitlePage">Overige vragen en antwoorden</p>
        <section class="articleLink">
            <linkArticle title="Hoeveel bedrijven hebben uitstel van betaling bij de Belastingdienst gekregen?"/>
        </section>
        <section class="articleLink">
            <linkArticle title="Wat zijn de kenmerken van personen die een uitkering ontvingen in het kader van de Tozo (Tijdelijke overbruggingsregeling zelfstandig ondernemers)?"/>
        </section>
        <section class="articleLink">
            <linkArticle title="Hoeveel uitkeringen verstrekten gemeenten aan zelfstandigen in het kader van de Tozo (Tijdelijke overbruggingsregeling zelfstandig ondernemers)?"/>
        </section>
        <section class="articleLink">
            <linkArticle title="Wat zijn de gevolgen van de eerste coronagolf voor de overheid?"/>
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
        name: 'governmemt',
        components: {
            // GraphArticle,
            SmallArticle,
            linkArticle
        }
    }
</script>

<style scoped>

</style>
