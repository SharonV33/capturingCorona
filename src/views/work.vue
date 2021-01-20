<template>
    <div class="contentOverview">
        <h1 class="pageTitle">Werk en loon</h1>
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
            <linkArticle title="Hoeveel mensen waren in oktober werkloos?"/>
        </section>
        <section class="articleLink">
            <linkArticle title="Hoe ontwikkelt de arbeidsparticipatie zich?"/>
        </section>
        <section class="articleLink">
            <linkArticle title="Hoe ontwikkelt het aantal vacatures zich?"/>
        </section>
        <section class="articleLink">
            <linkArticle title="Hoe groot is de financiële buffer van zelfstandig ondernemers?"/>
        </section>
        <section class="articleLink">
            <linkArticle title="Wat zijn de gevolgen van de eerste coronagolf voor arbeid en inkomen?"/>
        </section>
        <section class="articleLink">
            <linkArticle title="Laad meer vragen" class="loadMore"/>
        </section>

    </div>
</template>

<script>
    // @ is an alias to /src
    // import GraphArticle from '@/components/GraphArticle.vue'
    import SmallArticle from '@/components/SmallArticle.vue'
    import linkArticle from '@/components/linkArticle.vue'

    export default {
        name: 'work',
        components: {
            // GraphArticle,
            SmallArticle,
            linkArticle
        }
    }
</script>

<style scoped>


</style>
