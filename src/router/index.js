import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/screens/Home'
import BookList from '@/screens/BookList'
import ReadingList from '@/screens/ReadingList'
import Contact from '@/screens/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/books/list/:type/:key/:page',
      name: 'BookList',
      component: BookList
    },
    {
      path: '/books/readings/:page',
      name: 'ReadingList',
      component: ReadingList
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }

  ],
  mode: 'history'

})
