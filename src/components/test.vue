<template>
    <div>
        <v-stepper v-if = "e1 < 6" v-model="e1">
        <v-stepper-header>
            <v-stepper-step
            :complete="e1 > 1"
            step="1"
            >
            </v-stepper-step>
    
            <v-divider></v-divider>
    
            <v-stepper-step
            :complete="e1 > 2"
            step="2"
            >
            </v-stepper-step>
    
            <v-divider></v-divider>

            <v-stepper-step
            :complete="e1 > 3"
            step="3"
            >
            </v-stepper-step>
    
            <v-divider></v-divider>
    
            <v-stepper-step
                :complete="e1 > 4"
                step="4"
            >
            </v-stepper-step>
    
            <v-divider></v-divider>

            <v-stepper-step step="5">
            </v-stepper-step>


            
        </v-stepper-header>
    
        <v-stepper-items>
            <v-stepper-content step="1">
            <v-card
                class="mb-12"
                height="300px"
            >
            <v-card-text>
                <v-radio-group v-model="q1">
                    <template v-slot:label>
                        <div>Сколько будет <strong>2+2</strong></div>
                    </template>
                    <v-radio value="4">
                        <template v-slot:label>
                            <div>Конечно же <strong class="success--text">4</strong></div>
                        </template>
                    </v-radio>
                    <v-radio value="3.99">
                        <template v-slot:label>
                            <div>Определенно <strong class="primary--text">3.99</strong></div>
                        </template>
                    </v-radio>
                </v-radio-group>
            </v-card-text>
            </v-card>
    
            <v-btn
                color="primary"
                @click="e1 = 2"
                v-if="q1"
            >
                Ответить
            </v-btn>
            </v-stepper-content>
    
            <v-stepper-content step="2">
            <v-card
                class="mb-12"
                height="300px"
            >
                <v-card-text>
                    <v-radio-group v-model="q2">
                        <template v-slot:label>
                            <div>Является ли использование <strong>унарного плюса (оператор "+")</strong> самым быстрым способом преобразования строки в число?</div>
                        </template>
                        <v-radio value="Да">
                            <template v-slot:label>
                                <div>Конечно же <strong class="success--text">Да</strong></div>
                            </template>
                        </v-radio>
                        <v-radio value="Нет">
                            <template v-slot:label>
                                <div>Определенно <strong class="primary--text">Нет</strong></div>
                            </template>
                        </v-radio>
                    </v-radio-group>
                </v-card-text>
            </v-card>
    
            <v-btn
                color="primary"
                @click="e1 = 3"
                v-if="q2"
            >
                Ответить
            </v-btn>
    
            <v-btn
                @click="e1 = 1"
            >
                Назад
            </v-btn>
            </v-stepper-content>
    
            <v-stepper-content step="3">
            <v-card
                class="mb-12"
                height="300px"
            >
            <v-spacer></v-spacer>
            <template><div>Выберете фазы относящиеся к <strong>Event Propagation</strong></div></template>
            
            <v-checkbox
                v-model="q31"
                :label="`Фаза погружения (захвата, перехвата)`"
            ></v-checkbox>
            <v-checkbox
                v-model="q32"
                :label="`Целевая фаза`"
            ></v-checkbox>
            <v-checkbox
                v-model="q33"
                :label="`Фаза всплытия`"
            ></v-checkbox>
            
            </v-card>
    
            <v-btn
                color="primary"
                @click="e1 = 4"
                v-if="q31 == true||q32 == true||q33 == true"
            >
                Ответить
            </v-btn>
    
            <v-btn text  @click="e1 = 2">
                Назад
            </v-btn>
            </v-stepper-content>
               <v-stepper-content step="4">
            <v-card
                class="mb-12"
                height="300px"
            >
                        <v-radio-group v-model="q4">
                <template v-slot:label>
                    <div>Что такое <strong>ECMAScript</strong>?</div>
                </template>
                <v-radio value="Новый язык программирования.">
                    <template v-slot:label>
                        <div>Конечно же <strong class="primary--text">Новый язык программирования.</strong></div>
                    </template>
                </v-radio>
                <v-radio value="Переработанная реализация Javascript.">
                    <template v-slot:label>
                        <div>Конечно же <strong class="primary--text">Переработанная реализация Javascript.</strong></div>
                    </template>
                </v-radio>
                  <v-radio value="true">
                    <template v-slot:label>
                        <div>Конечно же <strong class="success--text">Спецификация языка Javascript.</strong></div>
                    </template>
                 </v-radio>
            </v-radio-group>
            </v-card>
            <v-btn
                color="primary"
                @click="e1 = 5"
                v-if="q4"
            >
                Ответить
            </v-btn>
    
                <v-btn
                @click="e1 = 3"
            >
                Назад
            </v-btn>
            </v-stepper-content>

               <v-stepper-content step="5">
            <v-card
                class="mb-12"
                height="300px"
            >
            <v-radio-group v-model="q5">
                <template v-slot:label>
                    <div>Чему равна переменная name?<strong>let name = "пупкин".replace("п", "д")</strong></div>
                </template>
                <v-radio value="дудкин">
                    <template v-slot:label>
                        <div>Конечно же <strong class="primary--text">дудкин</strong></div>
                    </template>
                </v-radio>
                <v-radio value="дупкин">
                    <template v-slot:label>
                        <div>Конечно же <strong class="success--text">дупкин</strong></div>
                    </template>
                </v-radio>
                  <v-radio value="пупкин">
                    <template v-slot:label>
                        <div>Конечно же <strong class="primary--text">пупкин</strong></div>
                    </template>
                </v-radio>
                  <v-radio value="ляпкин-тяпкин">
                    <template v-slot:label>
                        <div>Конечно же <strong class="primary--text">ляпкин-тяпкин</strong></div>
                    </template>
                </v-radio>
            </v-radio-group>
            
            </v-card>
    
            <v-btn
                color="primary"
                v-if="q5"
                @click="result()"
            >
                Закончить
            </v-btn>
    
                <v-btn
                @click="e1 = 4"
            >
                Назад
            </v-btn>
            </v-stepper-content>
        </v-stepper-items>
        </v-stepper>
        <h1 v-if="e1 == 6"> Ваш результат: {{resultat}} балов из 5.</h1>     
            <v-btn
                color="primary"
                @click="restart()"
                v-if="e1 == 6"
            >
                Попробовать заново
            </v-btn>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                e1:1,
                q1: false,
                q2: false,
                q31: false,
                q32: false,
                q33: false,
                q4: false,
                q5: false,
                resultat: 0,
                questions: [
                    {
                        id: 1,
                        question: '2+2=?',
                        answers: [
                            {
                                id: 1,
                                answer: '4',
                                correct: true
                            },
                            {   
                                id: 2,
                                answer: '3.99',
                                correct: false
                            },
                            {   id: 3,
                                answer: '4',
                                correct: true
                            }
                        ],
                        multi: false
                    }

                ]
            }
        },
        methods: {
            result() {
                this.e1 = 6
                if (this.q1 == '4') {
                    this.resultat++
                }
                if (this.q2 == 'Да') {
                    this.resultat++
                }
                 if (this.q31 & this.q32 & this.q33) {
                    this.resultat++
                }
                 if (this.q4 == 'true') {
                    this.resultat++
                }
                 if (this.q5 == 'дупкин') {
                    this.resultat++
                }
            },
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
            restart() {
                this.resultat = 0
                this.e1 = 1
                this.q1 = null
                this.q2 = null
                this.q31 = false
                this.q32 = false
                this.q33 = false
                this.q4 = false
                this.q5 = false
            },
            start() {
                let timerId = setInterval(() => this.update(), 200);
                this.timerId = timerId
            },
            stop() {
                clearInterval(this.timerId)
                this.timerId = null
            },
        },

    }
</script>
