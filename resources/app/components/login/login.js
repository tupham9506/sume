
export default {
  name: 'login',
  components: {},
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    login () {
      alert('something went wrong')
    },
    closeDialog () {
      this.$emit('update:isOpen', false);
    }
  }
}


