<template>
  <v-container>
    <v-row>
      <v-col cols="auto">
        <v-row
          justify="start"
        >
          <v-text-field
            v-model="certificate"
            outlined
            label="Certificado"
            counter
          >
          </v-text-field>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      certificate: 'The certificate',
      pageName: 'Certificate'
    }
  }
}
</script>