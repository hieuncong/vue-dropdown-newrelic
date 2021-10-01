<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div style="display: block">
      <p
        style="cursor: pointer; display: inline-block"
        @click="genDataWithSubarr"
      >
        Data with subarr
      </p>
      <p style="display: inline-block">|</p>
      <p
        style="cursor: pointer; display: inline-block"
        @click="genDataWithoutSubarr"
      >
        Data without subarr
      </p>
    </div>
    <DropdownMenu
      :dropdownArray="dropdownArray"
      :totalRecords="totalRecords"
      @item-click="itemClick"
      @index-click="indexClick"
    />
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
      totalRecords: 10,
    };
  },
  methods: {
    genDataWithSubarr() {
      this.dropdownArray = [
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
      ];
      this.totalRecords = 10;
    },

    genDataWithoutSubarr() {
      this.dropdownArray = [
        {
          name: "www.domain1.Loremipsumdolorsitamet,consecteturadipiscingelit.",
          value: 23,
          percent: 100,
        },
        {
          name: "www.anotherdomain.com/path1",
          value: 20,
          percent: 86.95,
        },
        {
          name: "www.anotherdomain.com/path2",
          value: 17,
          percent: 73.91,
        },
        {
          name: "www.domain1.Loremipsumdolorsitamet/path2",
          value: 14,
          percent: 60.86,
        },
        {
          name: "www.anotherdomain.com/path3",
          value: 10,
          percent: 43.47,
        },
        {
          name: "www.anotherdomain.com/path5",
          value: 8,
          percent: 34.78,
        },
      ];
      this.totalRecords = 10;
    },

    itemClick(itemPayload) {
      console.log(itemPayload);
    },

    indexClick(indexPayload) {
      console.log(indexPayload);
    },
  },
};
</script>
