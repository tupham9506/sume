import Login from '~/components/login';

export default {
  name: 'pages',
  components: {
    Login
  },
  props: [],
  data () {
    return {
      isLoginFormOpen: false
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    openLoginForm () {
      this.isLoginFormOpen = true;
    }
  }
}


