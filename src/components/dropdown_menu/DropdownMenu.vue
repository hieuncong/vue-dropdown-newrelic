<template>
  <div class="dropdownmenu">
    <Dropdown
      v-for="(dropdown, index) in dropdownArray"
      :key="index"
      :index="index"
      :id="dropdown.name"
      :arrays="dropdown.subarr"
      :percent="dropdown.percent"
    >
      <template v-slot:key> {{ dropdown.name }} </template>
      <template v-slot:value>{{ dropdown.value }}</template>
    </Dropdown>
    <div
      v-if="isActiveLoadMoreButton"
      class="btnLoadMore"
      @click="loadMore"
    >
      {{ btnLoadMore }}
    </div>
  </div>
</template>

<script>
import Dropdown from "./dropdown/Index.vue";

import { mapState } from "vuex";

export default {
  name: "DropdownMenu",
  components: {
    Dropdown,
  },
  emits: ["indexClick", "itemClick", "loadMoreClick"],
  props: {
    totalRecords: {
      type: Number,
      default: () => 0,
    },
    dropdownArray: {
      type: Array,
      default: () => [],
    },
    btnLoadMore: {
      type: String,
      default: () => "Load more",
    },
  },
  watch: {
    totalRecords: {
      handler(newValue, oldValue) {},
    },
    dropdownArray: {
      handler(newValue, oldValue) {},
    },
    itemPayload: {
      handler(newValue, oldValue) {
        this.$emit("itemClick", newValue);
      },
    },
    indexPayload: {
      handler(newValue, oldValue) {
        this.$emit("indexClick", newValue);
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    isActiveLoadMoreButton() {
      return this.dropdownArray.length < this.totalRecords;
    },

    ...mapState({
      itemPayload: "itemPayload",
      indexPayload: "indexPayload",
    }),
  },
  methods: {
    loadMore() {
      this.$emit("loadMoreClick");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./DropdownMenu.scss";
</style>
