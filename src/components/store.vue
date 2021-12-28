<template>
    <div>
        <v-dialog
            v-model="cartDialog"
            width="700"
        >
            <v-card>
            <v-card-title class="text-h5 grey lighten-2">
                Корзина
            </v-card-title>
    
            <v-card-text>
                <v-spacer></v-spacer>
                <v-data-table
                    :headers="headers"
                    :items="cart"
                    hide-default-header
                    hide-default-footer
                    class="elevation-1"
                >
                <template v-slot:item.actions="{ item }">
                    <v-icon
                        small
                        class="mr-2"
                        @click="reduceOne(item)"
                        >
                        mdi-minus
                    </v-icon>
                    <v-icon
                        small
                        @click="addOne(item)"
                        >
                        mdi-plus
                    </v-icon>
                    <v-icon
                        color="red"
                        small
                        @click="deleteItem(item)"
                        >
                        mdi-delete
                    </v-icon>
                </template>
                </v-data-table>

            </v-card-text>
    
            <v-divider></v-divider>
    
            <v-card-actions>
                Итого: {{itogo}}
                <v-spacer></v-spacer>
                Размер скидки: {{skidka}}
                <v-btn
                color="primary"
                text
                @click="bay()"
                >
                Купить
                </v-btn>
            </v-card-actions>
            </v-card>
        </v-dialog>
        <v-toolbar>    
            <v-toolbar-title>{{StoreName}}.У вас на счету: {{chet}}</v-toolbar-title>
            <v-spacer></v-spacer>
        
    
            <!-- <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
            </v-btn>
    
            <v-btn icon>
            <v-icon>mdi-heart</v-icon>
            </v-btn> -->
            <v-badge
                :content="cartItemsCount"
                :value="cartItemsCount"
                color="green"
                >
                <v-btn 
                    icon
                    @click="cartDialog = true"
                >
                    <v-icon color="blue">mdi-cart</v-icon>
                </v-btn>
            </v-badge>
        </v-toolbar>         
      <v-card
            max-width="mx-auto"
            class="mx-auto"
            >
            <v-container class="pa-1">
                <v-item-group
                v-model="selected"
                multiple
                >
                <v-row>
                    <v-col
                    v-for="(staff, i) in staffs"
                    :key="i"
                    cols="12"
                    md="3"
                    >
                    <v-card
                        class="mx-auto"
                        color="grey lighten-4"
                        max-width="300"
                    >
                        <v-img
                        :aspect-ratio="16/9"
                        :src=getImgUrl(staff.src)
                        cover
                        >
                        </v-img>
                        <v-card-text
                        class="pt-6"
                        style="position: relative;"
                        >
                        <v-btn
                            absolute
                            color="blue"
                            class="white--text"
                            fab
                            large
                            right
                            top
                            @click="add(staff.uid)"
                            :disabled = !staff.count
                        >
                            <v-icon>mdi-cart</v-icon>
                        </v-btn>
                        <div class="font-weight-light grey--text text-h5 mb-2">
                            {{staff.name}}
                        </div>
                        <div v-if="staff.discount > 0">
                            <h3 class="text-h4 font-weight-light blue--text mb-2">
                                {{staff.price*(100-staff.discount)/100}}₽
                            </h3>
                            <h3 class="text-h10 font-weight-light blue--text mb-2">
                                <strike>{{staff.price}}₽</strike>
                            </h3>
                        </div>
                        <div v-else>
                            <h3 class="text-h4 font-weight-light blue--text mb-2">
                                {{staff.price}}₽
                            </h3>
                        </div>
                        <div class="font-weight-light text-h6 mb-2">
                            {{staff.description}}
                        </div>
                        <div class="font-weight-light text-h6 mb-2">
                            Остаток: {{staff.count}}
                        </div>
                        </v-card-text>
                    </v-card>
                    </v-col>
                </v-row>
                </v-item-group>
            </v-container>
        </v-card>

        <v-snackbar
        v-model="snackbar"
        :timeout="timeout"
      >
        {{ text }}
  
        <template v-slot:action="{ attrs }">
          <v-btn
            color="red"
            text
            v-bind="attrs"
            @click="snackbar = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>

    </div>
