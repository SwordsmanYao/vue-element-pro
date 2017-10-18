import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app
  }
})

export default store

// 示例
// import Vue from 'vue'
// import Vuex from 'vuex'
// import axios from 'axios'
//
// Vue.use(Vuex)
//
// let selectModule = {
//   state:{
//     title:'hello123',
//     list: []
//   },
//   mutations:{
//     changeTitle(state, payload){
//       state.title = payload.title
//     },
//     changeList(state, list){
//       state.list = list;
//     }
//   },
//   actions:{
//     getListAction({commit}){
//       // 发送请求
//       axios.get('http://easy-mock.com/mock/594f5d4b9adc231f3569be76/list/list')
//         .then((data)=>{
//           commit("changeList", data.data);  // 拿到数据后，提交mutations，改变状态
//         })
//         .catch((error)=>{
//           conso.log(error)
//         })
//     }
//   }
// };
//
// // this.$store.state.title
// // this.$store.state.selectModule.title
//
// // 定义一个容器
//
// let store = new Vuex.Store({
//   state: {
//     count: 100
//   },
//  // 计算属性
//   getters: {
//     filterCount(state){
//       return state.count >= 120 ? 120 : state.count;
//     }
//   },
//   mutations: {
//     addIncrement(state, payload){
//       state.count += payload.n;
//     },
//     deIncrement(state, payload){
//       state.count -= payload.de;
//     }
//   },
//   actions: {
//     addAction({commit,dispatch}){
//       setTimeout(()=>{
//         // 改变状态，提交mutations
//         commit("addIncrement", {n:5})
//         dispatch("textAction", {test: '测试'})
//       },1000)
//     },
//     textAction(context, obj){
//       console.log(obj)
//     }
//   },
//   modules:{
//     selectModule
//   }
// })
//
// export default store

// <template>
// <div>
// <h2>简易加法计算器</h2>
// <div>
// <input type="button" value="-" @click="deHandle({de:5})" />
//   <span>{{count}}</span>
// <input type="button" value="+" @click="addHandle" />
//   <p>{{num2}}</p>
// </div>
// </div>
// </template>
//
// <script>
// import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
//
// export default {
//   computed: {
//     ...mapGetters({
//       num2: 'filterCount'
//     }),
//     ...mapState(['count'])
//   }
//   ,
//   methods: {
//     ...mapActions({
//       addHandle: 'addAction'
//     }),
//     ...mapMutations({
//       deHandle:'deIncrement'
//     })
//   }
//
// }
// </script>
