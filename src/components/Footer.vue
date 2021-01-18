<template>
    <div class="footerContent">
        <section class="services">
            <h3>Onze diensten</h3>
            <p>Cijfers/StatLine</p>
            <p>Bereken huurverhoging</p>
            <p>Open data</p>
            <p>Microdata</p>
            <p>Aanvullend statistisch onderzoek</p>
            <p>Urban Data Centers</p>
            <p>Publicaties</p>
            <p>Methoden</p>
            <p>Blaise</p>
        </section>
        <section class="survey">
            <h3>Voor deelnemers enquêtes</h3>
            <p>Bedrijven</p>
            <p>Centrale overheid</p>
            <p>Decentrale overheden</p>
            <p>Personen</p>
            <p>Privacy</p>
            <p>Beloningen</p>
        </section>
        <section class="about">
            <h3>Over ons</h3>
            <p>Contact</p>
            <p>Pers</p>
            <p>Organisatie</p>
            <p>Innovatie</p>
            <p>Werken bij</p>
            <p>Leren met het CBS</p>
        </section>
        <section class="siteInfo">
            <h3>Over deze site</h3>
            <p>Home</p>
            <p>Copyright</p>
            <p>Privacy</p>
            <p>Cookies</p>
            <p>Toegankelijkheid</p>
            <p>Kwetsbaarheid melden</p>
            <p>Archief</p>
        </section>
    </div>
</template>

<script>
    export default {
        name: "pageFooter"
    }
</script>

<style scoped>
    .footerContent {
        background: #E9E9E9;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        padding: 2rem 10rem;
    }

    .footerContent section h3 {
        color: #000000;
        font-size: 0.8rem;
    }

    .footerContent section p {
        font-size: 0.8em;
    }

</style>