
//引入请求接口
import { getHomeDatas } from '../../api/index';

//引入type
import { UPDATA_HOME_USER } from '../mutation-type.js';




const state={
    homeData:{}
}
const mutations={
    [UPDATA_HOME_USER](state,homeData){
      state.homeData=homeData
    }
  }

  const actions={
    async getHomeData({commit}){
      let result=await getHomeDatas()
      let homeData=result.data
      console.log(result)
      if(result.code===0){
        
        commit(UPDATA_HOME_USER,homeData)
      }
    }
  }
  const getters={

  }
export default ({
    state,
    mutations,
    actions,
    getters
})