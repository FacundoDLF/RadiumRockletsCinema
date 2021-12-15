<template>
  <div>
    <div class="films" v-for="(film, indexFilm) in cinema" :key="indexFilm">
      <div>Films {{indexFilm+1}}</div>
        <div v-for="(sala, indexSala) in cinema[indexFilm]" :key="indexSala">
          <div>Salas {{indexSala+1}}</div>
            <div v-for="(fila, indexFila) in cinema[indexFilm][indexSala]" :key="indexFila">
              <div>Fila {{indexFila+1}}</div>
                <div v-for="(seat, indexSeat) in cinema[indexFilm][indexSala][indexFila]" :key="indexSeat">
                  <div>Seat {{indexSeat+1}}</div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Films',
  data:() => ({
    cinema:[],
  }),
  created() {
    for (let i = 0; i < 4; i++) {
      this.cinema.push([]);
      for (let j = 0; j < 5; j++) {
        this.cinema[i].push([]);
        for (let k = 0; k < 10; k++) {
          this.cinema[i][j].push([]);
          for (let l = 0; l < 10; l++) {
              this.cinema[i][j][k].push([]);
              this.cinema[i][j][k][l] = false;           
          }
        }
      }
    }
  },
  mounted() {
    console.log(this.cinema);
  },
}
</script>

<style scoped>
.films {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;

}

ul {
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;
  list-style: none;
  margin: 0 0 0 0;
}
button, label {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 60px;
  margin: 0 0 0 0;
  font-size: 20px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>
