const permission = require("./modules/permission");
const log = require("./modules/log");
const data = require("./modules/20220315");

const commonRequest = [
  // permission
  { method: "get", path: "/getUserInfo", response: permission.userInfo },
  // 轮休-轮休组
  { method: "get", path: "/log/log1", response: log.log1 },
  // 轮休-配班
  { method: "get", path: "/log/log2", response: log.log2 },
  // 告警
  { method: "post", path: "/srm/20220315/setArrivedService", response: data.arrived },
  // 告警
  { method: "post", path: "/srm/20220315/setUnableArrivedService", response: data.unarrived },
  // 告警
  { method: "get", path: "/srm/20220315/getEditLog", response: data.log },
];

module.exports = commonRequest;
