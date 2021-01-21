<template>
    <div class="contentOverview">
        <h1 class="pageTitle">Hoe gaat de overheid met de pandemie om</h1>
        <section class="smallArticle">
            <SmallArticle
                    title="Huidige saldo van de Rijksoverheid"
                    icon="fas fa-balance-scale-right"
                    percentage="-367mlj"
                    update="14-01-2021 10:12"
            />
        </section>

        <section class="smallArticle">
            <SmallArticle
                    title="Aantal bedrijven die gebruik maken van de financiële coronamaatregelen"
                    icon="fas fa-hand-holding-usd"
                    percentage="193450"
                    update="14-01-2021 10:12"
            />
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
