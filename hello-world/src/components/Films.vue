<template>
  <div>
    <div class="films" v-for="(film, indexFilm) in cinema" :key="indexFilm">
      <button class="film" data-bs-toggle="collapse" href="#salas" role="button" aria-expanded="false" aria-controls="salas">
        Films {{indexFilm+1}}</button>
        <div class="collapse" id="salas" v-for="(sala, indexSala) in cinema[indexFilm]" :key="indexSala">
          <div class="filas">
            SALA {{indexSala+1}}</div>
            <div class="filas" v-for="(fila, indexFila) in cinema[indexFilm][indexSala]" :key="indexFila">
                <div class="filas">{{'Fila '+(indexFila+1)}}</div>
                  <div class="seats" v-for="(seat, indexSeat) in cinema[indexFilm][indexSala][indexFila]" :key="indexSeat">
                    <button class="seat" @click="seatClicked(indexFila, indexSeat)">
                      {{indexFila}}{{indexSeat}}
                      <!-- <img 
                      class="seat"
                      :src="
                      seatSelected[seat]
                      ? 'https://image.shutterstock.com/image-vector/cinema-seats-popcorn-drinks-glasses-600w-523923340.jpg'
                      : 'https://us.123rf.com/450wm/quartadis/quartadis1701/quartadis170100025/69263406-una-silla-azul.jpg?ver=6'
                      "
                      alt=""> -->
                    </button>
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
    hide: false,
    seatSelected: [],
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
              this.cinema[i][j][k][l] = [l];
          }
        }
      }
    }
  },
  methods: {
    seatClicked() {
      this.seatSelected = !this.seatSelected;
      console.log('seatSelected: ',this.seatSelected);
    },
    // showAndHide() {
    //   this.hide = !this.hide;
    // },
  },
}
</script>

<style scoped>
.hide {
  display: none;
}

.films {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, black, rgb(10, 117, 10));
}

.film {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  color: white;
  font-family: fantasy;
  background-color: rgb(17, 250, 17);
}

.filas {
  display: flex;
}

.salas {  
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70%;
  color: rgb(17, 250, 17);
  font-weight: bold;
  background: transparent;
  border-style: solid;
}

/* .sala {
  display: flex;
  flex-direction: row;
  width: 25%;
  justify-content: center;
  font-size: 30px;
  color:rgb(17, 250, 17);
  background-color: black;
} */

.filas {
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  color: rgb(17, 250, 17);
  background-color: transparent;
}

.seats {
  padding: 5px;
  margin: 2px;
}

/* 
.seats {
  display: flex;
  flex-direction: row;
  color: yellow;
} */

.seat {
  padding: 10px;
  width: 70px;
}

button {
  background-color: white;
}
/* .img-seat {
  width: 50%;
  height: 65%;
} */
</style>
