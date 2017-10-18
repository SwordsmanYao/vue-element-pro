const app = {
  state: {
    sidebar: {
      opened: true
    }
  },
  // mutation 是同步的，里面不要写异步请求
  mutations: {
    TOGGLE_SIDEBAR: state => {
      state.sidebar.opened = !state.sidebar.opened
    }
  },
  // ajax 请求写在 action 里面
  actions: {
    ToggleSideBar: ({commit}) => {
      commit('TOGGLE_SIDEBAR')
    }
  }
}

export default app
