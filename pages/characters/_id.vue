<template>
  <v-layout row wrap>
    <loader :isLoading="!selected" />
    <v-flex v-if="selected" xs12>
      <entity-bio-card :entity="selected" entity-type="characters">
        <character-bio :character="selected" />
      </entity-bio-card>
    </v-flex>
    <v-flex xs12 v-if="selected">
      <v-layout>
        <v-flex sm6 xs12>
          <entity-list-card :entities="filmEntities" entity-type="films" title="Films" height="100%" />
        </v-flex>
        <v-flex sm6 xs12>
          <v-layout column fill-height>
            <v-flex xs12>
              <entity-list-card :entities="vehicles" entity-type="vehicles" title="Vehicles" :isLoading="!vehiclesLoaded" />
              <entity-list-card :entities="starships" entity-type="starships" title="Starships" :isLoading="!starshipsLoaded" />
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'
import { getIdFromUrl } from '@/helpers/index'
import Loader from '@/components/Loader'
import CharacterBio from '@/components/characters/CharacterBio'
import EntityBioCard from '@/components/entity/EntityBioCard'
import EntityListCard from '@/components/entity/EntityListCard'

export default {
  components: {
    CharacterBio,
    EntityBioCard,
    EntityListCard,
    Loader
  },
  computed: {
    ...mapState('characters', [
      'selected'
    ]),
    ...mapState('films', [
      'films'
    ]),
    ...mapState('vehicles', {
      vehicles: 'vehicles',
      vehiclesLoaded: 'loaded'
    }),
    ...mapState('starships', {
      starships: 'starships',
      starshipsLoaded: 'loaded'
    }),
    filmEntities() {
      const { films } = this.selected
      const filmIds = films.map(filmUrl => getIdFromUrl(filmUrl))
      const appearsIn = this.films.filter(film => filmIds.includes(film.id))
      return appearsIn
    }
  },
  created() {
    this.$store.dispatch('vehicles/FETCH_MANY', this.selected.vehicles)
    this.$store.dispatch('starships/FETCH_MANY', this.selected.starships)
  },
  async fetch({ store, params }) {
    await store.dispatch('characters/FETCH_ONE', params.id)
    await store.dispatch('films/FETCH_MANY')
  }
}
</script>
