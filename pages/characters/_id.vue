<template>
  <v-layout row wrap>
    <loader :is-loading="!selected" />
    <v-flex v-if="selected" xs12>
      <entity-bio-card :entity="selected" entity-type="characters">
        <character-bio :character="selected" />
      </entity-bio-card>
    </v-flex>
    <v-flex v-if="selected" xs12>
      <v-layout>
        <v-flex sm6 xs12>
          <entity-list-card :entities="filmEntities" entity-type="films" title="Films" height="100%" :is-loading="!filmsLoaded" />
        </v-flex>
        <v-flex sm6 xs12>
          <v-layout column fill-height>
            <v-flex xs12>
              <entity-list-card :entities="vehicles" entity-type="vehicles" title="Vehicles" :is-loading="!vehiclesLoaded" />
              <entity-list-card :entities="starships" entity-type="starships" title="Starships" :is-loading="!starshipsLoaded" />
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
    ...mapState('films', {
      films: 'films',
      filmsLoaded: 'loaded'
    }),
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
    this.$store.dispatch('films/FETCH_MANY')
  },
  async fetch({ store, params }) {
    await store.dispatch('characters/FETCH_ONE', params.id)
  },
  head() {
    return {
      title: `Star Wars Wiki - ${this.selected.name || this.selected.title}`,
      meta: [
        { hid: 'og:image', name: 'og:image', content: `https://starwars-visualguide.com/assets/img/charcters/${this.selected.id}` }
      ]
    }
  }
}
</script>
