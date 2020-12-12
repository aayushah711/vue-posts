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
            <label for="file-upload" class="custom-file-upload">
                <img
                    src="/resources/svg/upload.svg"
                    height="100"
                    alt="upload"
                />
                <div>
                    Upload a csv file
                    <input
                        id="file-upload"
                        type="file"
                        accept=".csv"
                        @change="preventDefaultAlert"
                    />
                </div>
            </label>
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
                file.value =
                    (e.dataTransfer && e.dataTransfer.files[0]) ||
                    e.target.files[0];
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
        max-height: 400px;
        max-width: 400px;
        background: #ccc;
        margin: auto;
        margin-top: 40px;
        text-align: center;
        /* line-height: 400px; */
        border-radius: 4px;
    }
    input[type="file"] {
        display: none;
    }
    .custom-file-upload {
        height: 400px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif;
    }
    .custom-file-upload:hover {
        color: #1aa0e8;
    }
</style>
