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
                data: { csv: null },
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
                this.loading = false;
            },
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
