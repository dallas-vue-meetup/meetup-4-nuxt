<template>
  <v-card
    min-height="150px"
    nuxt
    :href="`${entityType}/${entity.id}`"
  >
    <v-img
      :src="`https://starwars-visualguide.com/assets/img/${entityType}/${entity.id}.jpg`"
      height="350px"
    />
    <v-card-title primary-title>
      {{ entity.name }}
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: 'CharacterCard',
  props: {
    entity: {
      type: Object,
      required: false,
      default: () => ({})
    },
    entityType: {
      type: String,
      required: true
    }
  }
}
</script>
