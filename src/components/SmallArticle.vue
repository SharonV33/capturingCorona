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
        <section v-else class="notStaticSmall">
        <i :class="iconClass"></i>
            <h3 id="percentage">{{positiveValue}}</h3>
        </section>
    </section>
</template>

<script>
    export default {
        name: "SmallArticle",
        props: {
            icon: { type: String},
            title: { type: String, required: true },
            subTitle: {type: String},
            percentage: { type: String},
            update: {type: String},
            isStatic: {type: String},
            src: {type: String}

        },
        computed: {
            iconClass () {
                return this.percentage < 0
                    ? `${this.icon} negative`
                    : `${this.icon} positive`
            },
            positiveValue () {
                return this.percentage > 0
                    ? `+${this.percentage}`
                    : `${this.percentage}`
            }
        },
        methods: {
            getImgUrl(imageSrc) {
                const images = require.context('../assets/static/', false, /\.png$/)
                return images('./' + imageSrc)
            },
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

    .notStaticSmall {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: 100%;

    }

    .iconArticle i {
        font-size: 3rem;
        justify-self: end;
    }

    .iconArticle #percentage {
        font-weight: lighter;
        color: #ffffff;
        font-size: 3.5rem;
        align-self: flex-start;
        margin: 0 auto;
    }

    .isStatic img {
        height: 6em;
    }
    .positive {
        color: green;
    }

    .negative {
        color: red;
    }

</style>