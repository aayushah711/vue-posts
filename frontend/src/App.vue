<template>
  <div class="container">
    <section v-if="!data.csv" class="first">
      <h1>ShareChat Post Visualization Tool</h1>
      <drag-drop v-if="!loading" @fileReceived="checkFile">
        <input ref="csv" type="file" accept=".csv" @change="checkFile" />
      </drag-drop>
      <div v-else>Loading...</div>
    </section>

    <section v-else>
      <virtual-scroller :items="data.csv"></virtual-scroller>
      <div v-if="data.csv" class="fab" @click="goBack" title="Go back">
        <img src="resources/svg/left.svg" alt="go back" title="Go back" height="25" />
      </div>
    </section>
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
        csv: null
      },
      loading: false
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
      reader.onload = evt => {
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
    }
  }
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
}
body,
html,
#app,
.container,
section,
.scroller {
  height: 100%;
}
section.first {
  padding: 40px;
}
body,
html {
  background: #f5f2f2;
  margin: 0;
}
.fab {
  position: fixed;
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
