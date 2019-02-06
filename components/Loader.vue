<template>
  <v-flex v-if="isLoading" text-xs-center xs12>
    <v-container fluid fill-height>
      <v-progress-linear :indeterminate="true" />
    </v-container>
  </v-flex>
</template>

<script>
export default {
  name: 'Loader',
  props: {
    isLoading: {
      type: Boolean,
      required: false,
      default: () => false
    }
  }
}
</script>
