<template>
  <div>
    <div>
      <span class="font-weight-bold">
        Birth Year:
      </span>
      <span>
        {{ character.birth_year }}
      </span>
    </div>
    <div>
      <span class="font-weight-bold">
        Species (TODO):
      </span>
      <span>
        {{ character.species[0] }}
      </span>
    </div>
    <div>
      <span class="font-weight-bold">
        Height:
      </span>
      <span>
        {{ character.height }} cm
      </span>
    </div>
    <div>
      <span class="font-weight-bold">
        Mass:
      </span>
      <span>
        {{ character.mass }} kg
      </span>
    </div>
    <div>
      <span class="font-weight-bold">
        Birth Year:
      </span>
      <span>
        {{ character.gender }}
      </span>
    </div>
    <div>
      <span class="font-weight-bold">
        Hair Color:
      </span>
      <span>
        {{ character.hair_color }} kg
      </span>
    </div>
    <div>
      <span class="font-weight-bold">
        Eye Color:
      </span>
      <span>
        {{ character.eye_color }}
      </span>
    </div>
    <div>
      <span class="font-weight-bold">
        Skin Color:
      </span>
      <span>
        {{ character.skin_color }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CharacterBio',
  props: {
    character: {
      type: Object,
      required: true
    }
  }
}
</script>
