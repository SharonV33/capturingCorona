<template>
    <div class="contentOverview">
        <h1 class="pageTitle">Werk en loon</h1>
        <section class="largeArticle" >
            <GraphArticle
                    articleTitle=""
                    uniqueID="staticWork"
                    update=""
                    isStatic="true"
                    src="mainWork.png"
                    class="staticLargeArticle"
            />
        </section>

        <section class="smallArticle">
            <SmallArticle
                    title="De stijging van bijstandsuitkeringen"
                    subTitle="September en Oktober 2020"
                    update="14-01-2021 10:12"
                    isStatic="true"
                    src="bijstand.png"
            />
        </section>

        <section class="smallArticle">
            <SmallArticle
                    title="Beroepen in de ICT werken het meest thuis"
                    subTitle="2e kwartaal 2020"
                    update="14-01-2021 10:12"
                    isStatic="true"
                    src="ictBeroepen.png"
            />
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
    import GraphArticle from '@/components/GraphArticle.vue'
    import SmallArticle from '@/components/SmallArticle.vue'
    import linkArticle from '@/components/linkArticle.vue'

    export default {
        name: 'work',
        components: {
            GraphArticle,
            SmallArticle,
            linkArticle
        }
    }
</script>

<style scoped>


</style>
