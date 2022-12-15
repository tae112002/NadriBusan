import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import XMLParser from "react-xml-parser";

const Show = () => {
  function parseStr(dataSet) {
    const dataArr = new XMLParser().parseFromString(dataSet).children;
    console.log(dataArr);
  }

  async function getAPI() {
    await axios({
      method: "get",
      url: `https://apis.data.go.kr/6260000/BusanCultureThemeService/getBusanCultureTheme?serviceKey=MVKk2sHjZVBZr%2B%2FcJnUqd%2FfSWFuG8v2n51U8soXFMpnjopUmohg8ykHfwQ34W281gxSoxhlSKQS%2Fo7zClAeO%2Fg%3D%3D&numOfRows=10&pageNo=1`,
    }).then(function (response) {
      const dataSet = response.data;
      parseStr(dataSet);
    });
  }
  return <div>Show</div>;
};

export default Show;
