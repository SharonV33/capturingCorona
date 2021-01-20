<template>
    <div class="contentOverview">
        <h1 class="pageTitle">Product en handel</h1>
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
    // import GraphArticle from '@/components/GraphArticle.vue'
    import SmallArticle from '@/components/SmallArticle.vue'
    import linkArticle from '@/components/linkArticle.vue'

    export default {
        name: 'product',
        components: {
            // GraphArticle,
            SmallArticle,
            linkArticle
        }
    }
</script>

<style scoped>

</style>
