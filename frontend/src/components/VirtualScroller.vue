<template>
    <DynamicScroller
        :items="items"
        :min-item-size="400"
        class="scroller"
        key-field="postId"
    >
        <template v-slot="{ item, index, active }">
            <DynamicScrollerItem
                :item="item"
                :active="active"
                :size-dependencies="[item.message]"
                :data-index="index"
            >
                <post-item :key="item.postId" :post="item"></post-item>
            </DynamicScrollerItem>
        </template>
    </DynamicScroller>
</template>

<script>
    import { defineComponent } from "vue";
    import PostItem from "./PostItem.vue";

    export default defineComponent({
        props: {
            items: Array,
        },
        components: { PostItem },
        // setup() {
        //     const items = [
        //         {
        //             id: 1,
        //             url:
        //                 "https://cdn.sharechat.com/1a40b23d_1606974965867_sc.mp4",
        //             userId: 59096277,
        //             postId: 5906298332,
        //             tagGenre: "Humour and Fun",
        //             type: "video",
        //             language: "Marathi",
        //             shares: 10,
        //             likes: 35,
        //             favs: 13,
        //             comment_created: 0,
        //             views: 5429,
        //             eByV: 0.010683367,
        //             tagName: "tagName",
        //         },
        //         {
        //             id: 2,
        //             url:
        //                 "https://cdn.sharechat.com/25fa0daa_1606900878523_sc.mp4",
        //             userId: 426114987,
        //             postId: 9564235332,
        //             tagGenre: "Politics",
        //             type: "video",
        //             language: "Punjabi",
        //             shares: 70,
        //             likes: 695,
        //             favs: 100,
        //             comment_created: 19,
        //             views: 15459,
        //             eByV: 0.057183518,
        //             tagName: "tagName",
        //         },
        //     ];
        //     return { items };
        // },
    });
</script>

<style scoped>
    .scroller {
        height: 100%;
    }
</style>
