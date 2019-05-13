import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    position: [],
    nodesData: [],
    sliderData: {
      id: '',
      index: '',
      showSlider: false,
      type: '',
      formData: '' // 表单数据,仅仅用于编辑时候的使用
    },
    addData: '', // 新建侧边栏数据
    editData: '' // 编辑侧边栏数据
    },
  mutations: {
    updateSlider (state, params) { //  侧边栏显示隐藏
      state.sliderData = {...state.sliderData,...params}
    },
    updateAddData (state, params) { //  侧边栏显示隐藏
      state.addData = {...params}
    },
    updateEditData (state, data) {  // 缓存数据
      state.editData = data
    },
    updatePosition (state, newPosition) {
      for (let i = 0; i < state.position.length; i++) {
        if (state.position[i].id === newPosition.id) {
          state.position.splice(i, 1)
        }
      }
      state.position.push(newPosition)
    },
    /*
    * 对于新郑数据需要进行全局改变处理间接手段
    * */
    updateNodes (state, val) {
      state.nodesData.push(new Date())
    }
  }
})
