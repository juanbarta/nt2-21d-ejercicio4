
export default {
  name: 'src-componentes-formulario',
  components: {},
  props: [],
  data () {
    return {
      formData: this.getInicialData(),
      formState : {},
      nombreMinLength : 5,
      nombreMaxLength : 15,
      edadMin : 18,
      edadMax : 120,

      usuarios : [],
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    
    getInicialData(){
      return {
        nombre: '',
        edad: '',
        email: ''
      }
    },

    enviar(){
      console.log({...this.formData})
      this.usuarios.push({...this.formData})
      this.formData = this.getInicialData()
      this.formState._reset()

    }
  }
}


