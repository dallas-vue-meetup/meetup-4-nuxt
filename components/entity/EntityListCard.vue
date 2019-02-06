<template>
  <v-card flat :height="height">
    <v-card-title primary-title>
      <div class="headline mb-2">
        {{ title }}
      </div>
    </v-card-title>
    <loader :isLoading="isLoading" />
    <v-list v-if="entities">
      <v-list-tile
        v-for="(entity, idx) in entities"
        :key="idx"
        avatar
      >
        <v-list-tile-avatar>
          <img :src="`https://starwars-visualguide.com/assets/img/${entityType}/${entity.id}.jpg`">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>{{ entity.name || entity.title }}</v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-btn icon>
            <v-icon color="grey">open_in_new</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>
import Loader from '@/components/Loader'

export default {
  name: 'EntityListCard',
  components: {
    Loader
  },
  props: {
    entities: {
      type: Array,
      required: false,
      default: () => undefined
    },
    entityType: {
      type: String,
      required: true
    },
    height: {
      type: String,
      required: false,
      default: () => ('auto')
    },
    isLoading: {
      type: Boolean,
      required: false,
      default: () => false
    },
    title: {
      type: String,
      required: false,
      default: () => ''
    }
  }
}
</script>
