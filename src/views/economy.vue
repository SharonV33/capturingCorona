<template>
  <div class="contentOverview">
      <h1 class="pageTitle">Onze economie tijdens het coronavirus</h1>
      <section class="largeArticle" >
          <GraphArticle
                  articleTitle="Hoe ontwikkeld de omzet van diverse sectoren"
                  uniqueID="branchDevelopmentChart"
                  update="14-01-2021 10:12"
                  isStatic="false"
                  :data="economyData"

          />
      </section>

      <section class="smallArticle">
          <SmallArticle
                  title="Omzetontwikkeling horeca"
                  subTitle="Ten opzichten van 3e kwartaal 2020"
                  icon="fas fa-euro"
                  percentage="12%"
                  update="14-01-2021 10:12"
          />
      </section>
      <section class="smallArticle">
          <SmallArticle
                  title="Grootste omzet verschil detailhandel"
                  subTitle="Ten opzichten van 2019"
                  update="14-01-2021 10:12"
                  isStatic="true"
                  src="detailhandel.png"
          />
      </section>

      <section class="largeArticle" >
          <GraphArticle
                  articleTitle="OntwikkelingEconomy"
                  uniqueID="staticEconomy"
                  update="14-01-2021 10:12"
                  isStatic="true"
                  src="economyStatic.png"
                    class="staticLargeArticle"
          />
      </section>

      <section class="smallArticle">
          <SmallArticle
                  title="Ontwikkeling Economie"
                  subTitle="Ten opzichten van 2019"
                  icon="fas fa-euro"
                  percentage="+7.8%"
                  update="14-01-2021 10:12"
          />
      </section>

      <section class="smallArticle">
          <SmallArticle
                  title="Aantal banen"
                  subTitle="Ten opzichten van 2019"
                  icon="fas fa-briefcase"
                  percentage="+165000"
                  update="14-01-2021 10:12"
          />
      </section>

      <section class="largeArticle" >
          <GraphArticle
                  articleTitle=""
                  uniqueID="staticEconomy"
                  update=""
                  isStatic="true"
                  src="economyTrust.png"
                  class="staticLargeArticle"
          />
      </section>

      <section class="smallArticle">
          <SmallArticle
                  title="Aantal faillissementen"
                  subTitle=""
                  update="14-01-2021 10:12"
                  isStatic="true"
                  src="faillissementen.png"
          />
      </section>

      <section class="smallArticle">
          <SmallArticle
                  title="Provincie met het laagste ondernemersvertrouwen"
                  subTitle="4e kwartaal 2020"
                  update="14-01-2021 10:12"
          />
      </section>

      <p class="subTitlePage">Overige vragen en antwoorden</p>
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
import economyData from '@/assets/data/economyData.js'

export default {
  name: 'economy',
    components: {
        GraphArticle,
        SmallArticle,
        linkArticle
    },
    data () {
        return {
            economyData,
        }
    }

}
</script>

<style>
</style>
