<template>
    <div class="contentOverview">
        <h1 class="pageTitle">Product en handel</h1>

        <section class="largeArticle" >
            <GraphArticle
                    articleTitle=""
                    uniqueID="staticProduct"
                    update=""
                    isStatic="true"
                    src="mainWork.png"
                    class="mainProduct"
            />
        </section>

        <section class="smallArticle">
            <SmallArticle
                    title="Consumptie huishoudens"
                    subTitle="2019 vs. 2020"
                    update="14-01-2021 10:12"
                    isStatic="true"
                    src="productSmall.png"
            />
        </section>
        <section class="smallArticle">
            <SmallArticle
                    title="Dit besteden Nederlanders aan webwinkels"
                    update="14-01-2021 10:12"
                    icon="fas fa-globe"
                    :percentage="271200000"
            />
        </section>


        <p class="subTitlePage">Overige vragen en antwoorden</p>
        <section class="articleLink">
            <linkArticle title="Hoeveel is de productie van de industrie gedaald?"/>
        </section>
        <section class="articleLink">
            <linkArticle title="Hoe ontwikkelt de omzet van de groothandel zich?"/>
        </section>
        <section class="articleLink">
            <linkArticle title="Hoeveel geld besteden Nederlandse consumenten bij Nederlandse webwinkels?"/>
        </section>
        <section class="articleLink">
            <linkArticle title="Hoe ontwikkelt de omzet van de auto- en motorbranche zich?"/>
        </section>
        <section class="articleLink">
            <linkArticle title="Hoeveel is de luchtvracht afgenomen in juni 2020?"/>
        </section>
        <section class="articleLink">
            <linkArticle title="Laad meer vragen " class="loadMore"/>
        </section>

    </div>
</template>

<script>
    // @ is an alias to /src
    import GraphArticle from '@/components/GraphArticle.vue'
    import SmallArticle from '@/components/SmallArticle.vue'
    import linkArticle from '@/components/linkArticle.vue'

    export default {
        name: 'product',
        components: {
            GraphArticle,
            SmallArticle,
            linkArticle
        }
    }
</script>

<style scoped>

</style>
