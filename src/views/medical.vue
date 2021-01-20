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

    </div>
</template>

<script>
    // @ is an alias to /src
    // import GraphArticle from '@/components/GraphArticle.vue'
    import SmallArticle from '@/components/SmallArticle.vue'

    export default {
        name: 'medical',
        components: {
            // GraphArticle,
            SmallArticle
        }
    }
</script>

<style scoped>

</style>
