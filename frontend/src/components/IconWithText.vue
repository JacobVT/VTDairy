<template>
  <v-col
    cols="12"
  >
    <v-row
      width="100%"
      style="place-content: center; margin-bottom: 8px;"
    >
      <v-icon
        large
      >
        {{ icon }}
      </v-icon>
    </v-row>
    <v-row
      width="100%"
      style="place-content: center"
    >
      <span
        class="body-1"
        style="font-weight: bold;"
      >
        {{ text }}
      </span>
    </v-row>
  </v-col>
</template>

<script>
export default {
  name: 'IconWithText',

  props: {
    icon: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },

};
</script>
