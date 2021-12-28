<template>
  <v-app id="inspire">
    <v-navigation-drawer
        app
        clipped
        v-model="drawer"
        :mini-variant="mini"
      >
        <v-list-item 
        class="px-2" link
        to="/"
        >
          <v-list-item-avatar>
            <v-img src="fwTVrf0Qt5E.jpg"></v-img>
          </v-list-item-avatar>
  
          <v-list-item-title>Кадыров Денис</v-list-item-title>
<!--   
          <v-btn
            icon
           
          >
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn> -->
        </v-list-item>
  
        <v-divider></v-divider>
  
<v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="selectedItem"
            color="primary"
          >
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :to="item.link"
            >
            
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
  
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    <v-app-bar
      app
      clipped-left
      dark
    >
      <v-app-bar-nav-icon         @click="mini = !mini"
></v-app-bar-nav-icon>

      <v-toolbar-title>Магистратура 1 курс. Современные компьютерные технологии. Выполнил: Кадыров Денис Раисович</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn 
        icon
        @click="mini = !mini"
      >
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
          <router-view></router-view>

      
      <!-- <v-container>

        <v-row>
          <v-col
            v-for="n in 256"
            :key="n"
            rows="6"
            cols="4"
          >
            <v-card 
            height="50"
            width="50"
            
            ></v-card>
          </v-col>
        </v-row>
      </v-container> -->
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    // HelloWorld,
  },

  data: () => ({
     drawer: true,
      items: [
        { title: '1.Слайдер', icon: 'mdi-image-multiple', link: '/slider' },
        { title: '2. Калькулятор', icon: 'mdi-calculator' , link: '/calculator'},
        { title: '3. Обмен', icon: 'mdi-swap-horizontal-bold' , link: '/move'},
        { title: '4. Карусель', icon: 'mdi-sync' , link: '/carousel'},
        { title: '5. Магазин', icon: 'mdi-cart', link: '/store'},
        { title: '6. Тест', icon: 'mdi-checkbox-blank-badge-outline' , link: '/test'},
      ],
      mini:  false,
  }),
};
</script>
