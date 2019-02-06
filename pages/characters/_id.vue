<template>
  <v-layout row wrap>
    <v-flex v-if="!selected" text-xs-center xs12>
      <v-container fluid fill-height>
        <v-progress-linear :indeterminate="true" />
      </v-container>
    </v-flex>
    <v-flex v-if="selected" xs12>
      <entity-bio-card :entity="selected" entity-type="characters">
        <character-bio :character="selected" />
      </entity-bio-card>
    </v-flex>
    <v-flex v-if="selected" sm6 xs12>
      <entity-list-card :entities="filmEntities" entity-type="films" title="Films" />
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'
import { getIdFromUrl } from '@/helpers/index'
import CharacterBio from '@/components/characters/CharacterBio'
import EntityBioCard from '@/components/entity/EntityBioCard'
import EntityListCard from '@/components/entity/EntityListCard'

export default {
  components: {
    CharacterBio,
    EntityBioCard,
    EntityListCard
  },
  computed: {
    ...mapState('characters', [
      'selected'
    ]),
    ...mapState('films', [
      'films'
    ]),
    filmEntities() {
      const { films } = this.selected
      const filmIds = films.map(filmUrl => getIdFromUrl(filmUrl))
      const appearsIn = this.films.filter(film => filmIds.includes(film.id))
      return appearsIn
    }
  },
  created() {
  },
  async fetch({ store, params }) {
    await store.dispatch('characters/FETCH_ONE', params.id)
    await store.dispatch('films/FETCH_MANY')
  }
}
</script>
