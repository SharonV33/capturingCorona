<template>
    <div class="contentOverview">
        <h1 class="pageTitle">Hoe gaat het met nederland tijdens corona?</h1>
        <section class="largeArticleHome" >
            <GraphArticle
                    articleTitle="hoi"
                    uniqueID="branchDevelopmentChart"
                    update="14-01-2021 10:12"
                    isStatic="false"
                    :data="economyData"

            />
        </section>
        <section class="largeArticleHome" >
            <GraphArticle
                    articleTitle="Aantal pasagiers per luchthaven"
                    uniqueID="airportChart"
                    update="14-01-2021 10:12"
                    isStatic="false"
                    :data="transportData"
            />
        </section>

    </div>
</template>

<script>
    // @ is an alias to /src
    import GraphArticle from '@/components/GraphArticle.vue'
    import economyData from '@/assets/data/economyData.js'
    import transportData from '@/assets/data/transportData.js'

    export default {
        name: 'economy',
        components: {
            GraphArticle
        },
        data () {
            return {
                transportData,
                economyData
            }
        }
    }
</script>

<style>

</style>
