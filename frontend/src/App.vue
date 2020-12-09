<template>
    <post-item
        v-for="post in posts"
        :key="post.postId"
        :post="post"
    ></post-item>
    <VueCsvImport
        :map-fields="[
            'url',
            'userId',
            'postId',
            'tagGenre',
            'type',
            'language',
            'shares',
            'likes',
            'favs',
            'comment_created',
            'views',
            'eByV',
            'tagName',
        ]"
    ></VueCsvImport>
</template>

<script>
    import { VueCsvImport } from "vue-csv-import";
    import PostItem from "./components/PostItem.vue";
    export default {
        // name: "App",
        components: { PostItem, VueCsvImport },
        setup() {
            const posts = [
                {
                    url:
                        "https://cdn.sharechat.com/1a40b23d_1606974965867_sc.mp4",
                    userId: 59096277,
                    postId: 5906298332,
                    tagGenre: "Humour and Fun",
                    type: "video",
                    language: "Marathi",
                    shares: 10,
                    likes: 35,
                    favs: 13,
                    comment_created: 0,
                    views: 5429,
                    eByV: 0.010683367,
                    tagName: "tagName",
                },
                {
                    url:
                        "https://cdn.sharechat.com/25fa0daa_1606900878523_sc.mp4",
                    userId: 426114987,
                    postId: 9564235332,
                    tagGenre: "Politics",
                    type: "video",
                    language: "Punjabi",
                    shares: 70,
                    likes: 695,
                    favs: 100,
                    comment_created: 19,
                    views: 15459,
                    eByV: 0.057183518,
                    tagName: "tagName",
                },
            ];
            return { posts };
        },
    };
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
