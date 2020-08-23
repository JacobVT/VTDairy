<template>
  <v-card></v-card>
</template>

<script>
// import gql from "graphql-tag";

export default {
  name: 'Recipe',
  data() {
    return {
      recipes: [
        {
          name: 'test1',
        },
        {
          name: 'test2',
        },
        {
          name: 'test3',
        },
      ],
    };
  },
  // apollo: {
  //   categories: gql`
  //     query Categories {
  //       categories {
  //         id
  //         name
  //       }
  //     }
  //   `
  // }
};
</script>
