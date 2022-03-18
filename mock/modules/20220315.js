const { Random } = require("mockjs");
const len = 64;
Random.extend({
  logArray: function () {
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
  data: [
    {
      date: Random.date(),
      id: Random.id(),
      operator_name: Random.cname(),
      temp_20220315009: Random.cname(),
      status: 4 + "",
    },
  ].concat(
    new Array(len).fill(0).map(() => {
      return {
        date: Random.date(),
        id: Random.id(),
        operator_name: Random.cname(),
        temp_20220315009: Random.cname(),
        status: Math.floor(Math.random() * (8 - 1)) + 1 + "",
      };
    })
  ),
  arrived: {
    errno: 0,
    errmsg: "",
    data: true,
    st: 1647503696,
    lid: "652174193805853536",
  },
  unarrived: {
    errno: 0,
    errmsg: "",
    data: true,
    st: 1647503696,
    lid: "652174193805853536",
  },
  log: {
    errno: 0,
    errmsg: "",
    data: "@logArray",
    st: 1647229435,
  },
};
