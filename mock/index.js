const permission = require('./modules/permission');
const reduxData = require('./modules/reduxTest');
const log = require('./modules/log');

const mocks = [
  // permission
  { method: 'get', path: '/getUserInfo', response: permission.userInfo },
  //reduxData
  { method: 'get', path: '/reduxTest', response: reduxData.data },
  // 轮休-轮休组
  { method: 'get', path: '/log/log1', response: log.log1 },
  // 轮休-配班
  { method: 'get', path: '/log/log2', response: log.log2 },
];

module.exports = mocks;
