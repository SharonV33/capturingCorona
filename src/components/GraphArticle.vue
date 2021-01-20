<template>
    <section class="articleContainer">
        <section class="mainContent">
            <h3 class="subject">{{articleTitle}}</h3>
            <p class="lastUpdated">Laatst bijgewerkt: {{update}}</p>
            <section class="notStatic" v-if="isStatic === 'false'">
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
                <section class="content">
                    <lineChart class="line" :uniqueID="uniqueID" :data="data"/>

                    <button v-on:Click="hideText">
                        Lees meer
                    </button>
                    <section class="readMoreSection hideReadMore" :id="uniqueID">
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
            </section>
            <section v-else class="isStatic">
                <img :src="getImgUrl(src)" alt="static chart">
            </section>
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
            articleTitle: {type: String, required: true},
            uniqueID: {type: String, required: true},
            update: {type: String},
            src: {type: String},
            isStatic: {type: String},
            data: { type: Array, default: () => [] }
        },
        methods: {
            hideText: function () {
                const readMore = document.getElementById(this.uniqueID)
                readMore.classList.toggle("hideReadMore")
            },
            getImgUrl(imageSrc) {
                const images = require.context('../assets/static/', false, /\.png$/)
                return images('./' + imageSrc)
            }
        }
    }
</script>

<style scoped>

    .articleContainer {
        background-color: #252A4A;
        display: flex;
        min-height: 50rem;
        flex-direction: row;
        border-radius: 15px;
        padding-left: 2rem;
    }

    .mainContent {
        z-index: 0;
        position: relative;
        width: 100%;
    }

    .subject {
        color: #ffffff;
    }
    .lastUpdated {
        color: #ffffff;
        opacity: 0.4;
        font-size: 0.5rem;
    }

    .notStatic {
        height: 70%;
    }

    .isStatic img {
        width: 95%;
    }

    form {
        display: flex;
        flex-wrap: wrap;
    }

    label {
        color: #ffffff;
        margin-right: 1.5rem;
    }

    .content {
        display: flex;
        height: 100%;
    }

    .line {
        width: 90%;
        padding: 2rem 0;
        margin-right: 2rem;
        height: 100%;
    }

    button {
        background-color: #ffffff;
        border: 2px solid #271d6c;
        border-radius: 20px;
        position: relative;
        align-self: flex-end;
        height: 2rem;
        min-width: 10rem;
        padding: 0.3rem 1rem;
        margin: 0 1rem 2rem 0;
    }

    .readMoreSection {
        border-left: 1px solid darkgray;
        width: 80%;
        min-height: 50rem;
        padding: 0 2vw;
        color: #ffffff;
    }

    .hideReadMore {
        display: none;
    }

</style>