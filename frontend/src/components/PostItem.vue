<template>
    <div class="post-container">
        <div class="post-content-main">
            <div class="post-header">
                <div>
                    <div class="post-user-id">User ID: {{ post.userId }}</div>
                    <div class="post-views">
                        <div>
                            Post ID: {{ post.postId }}
                            <span class="post-type">{{ post.type }}</span>
                        </div>
                        <div>{{ post.views }} views</div>
                    </div>
                </div>
                <div class="post-content-other">
                    <div>{{ post.language }}</div>
                    <div
                        class="post-engagement post-clicks"
                        title="Engagement By View"
                    >
                        <img
                            height="24"
                            src="/resources/svg/engagement.svg"
                            alt="engagement"
                        />
                        <div>{{ engagement }}</div>
                    </div>
                </div>
            </div>
            <div class="post-video" @click="togglePlayer">
                <div class="player-control" v-if="!playPlayer">
                    <svg viewBox="0 0 24 24" fill="none">
                        <circle
                            cx="12"
                            cy="12"
                            r="11"
                            fill="#000"
                            fill-opacity="0.4"
                            stroke="#fff"
                        ></circle>
                        <path
                            d="M8.307 16.879V6.957c0-.859.967-1.362 1.67-.87l7.087 4.961a1.062 1.062 0 010 1.74l-7.087 4.96a1.062 1.062 0 01-1.67-.87z"
                            fill="#fff"
                        ></path>
                    </svg>
                </div>
                <video
                    ref="player"
                    preload="metadata"
                    @ended="videoEnded"
                    @timeupdate="updateProgress"
                >
                    <source :src="post.url" />
                </video>
            </div>
            <div class="post-tags">
                <span v-if="genre" class="post-genre">{{ post.tagGenre }}</span>
                <span>#{{ post.tagName }}</span>
            </div>
            <div class="post-actions">
                <div class="post-clicks" title="shares">
                    <img
                        height="24"
                        src="/resources/svg/whatsapp.svg"
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
                        src="/resources/icons/heart.png"
                        alt="favs"
                    />
                    <div>{{ post.favs }}</div>
                </div>
            </div>
        </div>
        <div class="post-content-other"></div>
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
    .post-container {
        min-height: 40px;
        margin: 8px auto;
        max-width: 600px;
        display: flex;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif;
        background: white;
    }
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
        padding: 5px 10px;
        margin-left: 5px;
        background-color: #1aa0e8;
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
    .post-video {
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
    }
    .player-control {
        width: 150px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .post-tags {
        text-align: left;
        font-weight: 600;
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
        font-family: Arial;
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
