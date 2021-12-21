<template>
  <div>
    <div class="films" v-for="(film, indexFilm) in cinema" :key="indexFilm">
      <button class="film" data-bs-toggle="collapse" href="#salas" role="button" aria-expanded="false" aria-controls="salas">
        Films {{indexFilm+1}}</button>
        <div class="collapse" id="salas" v-for="(sala, indexSala) in cinema[indexFilm]" :key="indexSala">
          <div class="salas" data-bs-toggle="collapse" href="#filas" role="button" aria-expanded="false" aria-controls="filas">
            SALA {{indexSala+1}}</div>
            <div class="filas" v-for="(fila, indexFila) in cinema[indexFilm][indexSala]" :key="indexFila">
                <div class="fila">{{'Fila '+(indexFila+1)}}</div>
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
</template>

<script>
export default {
  name: 'Films',
  data:() => ({
    cinema:[],
    hide: false,
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
              this.cinema[i][j][k][l] = false
          }
        }
      }
    }
  },
  methods: {
    seatClicked(a,b,c,d) {
      this.cinema = [...this.cinema, this.cinema[a][b][c][d] = !this.cinema[a][b][c][d]]
      console.log('Film: ', a);
      console.log('Fila: ', b);
      console.log('Sala: ', c);
      console.log('Seat: ', d);
      console.log('this.cinema[]: ',this.cinema[a][b][c][d]);
    },
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
  align-items: center;
  color: rgb(17, 250, 17);
  text-shadow: 1px 1px 2px rgb(0, 0, 8), 0 0 25px rgb(17, 250, 17), 0 0 5px rgb(17, 250, 17);
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
