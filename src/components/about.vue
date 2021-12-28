<template>  
      <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step
          step="1"
        >
          Личное
        </v-stepper-step>
  
        <v-divider></v-divider>
  
        <v-stepper-step
          step="2"
        >
          Образование        
        </v-stepper-step>
  
        <v-divider></v-divider>
  
        <v-stepper-step step="3">
          Работа
        </v-stepper-step>
                <v-divider></v-divider>

         <v-stepper-step step="4">
          Дополнительно
        </v-stepper-step>
      </v-stepper-header>
  
      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card
            class="mb-12"
            min-height="400px"
          >
          <br>
          <v-data-table
              :headers="personalInfoHeaders"
              :items="personalInfo"
              hide-default-header
              hide-default-footer
              class="elevation-1"
          ></v-data-table>
          </v-card>
  
          <v-btn
            color="primary"
            @click="e1 = 2"
          >
            Образование
          </v-btn>
        </v-stepper-content>
  
        <v-stepper-content step="2">
          <v-card
            class="mb-12"
            min-height="400px"
          >     <v-data-table
              :headers="personalInfoHeaders"
              :items="studyInfo"
              hide-default-header
              hide-default-footer
              class="elevation-1"
          ></v-data-table></v-card>
  
          <v-btn
            color="primary"
            @click="e1 = 3"
          >
            Работа
          </v-btn>
        </v-stepper-content>
  
        <v-stepper-content step="3">
          <v-card
            class="mb-12"
            min-height="400px"
          >     <v-data-table
              :headers="personalInfoHeaders"
              :items="workInfo"
              hide-default-header
              hide-default-footer
              class="elevation-1"
          ></v-data-table></v-card>
  
          <v-btn
            color="primary"
            @click="e1 = 4"
          >
            Дополнительно
          </v-btn>
        </v-stepper-content>

                <v-stepper-content step="4">
          <v-card
            class="mb-12"
            min-height="400px"
          >
          <v-row>
            <v-col>
            <v-img
                width="400px"
                src='fwTVrf0Qt5E.jpg'
                >
            </v-img>
            </v-col>
            <v-col>
              <v-data-table
              :headers="personalInfoHeaders"
              :items="addtitionalInfo"
              hide-default-header
              hide-default-footer
              class="elevation-1"
          ></v-data-table>
          </v-col>
          </v-row>
          </v-card>
  
          <v-btn
            color="primary"
            @click="e1 = 1"
          >
            Личное
          </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
</template>

<script>
  export default {
    data: () => ({
      e1: 1,
      personalInfoHeaders: [
        { text: 'left',align: 'start',value: 'left'},
        { text: 'right', value: 'right' },
      ],
      personalInfo: [
          {
            left: "ФИО",
            right: "Кадыров Денис Раоисович"
          },
          {
            left: "Дата рождения",
            right: "23.08.1996"
          },
          {
            left: "Знак зодиака",
            right: "Фенек"
          },
          {
            left: "Интересы",
            right: "Написание серии книг в жанре фентази,  3D моделирование"
          },
             {
            left: "Любимый Фильм",
            right: "Мост в терабитию"
          },
             {
            left: "Любимый Аниме",
            right: "Азбука цветов"
          },
             {
            left: "Любимый Книга",
            right: "Трудно быть богом Братья Стругацкие"
          },
          {
            left: "Любимый сериал",
            right: "Токкэби"
          },
      ],
            studyInfo: [
          {
            left: "Среднее",
            right: "МБОУ Лицей номер 3. город Учалы",
          },
          {
            left: "Доп образование",
            right: "Художественная школа. город Учалы",
          },
          {
            left: "Высшее незаконченное",
            right: "Южноуральскйи государственный университет. Бакалавриат. Точная гироскопия Челябинск (1 курс)",
          },
          {
            left: "Доп образование",
            right: "GoStudy. Курсы Чешского. Брно, Чехия",
          },
          {
            left: "Высшее незаконченное",
            right: "ВУТБР. Бакалавриат. Факультет информационных технологий. Информационные технологии Брно,Чехия (1 семестр)",
          },
          {
            left: "Высшее",
            right: "Башкирский государственный университет. Бакалавриат. ФМиИТ. Прикладная информатика. Уфа",
          },
          {
            left: "Высшее",
            right: "Башкирский государственный университет. Магистратура. ФМиИТ. Прикладная математика и информатика,  Уфа",
          }
      ],
      workInfo: [
          {
            left: "Подработка",
            right: "Вожатый лицей номер 3, город Учалы",
          },
          {
            left: "Подработка",
            right: "Аниматор, город Учалы",
          },
          {
            left: "Подработка",
            right: "Курьер, город Брно",
          },
          {
            left: "Официалка",
            right: "Контролёр киномеханик, Кинотеатр Урал, город Учалы (1 год)",
          },
          {
            left: "Подработка",
            right: "Вожатый, лагерь Березка, Уфа",
          },
          {
            left: "ГПХ",
            right: "Программист фулстек, студия Банан, Уфа (1.5 года)",
          },
          {
            left: "Официалка",
            right: "Бекенд разработчик, Амиговеб, Россия (4 месяца)",
          }
      ],
      addtitionalInfo: [
          {
            left: "Мобильный",
            right: "+79964031723",
          },
          {
            left: "Почта",
            right: "dark.woc.ki@gmail.com",
          },
          {
            left: "Почта(рабочая)",
            right: "work.woc.ki@gmail.com",
          },
          {
            left: "Вк",
            right: "https://vk.com/darkwocki",
          },
          {
            left: "Habr Career",
            right: "https://career.habr.com/woc-ki",
          }
      ]
          
    })
  }
</script>
