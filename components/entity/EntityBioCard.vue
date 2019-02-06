<template>
  <v-card>
    <v-layout>
      <v-flex xs5>
        <v-img
          :src="`https://starwars-visualguide.com/assets/img/${entityType}/${entity.id}.jpg`"
          height="350px"
          aspect-ratio=".75"
        />
      </v-flex>
      <v-flex xs7>
        <v-card-title primary-title>
          <div>
            <div class="headline mb-2">
              {{ entity.name }}
            </div>
            <slot />
          </div>
        </v-card-title>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: 'EntityBioCard',
  props: {
    entity: {
      type: Object,
      required: true
    },
    entityType: {
      type: String,
      required: true
    }
  }
}
</script>