</template>

<script>
    export default {
        data () {
        return {
            snackbar: false,
            text: 'Недостаточно средств!',
            timeout: 2000,
            chet: 100000,
            tab: null,
            StoreName: "Aiko Store",
            cartItemsCount: 0,
            items: [
                'Скидки', 'Товары'
            ],
            headers: [
                { text: 'name',align: 'start',value: 'name'},
                { text: 'price', value: 'price' },
                { text: 'discount', value: 'discount' },
                { text: 'count', value: 'count' },
                { text: 'Actions', value: 'actions'}
            ],
            cartDialog: false,
            staffs: 
            [
                { 
                    uid : 1,
                    name: "Apple iPhone 13 mini", 
                    description: "Смартфон, 128 ГБ, «тёмная ночь»",
                    price : "69990",
                    discount: 10,
                    discount_triple: null,
                    src: "13mini.jpg",
                    count: 10

                },
                { 
                    uid : 2,
                    name: "GeForce RTX 3090Ti VISION OC", 
                    description: "Видеокарта. RTX. 24Gb",
                    price : "300000",
                    discount: 10,
                    discount_triple: 50,
                    src: "rtx.png",
                    count: 0,
                },
                { 
                    uid : 3,
                    name: "CORSAIR T3 RUSH Gaming Chair", 
                    description: "Кресло игровое.Белое",
                    price : "23990",
                    discount: 0,
                    discount_triple: 0,
                    src: "corsair.jpg",
                    count: 1,
                },
                {
                    uid: 4,
                    name: "HyperX QuadCast S",
                    description: "Микрофон",
                    price : "15990",
                    discount: 20,
                    discount_triple: 0,
                    src: "quad.png",
                    count: 100,
                }
                
            ],
            cart: [],
            itogo: 0,
            skidka: 0
        }
    },
    methods: {
        getImgUrl(pic) {
            return require('../assets/'+pic)
        },
        reduceOne(item) {
                item.count--
                this.staffs.find(x => x.uid === item.uid).count++
                if (item.count == 0) {
                    let index = this.cart.findIndex(x => x.uid === item.uid)
                    this.cart = this.cart.filter((v,i) => i !== index)
                }
                this.itogoUpdate()
        },
        addOne(item) {
            if (this.staffs.find(x => x.uid === item.uid).count > 0) {
                this.staffs.find(x => x.uid === item.uid).count--
                item.count++
            }
            this.itogoUpdate()
        },
        deleteItem(item) {
            this.staffs.find(x => x.uid === item.uid).count+=item.count
            let index = this.cart.findIndex(x => x.uid === item.uid)
            this.cart = this.cart.filter((v,i) => i !== index)
            this.itogoUpdate()
        },
        add(id){
            var staff = this.staffs.find(x => x.uid === id)
            if (staff.count > 0) {
                this.staffs.find(x => x.uid === id).count--
                this.cartItemsCount++
                var cartItem = this.cart.find(x => x.uid === id)
                if (cartItem) {
                    cartItem.count++
                }else{
                    this.cart.push({
                        uid: staff.uid,
                        name: staff.name,
                        price: staff.price,
                        discount: staff.discount,
                        count: 1
                    })
                }
                            
            }
            this.itogoUpdate()
        },
        itogoUpdate() {
            this.itogo = 0
            this.skidka = 0
            this.cart.forEach(e => {
                this.itogo+=parseInt(e.price*e.count)
                this.skidka+= parseInt(this.itogo*e.discount/100)
            })
            this.itogo = this.itogo - this.skidka
        },

        bay() {
            if (this.itogo <= this.chet) {
                this.chet -= this.itogo
                this.cart = []
                this.itogo = 0
                this.skidka = 0
            }else{
                this.snackbar = true
            }
        },

    }
    }
</script>

<style>
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    width: 100%;
}
</style>
