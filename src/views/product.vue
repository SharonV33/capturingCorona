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
    </div>
</template>

<script>
    // @ is an alias to /src
    // import GraphArticle from '@/components/GraphArticle.vue'
    import SmallArticle from '@/components/SmallArticle.vue'

    export default {
        name: 'product',
        components: {
            // GraphArticle,
            SmallArticle
        }
    }
</script>

<style scoped>

</style>
