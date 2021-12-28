<template>
<v-div>
    <v-row>
    

        <v-div  
            v-for="(item,i) in items"
            :key="i"
        >
            <v-img
                :src="item.src"
                reverse-transition="fade-transition"
                transition="fade-transition"
                height="300px"
                width="300px"
            >
                <div class="number">{{item.id}}</div>
            </v-img>
        </v-div>
        <v-col>
        <v-select
            :items=[1,2,3,4]
            label="First"
            item-text="id"
            v-model = "first"
            solo
        ></v-select>
        <v-select
            :items=[1,2,3,4]
            label="Second"
            item-text="id"
            v-model = "second"
            solo
        ></v-select>
        <v-btn
            color="accent"
            elevation="2"
            @click="move(get(first),get(second))"
        >
            Поменять
        </v-btn>    
            
        </v-col>
    </v-row>
</v-div>
</template>

<script>
    export default {
        data () {
            return {
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
            move (first,second) {
                const tempId = first.id
                const tempSrc = first.src
                first.id = second.id
                second.id = tempId

                first.src = second.src
                second.src = tempSrc
            },
            get (id) {
                return this.items.find( x => x.id == id)
            }
        },

    }
</script>

<style>
.number {
    color: red;
    font-size: 100px;
}
</style>
