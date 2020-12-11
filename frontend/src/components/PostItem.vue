<template>
    <div class="flex">
        <section class="post-container">
            <div class="player-content">
                <div class="post-header">
                    <div>User id: {{ post.userId }}</div>
                    <div class="post-id">
                        Post id: {{ post.postId }}
                        <span class="post-type">{{ post.type }}</span>
                    </div>
                    <div class="post-views">{{ post.views }} views</div>
                    <div class="post-tags">#{{ post.tagName }}</div>
                </div>
            </div>
            <div class="player-container">
                <video controls preload="metadata">
                    <source :src="post.url" />
                </video>
            </div>
            <div class="post-genre" v-if="genre">
                <div>{{ post.tagGenre }}</div>
            </div>

            <div>
                <div class="post-actions">
                    <div class="post-clicks" title="likes">
                        <img
                            height="20"
                            src="/resources/icons/like.png"
                            alt="like"
                        />
                        <div>{{ post.likes }}</div>
                    </div>
                    <div class="post-clicks" title="comments">
                        <img
                            height="20"
                            src="/resources/icons/comment.png"
                            alt="comments"
                        />
                        <div>{{ post.comment_created }}</div>
                    </div>
                    <div class="post-clicks" title="shares">
                        <img
                            height="20"
                            src="/resources/icons/share.png"
                            alt="share"
                        />
                        <div>{{ post.shares }}</div>
                    </div>
                    <div class="post-clicks" title="favs">
                        <img
                            height="20"
                            src="/resources/icons/heart.png"
                            alt="favs"
                        />
                        <div>{{ post.favs }}</div>
                    </div>
                </div>
            </div>
        </section>
        <section class="post-other-details">
            <div class="post-detail">
                <div>Engagement by view</div>
                <div>{{ engagement }}</div>
            </div>
            <div class="post-detail">
                <div>Language</div>
                <div>{{ post.language }}</div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        props: ["post"],
        computed: {
            engagement() {
                return parseFloat(this.post.eByV).toFixed(2);
            },
            genre() {
                return this.post.tagGenre === "N/A" ? false : true;
            },
        },
    };
</script>

<style scoped>
    .post-container {
        /* height: 420px; */
        width: 360px;
        margin: 2vh;
        padding: 4vh;
        background-color: white;
        box-shadow: 7px 7px 10px 0px rgba(200, 200, 200, 0.75);
        display: flex;
        flex-direction: column;
    }
    .flex {
        display: flex;
        justify-content: center;
    }
    .post-header {
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
    }
    .player-content {
        /* padding-left: 20px; */
        text-align: left;
    }
    .post-id {
        padding: 0 0 2px 0;
        font-size: 13px;
    }
    .post-type {
        border-radius: 15px;
        padding: 5px 10px;
        background-color: #1aa0e8;
        color: white;
        font-size: 13px;
    }
    .post-views {
        color: #71717c;
        font-weight: normal;
    }
    .post-actions {
        /* width: 200px; */
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding-top: 10px;
    }
    .post-clicks {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 25px;
        /* width: 75px; */
    }
    .post-clicks div {
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        padding: 5px 0 0 10px;
        color: #1aa0e8;
    }
    .post-genre {
        display: flex;
        width: 100%;
        padding-top: 10px;
    }
    .post-genre > div {
        border-radius: 15px;
        padding: 5px 10px;
        margin-right: 5px;
        background-color: #1aa0e8;
        color: white;
        font-size: 13px;
    }
    .post-tags {
        color: #71717c;
        padding-bottom: 8px;
        font-weight: normal;
        font-size: 14px;
        line-height: 18px;
    }
    .post-detail {
        display: flex;
        color: #9e9e9e;
        width: 100%;
    }
    .post-detail :first-child {
        flex: 1;
    }
    .post-detail :nth-child(2) {
        color: #1aa0e8;
    }

    .player-container {
        background-color: black;
        width: 100%;
        border-radius: 8px;
        /* width: 480px; */
        max-height: 270px;
    }
    video {
        max-width: 100%;
        max-height: 100%;
        margin: 0 auto;
        padding: 0;
        object-fit: contain;
    }
    .post-other-details {
        text-align: left;
        width: 15%;
        margin: 2vh;
        padding: 4vh;
        background-color: white;
        box-shadow: 7px 7px 10px 0px rgba(200, 200, 200, 0.75);
        height: fit-content;
    }
</style>
