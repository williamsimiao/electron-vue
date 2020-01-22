<template>
  <div>
    <v-navigation-drawer
      permanent
    >
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data () {
      return {
        // items: [
        //   { title: this.$tc('CSP'), icon: 'account_box' },
        //   { title: this.$tc('Client'), icon: 'account_box' },
        //   { title: this.$tc('Certificados'), icon: 'gavel' },
        //   { title: this.$tc('About'), icon: 'gavel' }
        // ]
        items: [
          { title: 'CSP', icon: 'account_box' },
          { title: 'Client', icon: 'account_box' },
          { title: 'Certificados', icon: 'gavel' },
          { title: 'About', icon: 'gavel' }
        ]
      }
    },
}
</script>