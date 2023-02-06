import { defHttp } from '/@/utils/http/axios';

/**
 * 角色管理api
 *
 * @author liaoxiting
 * @date 2021/4/1 16:06
 */
export class SysRoleApi {
  /**
   * 分页获取角色列表
   *
   * @author liaoxiting
   * @date 2021/4/1 16:07
   */
  static findPage(params) {
    return defHttp.get({ url: '/sysRole/page', params });
  }

  /**
   * 新增
   *
   * @author liaoxiting
   * @date 2021/4/1 16:07
   */
  static add(params) {
    return defHttp.post({ url: '/sysRole/add', params }, { isTransformResponse: false });
  }

  /**
   * 删除
   *
   * @author liaoxiting
   * @date 2021/4/1 16:07
   */
  static del(params) {
    return defHttp.post({ url: '/sysRole/delete', params }, { isTransformResponse: false });
  }

  /**
   * 修改
   *
   * @author liaoxiting
   * @date 2021/4/1 16:07
   */
  static edit(params) {
    return defHttp.post({ url: '/sysRole/edit', params }, { isTransformResponse: false });
  }

  /**
   * 角色分配菜单
   *
   * @author liaoxiting
   * @date 2021/8/11 10:42
   */
  static async grantMenu(params) {
    return await defHttp.post(
      { url: '/sysRole/grantMenu', params },
      { isTransformResponse: false },
    );
  }

  /**
   * 角色分配按钮
   *
   * @author liaoxiting
   * @date 2021/8/11 10:42
   */
  static async grantButton(params) {
    return await defHttp.post(
      { url: '/sysRole/grantButton', params },
      { isTransformResponse: false },
    );
  }

  /**
   * 分配接口
   *
   * @author liaoxiting
   * @date 2021/8/10 18:31
   */
  static async grantResource(params) {
    return await defHttp.post(
      { url: '/sysRole/grantResourceV2', params },
      { isTransformResponse: false },
    );
  }

  /**
   * 分配数据范围
   *
   * @author liaoxiting
   * @date 2021/4/1 16:07
   */
  static async grantDataScope(params) {
    return await defHttp.post(
      { url: '/sysRole/grantDataScope', params },
      { isTransformResponse: false },
    );
  }

  /**
   * 角色绑定或取消绑定菜单和按钮
   *
   * @author liaoxiting
   * @date 2021/4/1 16:07
   */
  static async grantMenusAndButtons(params) {
    return await defHttp.post(
      { url: '/sysRole/grantMenusAndButtons', params },
      { isTransformResponse: false },
    );
  }
}
