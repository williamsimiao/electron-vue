<template>
  <div>
    <v-card
      class="mx-auto"
      max-width="344"
      outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">OVERLINE</div>
          <v-list-item-title class="headline mb-1">{{ pageName + ' Page' }}</v-list-item-title>
          <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
        </v-list-item-content>

      </v-list-item>

      <v-card-actions>
        <v-btn text>{{ locale }}</v-btn>
        <v-btn text>Button</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  created () {
    this.callDinamoLib()
  },
  data () {
    return {
      pageName: 'About'
    }
  },
  computed: {
    locale () {
      return this.$store.state.locale.locale
    }
  },
  methods: {
    callDinamoLib () {
      var ref = require('ref');
      var ffi = require('ffi');

      // typedef
      var HSESSIONCTX = ref.refType(ref.types.void)
      var byte = ref.refType(ref.types.uchar)
      var dword = ref.types.uint32

      // defive values
      const MAX_ADDR_LEN = 128
      const MAX_USR_LEN = 16
      const MAX_USR_PWD = 16

      // binding to a few "libsdinamo" functions...
      var libsdinamo = ffi.Library('tacndlib', {
        'DOpenSession': [ 'int', [ HSESSIONCTX, dword, byte, dword, dword] ],
        'DInitialize': [ 'int', [ dword] ],
        'DFinalize': [ 'int' ]
      });
      // *** DInitialize
      var dwReserved = new Buffer(4)
      dwReserved.writeInt32LE(0)
      dwReserved.type = dword
      libsdinamo.DInitialize(dwReserved)

      // *** DOpenSession

      // HSESSIONCTX - ok
      var HSESSIONCTX_value = ref.alloc(HSESSIONCTX)

      // dwParam - ok
      var dwParam = new Buffer(4)
      dwParam.writeInt32LE(0x00000002)
      dwParam.type = dword
      
      // dwDataLen - ok
      const portSize = 4
      const AUTH_PWD_StructureSize = portSize + MAX_ADDR_LEN + MAX_USR_LEN + MAX_USR_PWD
      var dwDataLen = new Buffer(4)
      dwDataLen.writeInt32LE(AUTH_PWD_StructureSize)
      dwDataLen.type = dword

      // pbData - 
      var pbData = new Buffer(AUTH_PWD_StructureSize)
      //    char szAddr [MAX_ADDR_LEN]
      pbData.write('10.61.53.64')
      //    int nPort
      const port = 4433
      pbData.writeInt32LE(port, MAX_ADDR_LEN)
      //    char szUserId [MAX_USR_LEN]
      pbData.write('master', MAX_ADDR_LEN + portSize)
      //    char szPassword [MAX_USR_PWD]
      pbData.writeInt32LE('12345678', MAX_ADDR_LEN + portSize + MAX_USR_LEN)

      // dwFlags - 
      var dwFlags = new Buffer(4)
      dwFlags.writeInt32LE(0)
      dwFlags.type = dword

      libsdinamo.DOpenSession(HSESSIONCTX_value, dwParam, pbData, dwDataLen, dwFlags)
      // var dbHandle = HSESSIONCTX_value.deref()

      // *** DFinalize
      libsdinamo.DFinalize()
    }
  }
}
</script>