<template>
  <div class="home">
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
                  <input type="text" placeholder="stel je vraag">
              </form>
          </section>
      </section>
      <section class="body">
          <section id="category">
              <div class="economy">
                  <img src="@/assets/economy.svg">
              </div>
              <div class="social">
                  <img src="@/assets/social.svg">
              </div>
              <div class="medical">
                  <img src="@/assets/medical.svg">
              </div>
              <div class="product">
                  <img src="@/assets/product.svg">
              </div>
              <div class="government">
                  <img src="@/assets/government.svg">
              </div>
              <div class="transport">
                  <img src="@/assets/transport.svg">
              </div>
              <div class="work">
                  <img src="@/assets/work.svg">
              </div>
          </section>
        <Content />
      </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Content from '@/components/content.vue'

export default {
  name: 'Home',
    components: {
        Content
    }
}
</script>

<style>
    .body {
        display: flex;
        flex-direction: row;
    }
</style>
