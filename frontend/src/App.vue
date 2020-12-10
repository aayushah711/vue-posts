<template>
    <div v-if="!data.csv">
        <form v-if="!loading">
            <input ref="csv" type="file" accept=".csv" @change="checkFile" />
        </form>
        <div v-else>Loading...</div>
    </div>
    <post-item
        v-else
        v-for="post in data.csv"
        :key="post.postId"
        :post="post"
    ></post-item>
</template>

<script>
    import Papa from "papaparse";
    import PostItem from "./components/PostItem.vue";

    export default {
        name: "App",
        components: { PostItem },
        data() {
            return {
                data: {
                    // csv: null,
                    csv: [
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
                    ],
                },
                loading: false,
            };
        },
        watch: {},
        methods: {
            writeData(posts) {
                let columns = posts[0];
                let newCsv = [];
                for (let i = 1; i < posts.length; i++) {
                    let post = {};
                    let row = posts[i];
                    for (let j = 0; j < row.length; j++) {
                        post[columns[j]] = row[j];
                    }
                    newCsv.push(post);
                }
                this.data.csv = newCsv;
                this.loading = false;
            },
            readData(output) {
                // gets the data in arrays
                let posts = Papa.parse(output, { skipEmptyLines: true });
                posts = posts.data;
                console.log("posts", posts.length);
                this.writeData(posts);
            },
            readFile(file) {
                let reader = new FileReader();
                reader.readAsText(file, "UTF-8");
                reader.onload = (evt) => {
                    console.log(evt.target.result);
                    this.readData(evt.target.result);
                };
                reader.onerror = () => {
                    console.log("Errroorrrr...");
                };
            },
            checkFile() {
                this.loading = true;
                let file = this.$refs.csv.files[0];
                if (file) {
                    this.readFile(file);
                }
            },
        },
    };
</script>

<style>
    #app {
        font-family: Noto Sans, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        padding: 2vh;
        min-height: 98vh;
        background: #fafafa;
    }
    body {
        margin: 0;
    }
</style>
