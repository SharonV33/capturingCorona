<template>
  <div>
    <section class="header">
      <section id="nav">
        <img src="https://www.cbs.nl/Content/images/cbs-brand.svg">
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
          <img id="searchIcon" src="@/assets/search.png">
          <a>English</a>
        </section>
      </section>
      <section id="search">
        <form>
          <input type="text" placeholder="Stel je vraag">
        </form>
      </section>
    </section>
    <section class="body">
      <section id="category">
        <div class="economy">
          <router-link to="/">
          <img src="@/assets/economy.svg">
            <p>Economie</p>
          </router-link>
        </div>
        <div class="social">
          <img src="@/assets/social.svg">
          <p>Sociaal</p>
        </div>
        <div class="medical">
          <img src="@/assets/medical.svg">
          <p>Medisch</p>
        </div>
        <div class="product">
          <img src="@/assets/product.svg">
          <p>product & handel</p>
        </div>
        <div class="government">
          <img src="@/assets/government.svg">
          <p>Overheid</p>
        </div>
        <div class="transport">
          <router-link to="/transport">
            <img src="@/assets/transport.svg">
            <p>Transport & vervoer</p>
          </router-link>
        </div>
        <div class="work">
          <img src="@/assets/work.svg">
          <p>Werk & look</p>
        </div>
      </section>
      <section class="bodyContent">
        <router-view/>
      </section>
    </section>
  </div>
</template>

<style lang="scss">
  @import 'assets/scss/styles.scss';

</style>
