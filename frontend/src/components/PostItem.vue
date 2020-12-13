<template>
    <div class="post-container">
        <div class="empty-space"></div>
        <div class="post-content-main">
            <div class="post-header">
                <div>
                    <div class="post-user-id">User ID: {{ post.userId }}</div>
                    <div class="post-views">
                        <div>Post ID: {{ post.postId }}</div>
                        <div>{{ post.views }} views</div>
                        <div class="post-details">
                            <span class="post-type" title="type">{{
                                post.type
                            }}</span>
                            <span
                                class="post-type"
                                title="genre"
                                v-if="genre"
                                >{{ post.tagGenre }}</span
                            >
                        </div>
                    </div>
                </div>
                <div class="post-content-other">
                    <div title="language">{{ post.language }}</div>
                    <div
                        class="post-engagement post-clicks"
                        title="Engagement By View"
                    >
                        <img
                            height="24"
                            src="/resources/svg/engagementByView.svg"
                            alt="engagement"
                        />
                        <div>{{ engagement }}</div>
                    </div>
                </div>
            </div>
            <div class="post-video" @click="togglePlayer" v-if="isVideo">
                <video
                    ref="player"
                    preload="metadata"
                    @ended="videoEnded"
                    @timeupdate="updateProgress"
                    controls
                >
                    <source :src="post.url" />
                </video>
            </div>
            <div class="post-video" v-else>
                <img class="post-image" :src="post.url" alt="post.tagGenre" />
            </div>

            <div class="post-tags">
                <span>#{{ post.tagName }}</span>
            </div>
            <div class="post-actions">
                <div class="post-clicks" title="shares">
                    <img
                        height="24"
                        src="/resources/svg/share.svg"
                        alt="share"
                    />
                    <div>{{ post.shares }}</div>
                </div>
                <div class="post-clicks" title="likes">
                    <img height="24" src="/resources/svg/like.svg" alt="like" />
                    <div>{{ post.likes }}</div>
                </div>
                <div class="post-clicks" title="comments">
                    <img
                        height="24"
                        src="/resources/svg/comment.svg"
                        alt="comments"
                    />
                    <div>{{ post.comment_created }}</div>
                </div>
                <div class="post-clicks" title="favs">
                    <img
                        height="24"
                        src="/resources/svg/likefalse.svg"
                        alt="favs"
                    />
                    <div>{{ post.favs }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["post"],
        data() {
            return { playPlayer: false, percentage: 0.0 };
        },
        computed: {
            engagement() {
                return parseFloat(this.post.eByV).toFixed(2);
            },
            genre() {
                return this.post.tagGenre === "N/A" ? false : true;
            },
            isVideo() {
                return this.post.type === "video";
            },
        },
        methods: {
            togglePlayer() {
                this.playPlayer = !this.playPlayer;
            },
            videoEnded() {
                this.playPlayer = false;
            },
            updateProgress() {
                // const vid = this.$refs.player;
                // const percentage = (vid.currentTime / vid.duration) * 100;
            },
        },
        watch: {
            playPlayer(value) {
                if (value) {
                    this.$refs.player.play();
                } else {
                    this.$refs.player.pause();
                }
            },
        },
    };
</script>

<style scoped>
    /* * {
        border: 1px dashed green;
    } */
    /* .post-container {
        min-height: 40px;
        margin: 8px auto;
        max-width: 600px;
        display: flex;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif;
        background: white;
    } */
    .post-content-main {
        min-height: 40px;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .post-header {
        min-height: 40px;
        text-align: left;
        padding: 8px 16px;
        display: flex;
        justify-content: space-between;
    }
    .post-user-id {
        color: rgba(3, 3, 3, 0.9);
        font-weight: 600;
        font-size: 14px;
        line-height: 18px;
        max-width: 100%;
        overflow-x: hidden;
    }
    .post-type {
        border-radius: 15px;
        padding: 2px 10px;
        background-color: #1aa0e8;
        margin: 5px 10px 0 0;
        color: white;
        font-size: 12px;
        vertical-align: baseline;
    }

    .post-views {
        color: #71717c;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        max-width: 100%;
    }
    .post-details {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .post-video {
        background-color: #000;
        width: 100%;
        height: 0;
        padding-bottom: 100%;
        cursor: pointer;
        position: relative;
    }
    video,
    .post-image {
        width: 100%;
        height: 100%;
        padding: 0;
        -o-object-fit: contain;
        object-fit: contain;
        position: absolute;
        left: 0;
        top: 0;
    }
    .post-container {
        /* margin: 8px auto; */
        margin: auto;
        max-width: 400px;
        display: flex;
        flex-direction: column;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif;
        background: #fff;
    }
    .empty-space {
        height: 8px;
        background: #f5f2f2;
    }

    /* .post-video {
        background-color: black;
        width: 100%;
        max-height: 500px;
        cursor: pointer;
    }
    video {
        max-width: 100%;
        max-height: 100%;
        margin: 0 auto;
        padding: 0;
        object-fit: contain;
    } */
    .player-control {
        width: 150px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .post-tags {
        text-align: left;
        font-size: 14px;
        line-height: 20px;
        color: #1990bf;
        padding: 8px 16px;
    }
    .post-tags > span {
        vertical-align: baseline;
    }
    .post-genre {
        color: black;
        padding-right: 10px;
    }
    .post-actions {
        padding: 8px 16px;
        display: flex;
        justify-content: space-between;
    }
    .post-clicks {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 25px;
        /* width: 75px; */
    }
    .post-clicks div {
        font-weight: 500;
        font-size: 12px;
        /* line-height: 16px; */
        padding: 0 0 0 10px;
    }
    .post-content-other {
        text-align: right;
    }
    .post-engagement {
        padding-top: 5px;
    }
</style>
