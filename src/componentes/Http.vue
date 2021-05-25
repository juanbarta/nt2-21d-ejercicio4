<template>
  <section class="src-componentes-http">
    <div class="jumbotron">
      <h2>Componente Http</h2>
      <br />
      <br />
      <button class="btn btn-success my-3 mr-3" @click="getUsersXMLHttpRequest()">Pedir XMLHttpRequest</button>
      <button class="btn btn-success my-3 mr-3" @click="getUsersFetch()">Pedir Fetch</button>
      <button class="btn btn-success my-3 mr-3" @click="getUsersAxios()">Pedir Axios</button>

      <div v-if="users.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th v-for="(col, index) in getCols" :key="index">{{ col.toUpperCase() }}</th>
          </tr>
          <tr v-for="(user, index) in users" :key="index">
            <td v-for="(col, index) in getCols" :key="index">
              {{ user[col] }}
            </td>
          </tr>
        </table>
        <h4 class="alert alert-success">
          Se encontraron {{ users.length }} usuarios
        </h4>
      </div>
      <h4 v-else class="alert alert-warning">No se encontraron usuarios</h4>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-componentes-http',
    props: [],
    mounted () {

    },
    data () {
      return {
          url: 'https://60ad4f1680a61f0017330b61.mockapi.io/usuarios',
          users: []
      }
    },
    methods: {
      //AJAX - XMLHttpRequest
      getUsersXMLHttpRequest(){
        let req = new XMLHttpRequest

        req.open('get', this.url)

        req.addEventListener('load', () =>{
          if (req.status == 200){
            let response = JSON.parse(req.response)
            this.users = response
          }else{
            console.error(`error en el GET. Status: ${req.status}`)
          }
        })

        req.addEventListener('error', e => {
          console.error(`Error XMLHttpRequest ->`, e)
        })

        req.send()
        },

      //AJAX - Fetch
      getUsersFetch(){
        fetch(this.url)
        .then(users => users.json())
        .then(response =>{
          this.users = response
        })
        .catch(error => console.error(error))
      },

        
      //AJAX - Axios
      getUsersAxios(){
        this.axios(this.url)
        .then(response =>{
          this.users = response.data
        })
        .catch(error => console.error(error))
      }


    },
    computed: {
      getCols(){
        return Object.keys(this.users[0])
      }
    }
}

</script>

<style scoped lang="css">
.src-componentes-http {
}

.jumbotron {
  background-color: #f4d4cca1;
  text-align: justify;
}

h2 {
  font-weight: bold;
  text-align: center;
}
</style>
