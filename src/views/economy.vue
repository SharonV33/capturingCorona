<template>
  <div class="contentOverview">
      <h1 class="pageTitle">Economie</h1>
      <section class="smallArticle">
          <SmallArticle
                  question="Hoe ontwikkelt de omzet van de transport sector"
                  icon="fas fa-truck"
                  percentage="12"/>
      </section>
      <section class="smallArticle">
          <SmallArticle
                  question="Hoe ontwikkeld de omzet van de horeca sector"
                  icon="fas fa-beer"
                  percentage="-99"/>
      </section>
      <section class="smallArticle">
          <SmallArticle
                  question="Hoe ontwikkeld de omzet van de bouw sector"
                  icon="fas fa-construction"
                  percentage="99"/>
      </section>
      <section class="smallArticle">
          <NegativeSmallArticle />
      </section>
      <section class="largeArticle" >
          <GraphArticle articleTitle="hoi"/>
      </section>
  </div>
</template>

<script>
// @ is an alias to /src
import GraphArticle from '@/components/GraphArticle.vue'
import SmallArticle from '@/components/SmallArticle.vue'
import NegativeSmallArticle from '@/components/NegativeSmallArticle.vue'

export default {
  name: 'economy',
    components: {
        GraphArticle,
        SmallArticle,
        NegativeSmallArticle
    }
}
</script>

<style scoped>

</style>
