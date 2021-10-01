<template>
  <div class="item" @click="itemClick">
    <div class="display_index">
      <div class="display_key">
        <slot name="key" />
      </div>
      <div class="display_value">
        <slot name="value" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    item: {
      type: Object,
      required: true,
    },
    closeDropdown: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    itemClick() {
      this.$store.dispatch("doUpdateItemPayload", {
        parentName: this.item.parent,
        itemName: this.item.name,
      });
      this.closeDropdown();
    },
  },
};
</script>

<style lang="scss">
@import "./Item.scss";
</style>