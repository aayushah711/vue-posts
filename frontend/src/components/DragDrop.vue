<template>
    <div id="file-drag-drop" ref="fileformDiv">
        <form
            ref="fileform"
            @drag.prevent="preventDefaultAlert"
            @dragenter.prevent="preventDefault"
            @dragstart.prevent="preventDefault"
            @dragend.prevent="preventDefault"
            @dragleave.prevent="preventDefault"
            @dragover.prevent="preventDefault"
            @drop.prevent="preventDefaultAlert"
        >
            <span class="drop-files"> Drop a csv file here!</span>
        </form>
    </div>
</template>

<script>
    import { ref } from "vue";
    export default {
        emits: ["fileReceived"],
        setup(_, { emit }) {
            const file = ref(null);
            const fileformDiv = ref(null);
            const fileform = ref(null);
            const preventDefaultAlert = (e) => {
                console.log("dropped");
                file.value = e.dataTransfer.files[0];
                console.log(file.value);
                let fileType = file.value.name.split(".");
                fileType = fileType[fileType.length - 1];
                if (fileType === "csv") {
                    emit("fileReceived", file.value);
                } else {
                    alert("Insert a csv file");
                }
            };

            return { file, fileformDiv, fileform, preventDefaultAlert };
        },
        // data() {
        //     return { file: null };
        // },
    };
</script>

<style>
    form {
        display: block;
        height: 400px;
        width: 400px;
        background: #ccc;
        margin: auto;
        margin-top: 40px;
        text-align: center;
        line-height: 400px;
        border-radius: 4px;
    }
</style>
