<template>
  <div class="salas">
    <ul>
      <li><button>Sala 1</button></li>
      <li><button>Sala 2</button></li>
      <li><button>Sala 3</button></li>
      <li><button>Sala 4</button></li>
      <li><button>Sala 5</button></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Salas',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
