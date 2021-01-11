<template>
    <section>
        <h3>Hoe ontwikkelt de omzet van de transportsector zich?</h3>
        <svg>
            <use href="../assets/smallVisualisationIcons/truck.svg" id="positive"></use>
        </svg>
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

    svg {
        width: 5rem;
        grid-column-start: 1;
    }

   section svg * {
        fill: green;
        width: 2rem;
       height: 2rem;
    }

    .negative {
        fill: red;
    }

</style>