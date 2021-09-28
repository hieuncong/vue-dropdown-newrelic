<template>
  <div :id="id" class="dropdown">
    <button
      @click="dropDownClick"
      class="button_dropdown"
      :class="{ isActive: isOpen }"
      :style="{
        background: computedIndexBackground,
        'box-shadow': computedBoxShadow,
        '-webkit-box-shadow': computedWebkitBoxShadow,
      }"
    >
      <div class="display_index">
        <div
          class="display_arrow"
          :style="{ transform: computedArrowRotate }"
          ref="display_arrow"
        >
          &#9660;
        </div>
        <div class="display_key">
          <slot name="key" />
        </div>
        <div class="display_value">
          <slot name="value" />
        </div>
      </div>
    </button>
    <div class="dropdown-list" v-if="isOpen">
      <Item
        v-for="(item, index) in arrays"
        :key="index"
        :item="item"
        :style="{ background: calculateItemBackground(item.percent) }"
      >
        <template v-slot:key> {{ item.name }} </template>
        <template v-slot:value>{{ item.value }}</template>
      </Item>
    </div>
  </div>
</template>

<script>
import Item from "./Item.vue";

export default {
  name: "DropdownMenu",
  components: {
    Item,
  },
  data() {
    return {
      isOpen: false,
      indexBackground: "",
      itemBackground: "",
      transform: "rotate(-90deg)",
      boxShadow: "",
      webkitBoxShadow: "",
    };
  },
  props: {
    arrays: {
      type: Array,
      default: () => [],
    },
    percent: {
      type: Number,
    },
    index: {
      type: Number,
    },
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    computedIndexBackground() {
      this.calculateIndexBackground();
      return this.indexBackground;
    },

    computedItemBackground() {
      this.calculateItemBackground();
      return this.itemBackground;
    },

    computedArrowRotate() {
      return this.transform;
    },

    computedBoxShadow() {
      this.calculateBoxShadow();
      return this.boxShadow;
    },

    computedWebkitBoxShadow() {
      return this.webkitBoxShadow;
    },
  },
  methods: {
    callToClose() {
      this.isOpen = false;
    },

    checkClickOn(event) {
      if (!document.getElementById(this.id).contains(event.target)) {
        this.isOpen = false;
      }
    },

    calculateIndexBackground() {
      this.indexBackground =
        "linear-gradient(90deg, #BFDAD7 " +
        this.percent +
        "%, #EAEAEA " +
        0 +
        "%)";
    },

    calculateItemBackground(percent) {
      return (
        "linear-gradient(90deg, #BFDAD7 " + percent + "%, #EAEAEA " + 0 + "%)"
      );
    },

    calculateArrowRotate() {
      if (this.transform == "rotate(-90deg)") {
        this.transform = "rotate(0deg)";
      } else if (this.transform == "rotate(0deg)") {
        this.transform = "rotate(-90deg)";
      }
    },

    calculateBoxShadow() {
      if (this.index == 0) {
        //39C0DD
        this.boxShadow = "inset 8px 0 0 0 #39C0DD";
        this.webkitBoxShadow = "inset 8px 0 0 0 #39C0DD";
      } else if (this.index == 1) {
        //F0CF61
        this.boxShadow = "inset 8px 0 0 0 #F0CF61";
        this.webkitBoxShadow = "inset 8px 0 0 0 #F0CF61";
      } else if (this.index == 2) {
        //F27C66
        this.boxShadow = "inset 8px 0 0 0 #F27C66";
        this.webkitBoxShadow = "inset 8px 0 0 0 #F27C66";
      } else if (this.index == 3) {
        //A3D076
        this.boxShadow = "inset 8px 0 0 0 #A3D076";
        this.webkitBoxShadow = "inset 8px 0 0 0 #A3D076";
      } else if (this.index == 4) {
        //A671B0
        this.boxShadow = "inset 8px 0 0 0 #A671B0";
        this.webkitBoxShadow = "inset 8px 0 0 0 #A671B0";
      } else {
        this.boxShadow = "none";
        this.webkitBoxShadow = "none";
      }
    },

    dropDownClick() {
      this.isOpen = !this.isOpen;
      this.calculateArrowRotate();
      if (this.isOpen) console.log(this.id);
    },
  },
};
</script>

<style lang="scss">
@import "./Index.scss";
</style>