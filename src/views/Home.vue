<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p style="cursor: pointer" @click="genData">New data</p>
    <DropdownMenu :dropdownArray="dropdownArray" :totalRecords="totalRecords" />
  </div>
</template>

<script>
// @ is an alias to /src
import DropdownMenu from "@/components/dropdown_menu/DropdownMenu.vue";

export default {
  name: "Home",
  components: {
    DropdownMenu,
  },
  data() {
    return {
      dropdownArray: [
        {
          name: "www.domain1.Loremipsumdolorsitamet,consecteturadipiscingelit.",
          value: 23,
          percent: 100,
          subarr: [
            {
              name: "path1/Loremipsumdolorsitamet,consecteturadipiscingelit.",
              parent:
                "www.domain1.Loremipsumdolorsitamet,consecteturadipiscingelit.",
              value: 12,
              percent: 100,
            },
            {
              name: "path2",
              parent:
                "www.domain1.Loremipsumdolorsitamet,consecteturadipiscingelit.",
              value: 4,
              percent: 33.33,
            },
            {
              name: "path3",
              parent:
                "www.domain1.Loremipsumdolorsitamet,consecteturadipiscingelit.",
              value: 2,
              percent: 16.67,
            },
            {
              name: "path4",
              parent:
                "www.domain1.Loremipsumdolorsitamet,consecteturadipiscingelit.",
              value: 2,
              percent: 16.67,
            },
            {
              name: "path5",
              parent:
                "www.domain1.Loremipsumdolorsitamet,consecteturadipiscingelit.",
              value: 1,
              percent: 8.33,
            },
          ],
        },
        {
          name: "www.anotherdomain.com",
          value: 23,
          percent: 100,
          subarr: [
            {
              name: "path1/Loremipsumdolorsitamet,consecteturadipiscingelit.",
              parent: "www.anotherdomain.com",
              value: 12,
              percent: 100,
            },
            {
              name: "path2",
              parent: "www.anotherdomain.com",
              value: 4,
              percent: 33.33,
            },
            {
              name: "path3",
              parent: "www.anotherdomain.com",
              value: 2,
              percent: 16.67,
            },
            {
              name: "path4",
              parent: "www.anotherdomain.com",
              value: 2,
              percent: 16.67,
            },
            {
              name: "path5",
              parent: "www.anotherdomain.com",
              value: 1,
              percent: 8.33,
            },
          ],
        },
      ],
      totalRecords: 6,
    };
  },
  methods: {
    genData() {
      this.dropdownArray = [
        {
          name: "www.mydomain.com",
          value: 23,
          percent: 100,
          subarr: [
            {
              name: "domain1/path1/Loremipsumdolorsitamet,consecteturadipiscingelit.",
              parent: "www.mydomain.com",
              value: 12,
              percent: 100,
            },
            {
              name: "domain1/path2",
              parent: "www.mydomain.com",
              value: 4,
              percent: 33.33,
            },
            {
              name: "domain1/path3",
              parent: "www.mydomain.com",
              value: 2,
              percent: 16.67,
            },
            {
              name: "domain1/path4",
              parent: "www.mydomain.com",
              value: 2,
              percent: 16.67,
            },
            {
              name: "domain1/path5",
              parent: "www.mydomain.com",
              value: 1,
              percent: 8.33,
            },
          ],
        },
        {
          name: "www.mydomain2.com",
          value: 23,
          percent: 100,
          subarr: [
            {
              name: "domain1/path1/Loremipsumdolorsitamet,consecteturadipiscingelit.",
              parent: "www.mydomain.com",
              value: 12,
              percent: 100,
            },
            {
              name: "domain1/path2",
              parent: "www.mydomain.com",
              value: 4,
              percent: 33.33,
            },
            {
              name: "domain1/path3",
              parent: "www.mydomain.com",
              value: 2,
              percent: 16.67,
            },
            {
              name: "domain1/path4",
              parent: "www.mydomain.com",
              value: 2,
              percent: 16.67,
            },
            {
              name: "domain1/path5",
              parent: "www.mydomain.com",
              value: 1,
              percent: 8.33,
            },
          ],
        },
      ];
      this.totalRecords = 10;
    },
  },
};
</script>
