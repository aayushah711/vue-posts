<template>
    <section class="post-container">
        <div class="player-container">
            <video controls>
                <source :src="post.url" />
            </video>
            <!-- <vue-core-video-player :src="post.url"></vue-core-video-player> -->

            <!-- <video width="100" controls>
                <source :src="post.url" type="video/mp4" />

                Sorry, your browser doesn't support embedded videos.
            </video> -->
        </div>
        <p>{{ post.postId }}</p>
    </section>
</template>

<script>
    // import VueCoreVideoPlayer from "vue-core-video-player";
    // import videoPlayer from "vuetify-media-player/src/components/video-player.vue";

    export default {
        props: ["post"],
    };
</script>

<style scoped>
    .post-container {
        /* height: 600px; */
        width: 400px;
        margin: 2vh auto;
        padding: 2vh;

        background-color: white;
    }

    .player-container {
        /* height: 600px; */
        /* width: 400px; */
    }
    video {
        /* override other styles to make responsive */
        width: 80% !important;
        height: auto !important;
        padding: 0 2vh;
    }
</style>
