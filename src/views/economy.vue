<template>
  <div class="contentOverview">
      <section class="smallArticle">
          <SmallArticle />
      </section>
      <section class="smallArticle">
          <SmallArticle />
      </section>
      <section class="smallArticle">
          <SmallArticle />
      </section>
      <section class="smallArticle">
          <SmallArticle />
      </section>
      <section class="largeArticle">
          <GraphArticle />
      </section>
  </div>
</template>

<script>
// @ is an alias to /src
import GraphArticle from '@/components/GraphArticle.vue'
import SmallArticle from'@/components/SmallArticle.vue'

export default {
  name: 'economy',
    components: {
        GraphArticle,
        SmallArticle
    }
}
</script>

<style scoped>

    .contentOverview {
        display: grid;
        grid-template-columns: 20% 20% 20% 20%;
        grid-auto-flow: column;
        grid-column-gap: 2rem;
        width:80%;
        padding-top: 1rem;
    }

    .largeArticle {
        border: 1px solid darkgray;
        border-radius: 9px;
        grid-row-start: 2;
        grid-column-start: 1;
        grid-column-end: 5;
        padding-left: 1rem;
        margin-bottom: 2rem;
        margin-top: 1rem;
    }

    .smallArticle {
        border: 1px solid darkgray;
        border-radius: 9px;
        grid-row-start: 1;
    }
</style>
