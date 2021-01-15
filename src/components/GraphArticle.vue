<template>
    <section class="articleContainer">
        <section class="mainContent">
        <p class="subject">ontwikkeling omzet</p>
        <h3>Hoe ontwikkeld de omzet van diverse sectoren?</h3>
        <form>
            <input type="checkbox" id="transport">
            <label for="transport">Transport</label>
            <input type="checkbox" id="horeca">
            <label for="horeca">Horeca</label>
            <input type="checkbox" id="retail">
            <label for="retail">Detailhandel</label>
            <input type="checkbox" id="buisnessService">
            <label for="buisnessService">Zakelijke dienstverlening</label>
            <input type="checkbox" id="carMotor">
            <label for="carMotor">Auto & morotbranch</label>
            <input type="checkbox" id="construction">
            <label for="construction">Bouw</label>
            <input type="checkbox" id="wholesale">
            <label for="wholesale">Groothandel</label>
        </form>
        <lineChart class="chart"/>
        <!--img used to simulate chart until real chart is build-->
        <!--<img src="../assets/testchart.png"/>-->
        </section>

        <button v-on:Click="hideText">
            <i class="fas fa-chevron-left"></i>
            <i class="fas fa-chevron-left"></i>
            Lees meer
        </button>
        <section class="readMoreSection hideReadMore" :id="articleTitle">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
                vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
                viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                Curabitur ullamcorper ultricies nisi. Nam eget dui.</p>
        </section>
    </section>
</template>

<script>
    import lineChart from '@/components/lineChart.vue'
    export default {
        name: "GraphArticle",
        components: {
            lineChart
        },
        props: {
            articleTitle: {type: String, required: true}
        },
        methods: {
            hideText: function () {
                const readMore = document.getElementById(this.articleTitle)
                readMore.classList.toggle("hideReadMore")
            }
        }
    }
</script>

<style scoped>

    .articleContainer {
        display: flex;
        max-height: 50rem;
        flex-wrap: wrap;
    }

    .subject {
        color: darkgray;
    }

    form {
        display: flex;
        flex-wrap: wrap;
    }

    label {
        color: #091d23;
        margin-right: 1.5rem;
    }


    .chart {
        width: 80%;
        padding: 2rem 0;
        margin-right: 2rem;
    }

    button {
        background-color: #ffffff;
        border: 2px solid #271d6c;
        position: relative;
        align-self: flex-end;
        height: 2rem;
        width: 25rem;
        padding: 0.3rem 1rem;
        z-index: 3;
    }

    .readMoreSection {
        border-left: 1px solid darkgray;
        width: 80%;
        padding: 0 2vw;
    }

    .hideReadMore {
        display: none;
    }

</style>