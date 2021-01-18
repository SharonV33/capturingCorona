<template>
    <section class="iconArticle">
        <h3 class="iconTitle">{{question}}?</h3>
        <i :class="iconClass" />
        <h3 id="percentage">{{ percentage }}%</h3>
    </section>
</template>

<script>
    export default {
        name: "SmallArticle",
        props: {
            icon: { type: String, required: true },
            question: { type: String, required: true },
            percentage: { type: String, required: true },
        },
        computed: {
            iconClass () {
                return this.percentage < 0
                    ? `${this.icon} negative`
                    : `${this.icon} positive`
            }
        }
    }
</script>

<style scoped>
    .iconArticle {
        background-color: #252A4A;
        border-radius: 15px;
        display: grid;
        grid-template-columns: 50% 50%;
        grid-auto-flow: column;
        justify-items: center;
        height: 6rem;
        padding: 1rem;
    }

    .iconArticle .iconTitle {
        color: #ffffff;
        text-align: center;
        grid-column-start: 1;
        grid-column-end: 3;
        font-size: 0.7rem;
        margin-bottom: 0.5rem;
        margin-top: 0;
    }

    .iconArticle i {
        grid-column-start: 1;
        font-size: 2rem;
    }

    .iconArticle #percentage {
        color: #ffffff;
        grid-column-start: 2;
        font-size: 2rem;
        margin: 0;
    }
    .positive {
        color: green;
    }

    .negative {
        color: red;
    }

</style>