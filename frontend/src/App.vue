<template>
    <div v-if="!data.csv" class="container">
        <h1>ShareChat Post Visualization Tool</h1>
        <drag-drop v-if="!loading" @fileReceived="checkFile">
            <input ref="csv" type="file" accept=".csv" @change="checkFile" />
        </drag-drop>
        <div v-else>Loading...</div>
    </div>
    <virtual-scroller :items="data.csv" v-else></virtual-scroller>
    <div v-if="data.csv" class="fab" @click="goBack" title="Go back">
        <img
            src="resources/svg/left.svg"
            alt="go back"
            title="Go back"
            height="25"
        />
    </div>
</template>

<script>
    import Papa from "papaparse";
    import VirtualScroller from "./components/VirtualScroller";
    import DragDrop from "./components/DragDrop";

    export default {
        name: "App",
        created() {
            document.title = "ShareChat Post Visualization Tool";
        },
        components: { VirtualScroller, DragDrop },
        data() {
            return {
                data: {
                    csv: null,
                    // csv: [
                    //     {
                    //         id: 1,
                    //         url:
                    //             "https://cdn.sharechat.com/1a40b23d_1606974965867_sc.mp4",
                    //         userId: 59096277,
                    //         postId: 5906298332,
                    //         tagGenre: "Humour and Fun",
                    //         type: "video",
                    //         language: "Marathi",
                    //         shares: 10,
                    //         likes: 35,
                    //         favs: 13,
                    //         comment_created: 0,
                    //         views: 5429,
                    //         eByV: 0.010683367,
                    //         tagName: "tagName",
                    //     },
                    //     {
                    //         id: 2,
                    //         url:
                    //             "https://cdn.sharechat.com/25fa0daa_1606900878523_sc.mp4",
                    //         userId: 426114987,
                    //         postId: 9564235332,
                    //         tagGenre: "Politics",
                    //         type: "video",
                    //         language: "Punjabi",
                    //         shares: 70,
                    //         likes: 695,
                    //         favs: 100,
                    //         comment_created: 19,
                    //         views: 15459,
                    //         eByV: 0.057183518,
                    //         tagName: "tagName",
                    //     },
                    // ],
                },
                loading: false,
            };
        },
        watch: {},
        methods: {
            goBack() {
                this.data.csv = null;
            },
            writeData(posts) {
                let columns = posts[0];
                let newCsv = [];
                for (let i = 1; i < posts.length; i++) {
                    let row = posts[i];
                    let post = {};
                    // let post = { id: row[2] }; // id required for virtual scrolling
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
                console.log(posts.length, "posts");
                this.writeData(posts);
            },
            readFile(file) {
                let reader = new FileReader();
                reader.readAsText(file, "UTF-8");
                reader.onload = (evt) => {
                    this.readData(evt.target.result);
                };
                reader.onerror = () => {
                    console.log("Errroorrrr...");
                };
            },
            checkFile(file) {
                this.loading = true;
                // let file = this.$refs.csv.files[0];
                if (file) {
                    this.readFile(file);
                }
            },
        },
    };
</script>

<style>
    #app {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        min-height: 98vh;
        height: 100%;
    }
    .container {
        padding: 40px;
    }
    body,
    html {
        background: #f5f2f2;
        margin: 0;
        height: 100%;
    }
    .fab {
        position: absolute;
        padding: 20px;
        bottom: 20px;
        right: 20px;
        height: 25px;
        width: 25px;
        /* box-shadow: 0 0 2px 0 black; */
        border-radius: 50%;
        background-color: #1aa0e8;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        color: white;
        transition: ease-in 0.1s;
    }
    .fab:hover {
        transform: scale(1.2);
    }
</style>
