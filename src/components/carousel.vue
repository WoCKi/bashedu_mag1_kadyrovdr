<template>
<div class='circle-container'>
    <div class="center">
        <v-btn
            centered
            color="green"
            elevation="2"
            @click="start()"
            v-if="timerId == null"
        >
            Запустить
        </v-btn>
        <v-btn
            centered
            color="red"
            elevation="2"
            @click="stop()"
            v-if="timerId != null"
        >
            остановить
        </v-btn> 
    </div>
    <a href='#' :class=this.deg1><img src='1.jpg'></a>
    <a href='#' :class=this.deg2><img src='2.jpg'></a>
    <a href='#' :class=this.deg3><img src='3.jpg'></a>
    <a href='#' :class=this.deg4><img src='4.jpg'></a>
    <a href='#' :class=this.deg5><img src='5.jpg'></a>

</div>
</template>
<script>
    export default {
        data () {
            return {

                timer: 0,
                deg1: 'deg360',
                deg2: 'deg72',
                deg3: 'deg144',
                deg4: 'deg216',
                deg5: 'deg288',
                angel: 0,
                angel1: 72,
                angel2: 144,
                angel3: 216,
                angel4: 288,
                angel5: 360,
                timerId: null,
                items: [
                    {
                        id: 1,
                        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                        
                    },
                    {
                        id: 2,
                        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                    },
                    {
                        id: 3,
                        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                    },
                    {
                        id: 4,
                        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                    },
                ],
            }
        },
        methods: {
            update() {
                this.angel = this.angel1
                this.angel1 = this.angel2
                this.angel2 = this.angel3
                this.angel3 = this.angel4
                this.angel4 = this.angel5
                this.angel5 = this.angel

                this.deg1 = 'deg'+this.angel1
                this.deg2 = 'deg'+this.angel2
                this.deg3 = 'deg'+this.angel3
                this.deg4 = 'deg'+this.angel4
                this.deg5 = 'deg'+this.angel5
            },
            start() {
                let timerId = setInterval(() => this.update(), 500);
                this.timerId = timerId
            },
            stop() {
                clearInterval(this.timerId)
                this.timerId = null
            },
        },

    }
</script>

<style>
.circle-container {
    position: relative;
    width: 24em;
    height: 24em;
    padding: 2.8em;
    /*2.8em = 2em*1.4 (2em = half the width of a link with img, 1.4 = sqrt(2))*/
    border: dashed 1px;
    border-radius: 50%;
    margin: 1.75em auto 0;
}
.circle-container a {
    display: block;
    position: absolute;
    top: 50%; left: 50%;
    width: 4em; height: 4em;
    margin: -2em;
}
.center {
    padding: auto;
}
.circle-container img { display: block; width: 100%; }
.deg0 { transform: translate(12em); } /* 12em = half the width of the wrapper */
.deg72 { transform: rotate(72deg) translate(12em) rotate(-72deg); }
.deg144 { transform: rotate(144deg) translate(12em) rotate(-144deg); }
.deg216 { transform: rotate(216deg) translate(12em) rotate(216deg); }
.deg288 { transform: rotate(288deg) translate(12em) rotate(-298deg); }
.deg360 { transform: translate(12em); }
</style>
