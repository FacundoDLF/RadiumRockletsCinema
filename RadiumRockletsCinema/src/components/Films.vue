<template>
  <div>
    <button class="btn filas" @click="resetAll()">Reset</button>
    <div class="films" v-for="(film, indexFilm) in cinema" :key="indexFilm">
      <button class="film" data-bs-toggle="collapse" :href="`#salas${indexFilm}`" role="button" aria-expanded="false" aria-controls="salas">
        Films {{indexFilm+1}}</button>
        <div class="collapse  " :id="`salas${indexFilm}`" v-for="(sala, indexSala) in cinema[indexFilm]" :key="indexSala">
          <button class="sala w-100" data-bs-toggle="collapse" :href="`#filas${indexSala}`" role="button" aria-expanded="false" aria-controls="filas">
            SALA {{indexSala+1}}</button>
            <div class="collapse" :id="`filas${indexSala}`">
              <button class="filas" @click="resetSala(indexSala)">Reset Sala {{indexSala+1}}</button>
            </div>
            <div class="collapse" :id="`filas${indexSala}`">
              <div class="filas" v-for="(fila, indexFila) in cinema[indexFilm][indexSala]" :key="indexFila">
                  <button class="btn-fila" @click="resetFila()">{{'Reset Fila '+(indexFila+1)}}</button>
                    <div class="seats" v-for="(seat, indexSeat) in cinema[indexFilm][indexSala][indexFila]" :key="indexSeat">
                      <button 
                        class="seat"
                        @click="seatClicked(indexFilm, indexSala, indexFila, indexSeat)"
                      >
                        <img 
                          class="img-seat"
                          :src="
                          cinema[indexFilm][indexSala][indexFila][indexSeat] === false
                          ? 'https://us.123rf.com/450wm/quartadis/quartadis1701/quartadis170100025/69263406-una-silla-azul.jpg?ver=6'
                          : 'https://image.shutterstock.com/image-vector/cinema-seats-popcorn-drinks-glasses-600w-523923340.jpg'
                          "
                          alt="">
                      </button>
                    </div>
              </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'Films',
  data:() => ({
    cinema:[],
  }),
  created() {
    this.forCinema();
  },
  methods: {
    resetAll() {
       for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 5; j++) {
          for (let k = 0; k < 10; k++) {
            for (let l = 0; l < 10; l++) {
              Vue.set(this.cinema[i][j][k], l, false)
            }
          }
        }
      }
    },
    resetSala() {
       for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 5; j++) {
          for (let k = 0; k < 10; k++) {
            for (let l = 0; l < 10; l++) {
              Vue.set(this.cinema[i][j][k], l, false)
            }
          }
        }
      }
    },
    resetFila() {
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 5; j++) {
          for (let k = 0; k < 10; k++) {
            for (let l = 0; l < 10; l++) {
              Vue.set(this.cinema[i][j][k], l, false)
            }
          }
        }
      }
    },
    forCinema() {
      for (let i = 0; i < 4; i++) {
      this.cinema.push([]);
        for (let j = 0; j < 5; j++) {
          this.cinema[i].push([]);
          for (let k = 0; k < 10; k++) {
            this.cinema[i][j].push([]);
            for (let l = 0; l < 10; l++) {
                this.cinema[i][j][k].push([]);
                this.cinema[i][j][k][l] = false
            }
          }
        }
      }
    },
    seatClicked(a,b,c,d) {
      Vue.set(this.cinema[a][b][c], d, !this.cinema[a][b][c][d])
    },
  },
}
</script>

<style scoped>

.films {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgb(255,255,255), rgb(255,255,255));
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
  justify-content: center;
  flex-direction: row;
  width: 100%;
  letter-spacing: 2px;
  transform: matrix3d();
  background-color: transparent;
}

.fila {
  display: flex;
  width: 100%;
  align-items: center;
  color: rgb(17, 250, 17);
  text-shadow: 1px 1px 2px rgb(0, 0, 8), 0 0 25px rgb(17, 250, 17), 0 0 5px rgb(17, 250, 17);
}
.btn-fila {
  border-style: none;
  background-color: transparent;
  color: rgb(17, 250, 17);
  text-shadow: 1px 1px 2px rgb(0, 0, 8), 0 0 25px rgb(17, 250, 17), 0 0 5px rgb(17, 250, 17);
}

.btn-fila:hover {
  font-size: larger;
}

.salas {  
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70%;
  text-shadow: 0px 0px 0  px rgb(0, 0, 8), 0 0 25px rgb(17, 250, 17), 0 0 5px rgb(17, 250, 17);
  color: rgb(0, 0, 8);
  font-weight: bold;
  text-align: center;
  border-style: solid;
  box-shadow: rgb(17, 250, 17) 2px 4px;
}

.sala {
  display: flex;
  justify-content: center;
  color: rgb(17, 250, 17);
  background-color: black;
  border-style: none;
}

.seats {
  padding: 5px;
  margin: 2px;
}

.seat {
  width: 50px;
  height: 50px;
  border-style: none;
  background-color: transparent;
}

.img-seat{
  width: 50px;
  height: 50px;
  transition: width 3s;
  transition: heigth 3s;   
}

.img-seat:hover {
  width: 60px;
  height: 60px
}
</style>
