<template>
  <DynamicScroller :items="items" :min-item-size="550" class="scroller" key-field="postId">
    <template v-slot="{ item, index, active }">
      <DynamicScrollerItem :item="item" :active="active" :data-index="index">
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
    items: Array
  },
  components: { PostItem }
});
</script>
