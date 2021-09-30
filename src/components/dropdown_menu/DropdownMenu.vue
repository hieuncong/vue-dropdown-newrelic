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
    <p v-if="isActiveLoadMoreButton" class="btnLoadMore" @click="loadMore">
      Load more
    </p>
  </div>
</template>

<script>
import Dropdown from "./dropdown/Index.vue";

export default {
  name: "DropdownMenu",
  components: {
    Dropdown,
  },
  props: {
    totalRecords: {
      type: Number,
      default: () => 10,
    },
    dropdownArray: {
      type: Array,
      default: () => [],
    },
  },
  watch: {
    totalRecords: {
      handler(newValue, oldValue) {},
    },
    dropdownArray: {
      handler(newValue, oldValue) {},
    },
  },
  data() {
    return {};
  },
  computed: {
    isActiveLoadMoreButton() {
      return this.dropdownArray.length < this.totalRecords;
    },
  },
  methods: {
    loadMore() {
      console.log("loadMore");
      this.dropdownArray.push(...[
        {
          name: "www.domain2.com",
          value: 17,
          percent: 73.91,
          subarr: [
            {
              name: "domain2/path1",
              parent: "www.domain2.com",
              value: 12,
              percent: 100,
            },
            {
              name: "domain2/path2",
              parent: "www.domain2.com",
              value: 4,
              percent: 33.33,
            },
            {
              name: "domain2/path3",
              parent: "www.domain2.com",
              value: 2,
              percent: 16.67,
            },
            {
              name: "domain2/path4",
              parent: "www.domain2.com",
              value: 2,
              percent: 16.67,
            },
            {
              name: "domain2/path5",
              parent: "www.domain2.com",
              value: 1,
              percent: 8.33,
            },
          ],
        },
        {
          name: "www.anotherdomain2.com",
          value: 17,
          percent: 73.91,
          subarr: [
            {
              name: "anotherdomain2/path1",
              parent: "www.anotherdomain2.com",
              value: 12,
              percent: 100,
            },
            {
              name: "anotherdomain2/path2",
              parent: "www.anotherdomain2.com",
              value: 4,
              percent: 33.33,
            },
            {
              name: "anotherdomain2/path3",
              parent: "www.anotherdomain2.com",
              value: 2,
              percent: 16.67,
            },
            {
              name: "anotherdomain2/path4",
              parent: "www.anotherdomain2.com",
              value: 2,
              percent: 16.67,
            },
            {
              name: "anotherdomain2/path5",
              parent: "www.anotherdomain2.com",
              value: 1,
              percent: 8.33,
            },
          ],
        },
      ]);
    },
  },
};
</script>

<style lang="scss">
@import "./DropdownMenu.scss";
</style>
