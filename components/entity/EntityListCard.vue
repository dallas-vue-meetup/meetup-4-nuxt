<template>
  <v-card flat>
    <v-card-title primary-title>
      <div class="headline mb-2">
        {{ title }}
      </div>
    </v-card-title>
    <v-list>
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

        <!-- <v-list-tile-action>
          <v-icon :color="item.active ? 'teal' : 'grey'">chat_bubble</v-icon>
        </v-list-tile-action> -->
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: 'EntityListCard',
  props: {
    entities: {
      type: Array,
      required: false,
      default: () => []
    },
    entityType: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: false,
      default: () => ''
    }
  }
}
</script>
