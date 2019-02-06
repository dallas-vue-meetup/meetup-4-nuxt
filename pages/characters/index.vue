<template>
  <v-layout row wrap>
    <v-flex
      v-for="(character, idx) in characters"
      :key="idx"
      text-xs-center
      md3
      sm6
      xs12
    >
      <entity-card :entity="character" entity-type="characters" />
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'
import EntityCard from '@/components/entity/EntityCard'

export default {
  // data() {
  //   cz: []
  // },
  components: {
    EntityCard
  },
  computed: {
    ...mapState('characters', [
      'characters'
    ])
  },
  created() {
  },
  async fetch({ store, params }) {
    await store.dispatch('characters/FETCH_MANY')
  }
}
</script>
