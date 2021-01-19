<template>
  <div class="contentOverview">
    <h1 class="pageTitle">Transport en vervoer</h1>
    <section class="largeArticle" >
      <GraphArticle
              articleTitle="Aantal pasagiers per luchthaven"
              uniqueID="airportChart"
              update="14-01-2021 10:12"
              isStatic="false"
              data="transPortData"
      />
    </section>
    <section class="smallArticle">
      <SmallArticle
              title="Hoeveel minder reizen we met het openbaar vervoer?"
              subTitle="Gemiddelde van 10 maart tot 10 augustus t.o.v. 2019"
              icon="fas fa-address-card"
              update="14-01-2021 10:12"
              :percentage="-560000"/>
    </section>
    <section class="smallArticle">
      <SmallArticle
              title="Verschil check-ins om 8:00"
              icon="far fa-clock"
              update="14-01-2021 10:12"
              :percentage="-35"/>
    </section>
    <section class="largeArticle">
      <GraphArticle
          articleTitle="static article"
          uniqueID="transportMovementChart"
          update="14-01-2021 10:12"
          isStatic="true"
          src="transportStatic.png"
          />
    </section>
  </div>
</template>

<script>
  // @ is an alias to /src
  import GraphArticle from '@/components/GraphArticle.vue'
  import SmallArticle from '@/components/SmallArticle.vue'
  import transportData from '@/assets/data/transportData.js'

  export default {
    name: 'transport',
    components: {
      GraphArticle,
      SmallArticle
    },
    data () {
      return {
        transportData,
      }
    }
  }
</script>

<style scoped>

</style>
