<template>
  <div>
      <section class="singleArticle">
        <GraphArticle />
      </section>
      <section class="singleArticle">
          <h3>Hoe ontwikkeld de omzet van diverse sectoren?</h3>
      </section>
  </div>
</template>

<script>
import GraphArticle from '@/components/GraphArticle.vue'

export default {
  name: 'content',
    components: {
        GraphArticle
    }
}
</script>

<style scoped>
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .singleArticle {
        border: 1px solid darkgray;
        border-radius: 9px;
        width: 70vw;
        padding-left: 1rem;
        margin-bottom: 2rem;
    }
</style>
