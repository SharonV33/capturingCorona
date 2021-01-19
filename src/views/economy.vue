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
      <section class="largeArticle" >
          <GraphArticle articleTitle="hoi"/>
      </section>
      <section class="articleLink">
            <linkArticle title="Zijn er regionale verschillen in economische ontwikkelingen?"/>
      </section>
      <section class="articleLink">
          <linkArticle title="Wat zijn de regionale gevolgen van de coronacrisis voor de economie en de arbeidsmarkt?"/>
      </section>
      <section class="articleLink">
          <linkArticle title="Wat zijn de economische gevolgen van de eerste coronagolf?"/>
      </section>
      <section class="articleLink">
          <linkArticle title="Wat zijn de regionale gevolgen van de coronacrisis voor de economie en de arbeidsmarkt?"/>
      </section>
      <section class="articleLink">
          <linkArticle title="Hoe ontwikkeld de Nederlandse goederenhandel?"/>
      </section>
  </div>
</template>

<script>
// @ is an alias to /src
import GraphArticle from '@/components/GraphArticle.vue'
import SmallArticle from '@/components/SmallArticle.vue'
import linkArticle from '@/components/linkArticle.vue'

export default {
  name: 'economy',
    components: {
        GraphArticle,
        SmallArticle,
        linkArticle
    }
}
</script>

<style scoped>

</style>
