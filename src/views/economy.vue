<template>
  <div>
      <section class="largeArticle">
          <GraphArticle />
      </section>
      <section class="smallArticle">
          <SmallArticle />
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
    div {
        display: grid;
        grid-template-columns: 10% 40% 40% 10%;
        grid-auto-flow: column;
    }

    .largeArticle {
        border: 1px solid darkgray;
        border-radius: 9px;
        grid-column-start: 2;
        grid-column-end: 3;
        width: 70vw;
        padding-left: 1rem;
        margin-bottom: 2rem;
    }

    .smallArticle {
        grid-column-start: 2;
        border: 1px solid darkgray;
        border-radius: 9px;
        width: 35vw;

    }
</style>
