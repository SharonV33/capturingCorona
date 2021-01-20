<template>
    <section class="iconArticle">
        <section>
            <h3 class="iconTitle">{{title}}</h3>
            <p class="subTitle">{{subTitle}}</p>
            <p class="lastUpdated">Laatst bijgewerkt {{update}}</p>
        </section>
        <section v-if="isStatic === `true`" class="isStatic">
            <img :src="getImgUrl(src)" alt="static chart">
        </section>
        <section v-else >
        <i :class="iconClass"></i>
            <h3 id="percentage">{{ percentage }}</h3>
        </section>
    </section>
</template>

<script>
    export default {
        name: "SmallArticle",
        props: {
            icon: { type: String, required: true },
            title: { type: String, required: true },
            subTitle: {type: String},
            percentage: { type: String, required: true },
            update: {type: String},
            isStatic: {type: String},
            src: {type: String}

        },
        computed: {
            iconClass () {
                return this.percentage < 0
                    ? `${this.icon} negative`
                    : `${this.icon} positive`
            }
        },
        methods: {
            getImgUrl(imageSrc) {
                const images = require.context('../assets/static/', false, /\.png$/)
                return images('./' + imageSrc)
            }
        }

    }
</script>

<style scoped>
    .iconArticle {
        background-color: #252A4A;
        border-radius: 15px;
        display: grid;
        grid-template-columns: 60% 40%;
        grid-template-rows: 2rem auto;
        grid-auto-flow: row;
        justify-items: center;
        height: 6rem;
        padding: 1rem 3rem 1rem 1rem;
    }

    .iconTitle {
        color: #ffffff;
        font-size: 1rem;
        margin-bottom: 0.5rem;
        margin-top: 0;
    }

    .subTitle {
        color: #ffffff;
        font-size: 0.4rem;
    }

    .lastUpdated {
        color: #ffffff;
        opacity: 0.4;
        font-size: 0.5rem;
    }

    .iconArticle i {
        font-size: 3rem;
        justify-self: end;
    }

    .iconArticle #percentage {
        font-weight: lighter;
        color: #ffffff;
        font-size: 4rem;
        margin: 0;
        grid-row-start: 2;
        grid-column-start: 2;
        align-self: start;
    }
    .positive {
        color: green;
    }

    .negative {
        color: red;
    }

</style>