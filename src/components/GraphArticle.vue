<template>
    <section>
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
        <svg class="chart"></svg>
        <!--img used to simulate chart until real chart is build-->
        <img src="../assets/testchart.png"/>
    </section>
</template>

<script>
    export default {
        name: "GraphArticle"
    }
</script>

<style scoped>
    .subject {
        color: darkgray;
    }

    form {
        display: flex;
        width: 80%;
    }

    label {
        color: #091d23;
        margin-right: 1.5rem;
    }

    .chart {
        display: none;
    }

    img {
        padding: 2rem 0;
        width: 80%;
    }

</style>