<template>
    <section>
        <h3>Hoe ontwikkelt de omzet van de transportsector zich?</h3>
        <i class="fas fa-truck"></i>

    </section>
</template>

<script>
    export default {
        name: "SmallArticle"
    }
</script>

<style scoped>
    section {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-auto-flow: column;
    }

    h3 {
        grid-column-start: 1;
        grid-column-end: 3;
    }

    img {
        width: 30rem;
        grid-column-start: 1;
    }

   #positive {
       color: green;
    }

    #negative {
        color: red;
    }

</style>