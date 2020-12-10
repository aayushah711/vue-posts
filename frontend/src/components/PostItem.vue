<template>
    <section class="post-container">
        <div class="player-container">
            <video controls>
                <source :src="post.url" />
            </video>
        </div>
        <div class="player-content">
            <div class="post-header">
                <div>User id: {{ post.userId }}</div>
                <div class="post-id">
                    Post id: {{ post.postId }}
                    <span class="post-type">{{ post.type }}</span>
                </div>
            </div>
            <div class="post-tags">#{{ post.tagName }}</div>
            <div class="post-details">
                <div>
                    {{ post.language }}
                </div>
                <div>
                    {{ post.tagGenre }}
                </div>
            </div>
            <div class="post-actions">
                <div class="post-clicks" title="likes">
                    <img
                        height="30"
                        src="/resources/icons/like.png"
                        alt="like"
                    />
                    <div>
                        {{ post.likes }}
                    </div>
                </div>
                <div class="post-clicks" title="comments">
                    <img
                        height="30"
                        src="/resources/icons/comment.png"
                        alt="comments"
                    />
                    <div>
                        {{ post.comment_created }}
                    </div>
                </div>
                <div class="post-clicks" title="shares">
                    <img
                        height="30"
                        src="/resources/icons/share.png"
                        alt="share"
                    />
                    <div>
                        {{ post.shares }}
                    </div>
                </div>
                <div class="post-clicks" title="favs">
                    <img
                        height="30"
                        src="/resources/icons/heart.png"
                        alt="favs"
                    />
                    <div>
                        {{ post.favs }}
                    </div>
                </div>
                <div class="post-clicks" title="views">
                    <img
                        height="30"
                        src="/resources/icons/view.png"
                        alt="views"
                    />
                    <div>
                        {{ post.views }}
                    </div>
                </div>
            </div>
            <div class="post-engagement">
                Engagement by view: {{ engagement }}
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: ["post"],
        computed: {
            engagement() {
                return parseFloat(this.post.eByV).toFixed(2);
            },
        },
    };
</script>

<style scoped>
    .post-container {
        width: 700px;
        margin: 2vh auto;
        padding: 4vh;
        background-color: white;
        box-shadow: 7px 7px 10px 0px rgba(200, 200, 200, 0.75);
        display: flex;
    }
    .post-header {
        color: #9e9e9e;
    }
    .player-content {
        padding-left: 20px;
        text-align: left;
    }
    .post-id {
        padding: 10px 0;
        font-size: 13px;
    }
    .post-type {
        border-radius: 15px;
        padding: 5px 10px;
        background-color: purple;
        color: white;
        font-size: 13px;
    }
    .post-actions {
        width: 200px;
        display: flex;
        flex-wrap: wrap;
    }
    .post-clicks {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 10px 0;
        height: 50px;
        width: 100px;
    }
    .post-clicks div {
        font-size: 18px;
        font-weight: bold;
        padding: 5px 10px 0 10px;
        color: purple;
    }
    .post-details {
        display: flex;
        width: 100%;
        padding: 10px 0;
    }
    .post-details > div {
        border-radius: 15px;
        padding: 5px 10px;
        margin-right: 5px;
        background-color: gray;
        color: white;
        font-size: 13px;
    }
    .post-engagement {
        color: #9e9e9e;
    }

    .player-container {
        background-color: black;
        width: 500px;
    }
    video {
        width: 80% !important;
        height: auto !important;
        margin: 0 auto;
        padding: 0 2vh;
    }
</style>
