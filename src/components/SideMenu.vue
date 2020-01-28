<template>
  <div>
    <v-navigation-drawer
      permanent
    >
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.url"
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
        items: [
          { title: 'CSP', icon: 'account_box', url: { name: 'csp' } },
          { title: 'Client', icon: 'account_box', url: { name: 'client' } },
          { title: 'Certificados', icon: 'gavel', url: { name: 'certificates' } },
          { title: 'About', icon: 'gavel', url: { name: 'about' } }
        ]
      }
    },
}
</script>