import { PageResult } from '../../model/baseModel';
import {
  ConfigInitRequest,
  InitConfigResponse,
  SysConfig,
  SysConfigParam,
} from './model/SysConfigModel';
import { DictRequest, SysDict } from './model/SysDictDataModel';
import { DictTypeRequest, SysDictType } from './model/SysDictTypeModel';
import { defHttp } from '/@/utils/http/axios';

/**
 * 系统配置api
 *
 * @author liaoxiting
 * @date 2021/4/9 11:56
 */
export class SysConfigApi {
  /**
   * 获取系统配置类型的分页
   *
   * @author liaoxiting
   * @date 2021/4/1 16:07
   */
  static findConfigGroupPage(params: DictRequest) {
    return defHttp.get<PageResult<SysDict>>({ url: '/dict/getConfigGroupPage', params });
  }

  /**
   * 获取系统配置分页数据
   *
   * @author liaoxiting
   * @date 2021/4/1 16:07
   */
  static findConfigPage(params: SysConfigParam) {
    return defHttp.get<PageResult<SysConfig>>({ url: '/sysConfig/page', params });
  }

  /**
   * 获取系统配置类型的字典的详情（新增系统配置类型界面用）
   *
   * @author liaoxiting
   * @date 2021/4/9 12:05
   */
  static getConfigDictTypeDetail(params?: DictTypeRequest) {
    return defHttp.get<SysDictType>({ url: '/dictType/getConfigDictTypeDetail', params });
  }

  /**
   * 添加系统配置类型,系统配置类别其实就是字典
   *
   * @param {string}  params.dictCode        字典编码（系统配置分类编码）
   * @param {string}  params.dictName        字典名称（系统配置分类名称）
   * @param {string}  params.dictShortCode   字典简写编码
   * @param {string}  params.dictShortName   字典缩写名称
   * @param {number}  params.dictSort        字典排序
   * @param {string}  params.dictTypeCode    字典类型编码
   * @param {string}  params.dictTypeName    字典类型名称
   * @param {string}  params.dictTypeId      字典类型id
   * @author liaoxiting
   * @date 2021/4/9 12:05
   */
  static addConfigType(params: DictRequest) {
    return defHttp.post({ url: '/dict/add', params }, { isTransformResponse: false });
  }

  /**
   * 删除系统配置类型
   *
   * @param {String} params.dictId        字典id（系统配置分类id）
   * @author liaoxiting
   * @date 2021/4/9 12:05
   */
  static deleteConfigType(params: DictRequest) {
    return defHttp.post({ url: '/dict/delete', params }, { isTransformResponse: false });
  }

  /**
   * 添加系统配置
   *
   * @param {string} params.configCode 配置编码
   * @param {string} params.configName 配置名称
   * @param {string} params.configValue 配置值
   * @param {string} params.groupCode  所属配置分类
   * @param {string} params.remark     备注
   * @param {string} params.sysFlag    是否是系统配置
   * @author liaoxiting
   * @date 2021/4/9 13:24
   */
  static addSysConfig(params: SysConfigParam) {
    return defHttp.post({ url: '/sysConfig/add', params }, { isTransformResponse: false });
  }

  /**
   * 修改系统配置
   *
   * @param {string} params.configCode 配置编码
   * @param {string} params.configId   配置id
   * @param {string} params.configName 配置名称
   * @param {string} params.configValue 配置值
   * @param {string} params.groupCode  所属配置分类
   * @param {string} params.remark     备注
   * @param {string} params.sysFlag    是否是系统配置
   * @author liaoxiting
   * @date 2021/4/9 13:24
   */
  static editSysConfig(params: SysConfigParam) {
    return defHttp.post({ url: '/sysConfig/edit', params }, { isTransformResponse: false });
  }

  /**
   * 删除系统配置
   *
   * @param {string} params.configId   配置id
   * @author liaoxiting
   * @date 2021/4/9 13:24
   */
  static deleteSysConfig(params: SysConfigParam) {
    return defHttp.post({ url: '/sysConfig/delete', params }, { isTransformResponse: false });
  }

  /**
   * 获取系统配置是否已经初始化
   *
   * @return {boolean} true-已经初始化，false-未初始化
   * @author liaoxiting
   * @date 2021/4/9 13:24
   */
  static async getInitConfigFlag() {
    return await defHttp.get<boolean>({ url: '/sysConfig/getInitConfigFlag' });
  }

  /**
   * 获取需要初始化的配置列表
   *
   * @author liaoxiting
   * @date 2021/4/9 13:24
   */
  static async getInitConfigList() {
    return await defHttp.get<InitConfigResponse>({ url: '/sysConfig/getInitConfigList' });
  }

  /**
   * 初始化系统配置参数
   *
   * @author liaoxiting
   * @date 2021/7/9 11:04
   */
  static async initConfig(params: ConfigInitRequest) {
    return await defHttp.post(
      { url: '/sysConfig/initConfig', params },
      { isTransformResponse: false },
    );
  }
}
