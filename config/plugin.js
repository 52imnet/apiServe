'use strict'

/**
 * 插件配置
 */

module.exports = {
  sequelize: {
    enable: false,
    package: 'egg-sequelize'
  },
  routerPlus: {
    enable: true,
    package: 'egg-router-plus'
  },
  validatePlus: {
    enable: true,
    package: 'egg-validate-plus'
  },
  // https://github.com/eggjs/egg-cors
  // 跨域配置
  cors: {
    enable: true,
    package: 'egg-cors'
  },
  // https://github.com/Yanshijie-EL/egg-swagger-doc
  swaggerdoc: {
    enable: false,
    package: 'egg-swagger-doc'
  },
  axiosPlus:{
    enable: true,
    package: 'egg-axios-plus'
  }
}
