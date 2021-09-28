<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <DropdownMenu />
  </div>
</template>

<script>
// @ is an alias to /src
import DropdownMenu from "@/components/DropdownMenu.vue";

export default {
  name: "Home",
  components: {
    DropdownMenu,
  },
};
</script>
