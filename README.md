# custom-dropdown

A Vue3 dropdown component that looks like New Relic HTTP Request statistics dropdown.

Demo data:
```
data() {
    return {
      dropdownArray: [
        {
          name: "www.domain1.Loremipsumdolorsitamet,consecteturadipiscingelit.",
          value: 23,
          percent: 100,
          subarr: [
            {
              name: "domain1/path1/Loremipsumdolorsitamet,consecteturadipiscingelit.",
              value: 12,
              percent: 100,
            },
            {
              name: "domain1/path2",
              value: 4,
              percent: 33.33,
            },
            {
              name: "domain1/path3",
              value: 2,
              percent: 16.67,
            },
            {
              name: "domain1/path4",
              value: 2,
              percent: 16.67,
            },
            {
              name: "domain1/path5",
              value: 1,
              percent: 8.33,
            },
          ],
        },
        {
          name: "www.domain2.com",
          value: 17,
          percent: 73.91,
          subarr: [
            {
              name: "domain2/path1",
              value: 12,
              percent: 100,
            },
            {
              name: "domain2/path2",
              value: 4,
              percent: 33.33,
            },
            {
              name: "domain2/path3",
              value: 2,
              percent: 16.67,
            },
            {
              name: "domain2/path4",
              value: 2,
              percent: 16.67,
            },
            {
              name: "domain2/path5",
              value: 1,
              percent: 8.33,
            },
          ],
        },
        {
          name: "www.domain3.com",
          value: 14,
          percent: 60.86,
          subarr: [],
        },
        {
          name: "www.domain4.com",
          value: 10,
          percent: 43.47,
          subarr: [],
        },
        {
          name: "www.domain5.com",
          value: 7,
          percent: 30.43,
          subarr: [],
        },
        {
          name: "www.domain6.com",
          value: 5,
          percent: 21.73,
          subarr: [],
        },
      ],
    };
  },
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
