<template>
    <section class="iconArticle">
        <h3 class="iconTitle">{{question}}?</h3>
        <i :class="smallArticleIcon" :id="positiveOrNegative"></i>
        <h3 id="percentage">{{smallArticlePercentage}}</h3>

    </section>
</template>

<script>
    export default {
        name: "SmallArticle",
        props: {
            smallArticleIcon: String,
            question: String,
            smallArticlePercentage: String,
            positiveOrNegative: String,
        },
        mounted() {
            this.plusOrMinus()
        },
        methods: {
            plusOrMinus: function() {
                const percentage = this.smallArticlePercentage
                const firstLetter = (percentage.charAt(0))
                if (firstLetter === "+") {
                    // this.positiveOrNegative = "positive"
                }
                else if (firstLetter === "-") {
                    // this.positiveOrNegative = "negative"
                }
            }
        }
    }
</script>

<style scoped>
    .iconArticle {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-auto-flow: column;
        justify-items: center;
        height: 6rem;
        padding: 1rem;
    }

    .iconArticle .iconTitle {
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
        grid-column-start: 2;
        font-size: 2rem;
        margin: 0;
    }

   .iconArticle #positive {
       color: green;
    }

    .iconArticle #negative {
        color: red;
    }

</style>