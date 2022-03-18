const express = require("express");
const { mock } = require("mockjs");
const commonRequest = require("./commonRequest");
const tableRequest = require("./tableRequest");

const app = express(); //实例化express
const port = 9528;
const DELAY = 500;
const BASE_URL = "";

commonRequest.forEach(({ method, path, response }) => {
  app[method](`${BASE_URL}${path}`, (_req, res) => {
    setTimeout(() => res.json(mock(response)), DELAY);
  });
});

// get查询data列表
tableRequest.forEach(({ method, path, response }) => {
  app[method](`${BASE_URL}${path}`, (req, res) => {
    const [page, pageSize] = [
      parseInt(req.query.page),
      parseInt(req.query.perpage),
    ];
    const total = response.length;
    //无法整除时长度+1
    const len =
      total % pageSize === 0 ? total / pageSize : total / pageSize + 1;
    // 有效页
    const currentPage = len > page ? page : len;
    // 有效数组内容
    const dataList = response.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize
    );
    const rData = {
      errno: 0,
      errmsg: "",
      data: {
        total: total,
        list: dataList,
        page: currentPage,
      },
      st: 1647341414,
      lid: "489892290651253536",
    };
    setTimeout(() => res.json(mock(rData)), DELAY);
  });
});

app.listen(port);
