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
        <section class="bottomFooter">
            <section class="socialIcons">
                <i class="fab fa-linkedin"></i>
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-instagram-square"></i>
                <i class="fab fa-youtube-square"></i>
                <i class="fab fa-twitter-square"></i>
                <i class="fas fa-rss-square"></i>
            </section>
            <section>
                <p>Publicatieplanning</p>
                <p>Abonnementen</p>
            </section>
        </section>
        <section class="copyright">
            <h2>Voor wat er feitelijk gebeurt</h2>
            <p><i class="far fa-copyright"></i>CBS 2021</p>
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
        display: grid;
        grid-template-columns: 20% auto;
        grid-auto-flow: row;
        padding: 2rem 15rem 0 15rem;
    }

    .footerContent section h3 {
        color: #000000;
        font-size: 0.8rem;
    }

    .footerContent section p {
        font-size: 0.8em;
    }

    .bottomFooter {
        grid-column-start: span 4;
        display: flex;
        justify-content: space-between;
        margin-top: 5rem;
        margin-bottom: 3rem;
    }

    .bottomFooter .socialIcons {
        width: 30rem;
        display: flex;
        justify-content: space-between;
    }
    .bottomFooter .socialIcons i {
        font-size: 3em;
        color: #555555;
    }

    .bottomFooter section:nth-child(2) {
        width: 20rem;
        display: flex;

    }
    .bottomFooter section:nth-child(2) {
        width: 20rem;
        display: flex;
    }

     .bottomFooter section:nth-child(2) p {
        margin-right: 2rem;
    }
    .copyright {
        background-color: #ffffff;
        width: 71.5vw;
        margin-left: -15rem;
        display: flex;
    }

    .copyright {
        color: #163A72!important;
        justify-content: space-between;
    }

    .copyright {
        padding: 0.5rem 15rem;
    }

    .copyright p {
        margin-right: 6rem;
    }

</style>