const data202203115 = require("./modules/20220315");

const commonRequest = [
  // 告警list
  { method: "get", path: "/srm/20220315/getTableData", response: data202203115.data },
];

module.exports = commonRequest;
