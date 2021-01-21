<template>
    <div class="contentOverview">
        <h1 class="pageTitle">Het effect van corona op ons sociale leven</h1>

        <section class="largeArticle" >
            <GraphArticle
                    articleTitle=""
                    uniqueID="socialStatic"
                    update="14-01-2021 10:12"
                    isStatic="true"
                    src="socialStatic.png"
                    class="staticLargeArticle"
            />
        </section>
        <section class="smallArticle">
            <SmallArticle
                    title="Aantal misdrijven in vergelijking tot vorig jaar"
                    icon="fas fa-siren-on"
                    update="14-01-2021 10:12"
                    :percentage="-8963"
            />
        </section>

        <section class="smallArticle">
            <SmallArticle
                    title=""
                    isStatic="true"
                    src="vakgebieden.png"
            />
        </section>

        <p class="subTitlePage">Overige vragen en antwoorden</p>
        <section class="articleLink">
            <linkArticle title="Hoe is de leefsituatie van Nederlandse ouderen?"/>
        </section>
        <section class="articleLink">
            <linkArticle title="Hoeveel Nederlanders kampen met eenzaamheid?"/>
        </section>
        <section class="articleLink">
            <linkArticle title="Hoe ontwikkelt de criminaliteit zich?"/>
        </section>
        <section class="articleLink">
            <linkArticle title="Hoe ontwikkelt de bevolking zich?"/>
        </section>
        <section class="articleLink">
            <linkArticle title="Hoeveel contact hebben mensen normaal gesproken met familie, vrienden of buren?"/>
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
        name: 'social',
        components: {
            GraphArticle,
            SmallArticle,
            linkArticle
        }
    }
</script>

<style scoped>

</style>
