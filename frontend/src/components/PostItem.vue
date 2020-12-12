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
                    <div class="post-clicks" title="Engagement By View">
                        <img
                            height="24"
                            src="/resources/svg/engagement.svg"
                            alt="engagement"
                        />
                        <div>{{ engagement }}</div>
                    </div>
                </div>
            </div>
            <div class="post-video">
                <video controls preload="metadata">
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
    }
    video {
        max-width: 100%;
        max-height: 100%;
        margin: 0 auto;
        padding: 0;
        object-fit: contain;
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
</style>
