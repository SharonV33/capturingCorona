<template>
    <section class="linkArticle">
        <p>{{title}}</p>
        <i class="fa-solid fa-plus"></i>
    </section>
</template>

<script>
    export default {
        name: "linkArticle",
        props: {
            title: { type: String, required: true }
        },
    }
</script>

<style scoped>
    .linkArticle {
        background-color: #252A4A;
        height: 4rem;
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .linkArticle p {
        margin-left: 1rem;
        color: #ffffff;
    }

    .linkArticle i {
        color: #ffffff;
        margin-right: 2rem;
    }

</style>