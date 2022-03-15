const { Random } = require("mockjs");
Random.extend({
  dataArray: function () {
    return [
      {
        content: "+",
        op_type: 1,
        operator_id: Random.id(),
        operator_name: Random.name(),
        operator_time: Random.datetime(),
        op_type_desc: "新增",
      },
    ].concat(
      new Array(Math.floor(Math.random() * (25 - 1)) + 1).fill(0).map(() => {
        return {
          content: Random.csentence(),
          op_type: 1,
          operator_id: Math.floor(Math.random() * (25 - 1)) + 1,
          operator_name: Random.name(),
          operator_time: Random.datetime(),
          op_type_desc: "编辑",
        };
      })
    );
  },
});

module.exports = {
  log1: {
    errno: 0,
    errmsg: "",
    data: "@dataArray",
    st: 1647230570,
  },
  log2: {
    errno: 0,
    errmsg: "",
    data: "@dataArray",
    st: 1647229435,
  },
};
