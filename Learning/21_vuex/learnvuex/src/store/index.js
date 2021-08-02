import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const modulesA = {
    state: {
        name: "王菲"
    },
    mutations: {
        updataName(state, payload){
            state.name = payload
        }
    },
    getters: {
        fullName(state) {
            return state.name + 'xxx'
        },
        fullName2(state, getters) {
            console.log(getters);
            return getters.fullName + '222' 
        },
        fullName3(state, getters, rootState) { // 獲取根store中的state
            return getters.fullName2 + rootState.counter
        }
    },
    actions: {
        aUpdateName(context) {
            setTimeout(() => {
                context.commit('updataName', '孫儷')
            }, 1000)
        }
    }
}
const store = new Vuex.Store({
    state: {
        counter: 1000,
        students: [
            {id: 110, name: "劉德華", age: 18},
            {id: 111, name: "張學友", age: 24},
            {id: 112, name: "梁朝偉", age: 30},
            {id: 113, name: "周星馳", age: 10}
        ],
        info: {
            name: '張國榮',
            age: 49
        }
    },
    mutations: { // 主要進行同步操作
        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        incrementCount(state, count){
            state.counter += count
        },
        addStudent(state, stu){
            state.students.push(stu)
        },
        updateInfo(state){
            // state.info.name = '張曼玉'
            // state.info['address'] = '香港' (如果純粹添加一個屬性 那介面不會響應 需透過Vue.set)
            console.log(state);
            Vue.set(state.info, 'address', '洛杉磯') 
        }
    },
    actions: { // 為了方便Vue.js Devtools調試 在這進行異步操作 提交給mutations
        aUpdateInfo(context){
            setTimeout(() => {
                context.commit('updateInfo')
            }, 2000)
        }
    },
    getters: {
        powerCounter(state){
            return state.counter * state.counter
        },
        more20stu(state){
            return state.students.filter(s => s.age > 20)
        },
        more20stuLength(state, getters){
            return getters.more20stu.length
        },
        moreAgeStu(state){
            // return function(age){
            //     return state.students.filter(s => s.age > age)
            return age => {
                return state.students.filter(s => s.age > age)
            }
        }
    },
    modules: {
        modulesA,
    }
})


export default store