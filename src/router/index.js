import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/screens/Home'
import BookList from '@/screens/BookList'
import ReadingList from '@/screens/ReadingList'
import BookDetail from '@/screens/BookDetail'
import Contact from '@/screens/Contact'
import Meta from 'vue-meta'


Vue.use(Router)
Vue.use(Meta)

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
    },
    {
      path: '/books/:id.html',
      name: 'BookDetail',
      component: BookDetail,
      props: true,
    }

  ],
  mode: 'history'

})
