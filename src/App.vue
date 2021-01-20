<template>
  <div>
    <section class="header">
      <section id="nav">
        <img src="https://www.cbs.nl/Content/images/cbs-brand.svg" alt="cbs logo">
        <ul>
          <li>
            <a>Cijfers</a>
          </li>
          <li>
            <a>Arbeid en inkomen</a>
          </li>
          <li>
            <a>Economie</a>
          </li>
          <li>
            <a>Maatschappij</a>
          </li>
          <li>
            <a>Regio</a>
          </li>
          <li>
            <a>Corporate</a>
          </li>
        </ul>
        <section>
          <img id="searchIcon" src="@/assets/search.png" alt="search icon">
          <a>English</a>
        </section>
      </section>
      <section id="search">
        <router-link  to="/">
          <i class="fa-solid fa-grid-2"> Overzicht</i>
        </router-link>
          <input type="text" placeholder="Stel je vraag">
      </section>
    </section>
    <section class="body">
      <section id="category">
        <div class="economy">
          <router-link to="/economy">
            <img src="@/assets/economy.svg" alt="economy icon">
            <a>Economie</a>
          </router-link>
        </div>
        <div class="social">
          <router-link to="/social">
            <img src="@/assets/social.svg" alt="social icon">
            <a>Sociaal</a>
          </router-link>
        </div>
        <div class="medical">
          <router-link to="/medical">
            <img src="@/assets/medical.svg" alt="medical icon">
            <a>Medisch</a>
          </router-link>
        </div>
        <div class="government">
          <router-link to="/government">
            <img src="@/assets/government.svg" alt="government icon">
            <a>Overheid</a>
          </router-link>
        </div>
        <div class="product">
          <router-link to="/product">
            <img src="@/assets/product.svg" alt="product icon">
            <a>Product & handel</a>
          </router-link>
        </div>
        <div class="transport">
          <router-link to="/transport">
            <img src="@/assets/transport.svg">
            <a>Transport & vervoer</a>
          </router-link>
        </div>
        <div class="work">
          <router-link to="/work">
            <img src="@/assets/work.svg" alt="work icon">
            <a>Werk & loon</a>
          </router-link>
        </div>
      </section>
      <section class="bodyContent">
        <router-view/>
      </section>
    </section>
    <section class="footer">
      <pageFooter />
    </section>
  </div>
</template>

<script>
  // @ is an alias to /src
  import pageFooter from '@/components/Footer.vue'


  export default {
    name: 'app',
    components: {
      pageFooter
    }
  }
</script>

<style lang="scss">
  @import 'assets/scss/styles.scss';

</style>
