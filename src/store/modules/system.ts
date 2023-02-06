import { getCurrentThemeInfo } from '/@/api/system/theme';
import { getBackendDeployUrl } from '/@/api/system/user';
import { defineStore } from 'pinia';
import { store } from '/@/store';

interface SystemState {
  alreadyInitConfig: any;
  xxwMgrLogo: any;
  xxwMgrName: string;
  xxwMgrBeiNo: any;
  xxwMgrBeiUrl: string;
  xxwMgrFavicon: any;
  xxwMgrFooterText: any;
  xxwMgrLoginBackgroundImg: any;
  antdvFrontType: any;
  baseUrl: string;
}
export const useSystemStore = defineStore({
  id: 'system',
  state: (): SystemState => ({
    // 当前系统是否已经初始化过配置
    alreadyInitConfig: null,
    // 后台管理系统左上角Logo
    xxwMgrLogo: null,
    // 后台管理系统名称
    xxwMgrName: import.meta.env.VITE_GLOB_APP_TITLE,
    // 备案编号
    xxwMgrBeiNo: null,
    // 备案跳转url
    xxwMgrBeiUrl: 'https://beian.miit.gov.cn/',
    // favicon图标地址
    xxwMgrFavicon: null,
    // 页脚文字
    xxwMgrFooterText: null,
    // 登录页面背景图片
    xxwMgrLoginBackgroundImg: null,
    // 当前查询的是前台还是后台菜单，默认是前台，1-前台，2-后台
    antdvFrontType: localStorage.getItem('antdvFrontType') ? Number(localStorage.getItem('antdvFrontType')) : 1,
    //api基础路径
    baseUrl: '',
  }),
  getters: {},
  actions: {
    /**
     * 更新初始化状态
     *
     * @param {Boolean} initFlag 是否初始化了系统
     * @author liaoxiting
     * @date 2021/6/12 19:20
     */
    updateInitFlag(initFlag: boolean) {
      this.alreadyInitConfig = initFlag;
    },

    /**
     * 更新初始化状态
     *
     * @author liaoxiting
     * @date 2021/6/12 19:20
     */
    loadThemeInfo() {
      return new Promise((resolve) => {
        if (this.xxwMgrLogo != null) {
          resolve(Object.assign({}, this.$state));
        } else {
          getCurrentThemeInfo().then((result) => {
            this.xxwMgrLogo = result.xxwMgrLogo;
            this.xxwMgrName = result.xxwMgrName;
            this.xxwMgrBeiNo = result.xxwMgrBeiNo;
            this.xxwMgrBeiUrl = result.xxwMgrBeiUrl;
            this.xxwMgrFavicon = result.xxwMgrFavicon;
            this.xxwMgrFooterText = result.xxwMgrFooterText;
            this.xxwMgrLoginBackgroundImg = result.xxwMgrLoginBackgroundImg;
            resolve(result);
          });
        }
      });
    },

    /**
     * 设置菜单类型，前台菜单还是后台菜单
     *
     * @author liaoxiting
     * @date 2022/3/4 10:37
     */
    setMenuFrontType(antdvFrontType: any) {
      localStorage.setItem('antdvFrontType', antdvFrontType);
      this.antdvFrontType = antdvFrontType;
    },

    /**
     * 设置基础url
     *
     * @author liaoxiting
     * @date 2022/3/4 10:37
     */
    loadBaseUrl() {
      return new Promise((resolve) => {
        getBackendDeployUrl().then((result) => {
          this.baseUrl = result;
          resolve(result);
        });
      });
    },
  },
});

// Need to be used outside the setup
// 需要在设置之外使用
export function useSystemStoreWithOut() {
  return useSystemStore(store);
}
