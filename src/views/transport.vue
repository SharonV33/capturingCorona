<template>
  <div class="contentOverview">
    <h1 class="pageTitle">Transport en vervoer</h1>
    <section class="largeArticle" >
      <GraphArticle
              articleTitle="Aantal pasagiers per luchthaven"
              uniqueID="airportChart"
              update="14-01-2021 10:12"
              isStatic="false"
              :data="transportData"
              readMoreText="De omzet van de transportsector daalde in het derde kwartaal van 2020 met ruim 15 procent in vergelijking met dezelfde periode vorig jaar. Bij veel branches stond de omzet in het teken van de coronamaatregelen. Vooral in de luchtvaart daalde de omzet (63 procent). Bij post- en koeriersdiensten steeg de omzet in het derde kwartaal als enige branche in de transportsector, met bijna 11 procent. De omzet uit internetverkopen nam zelfs met 39 procent toe."
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
