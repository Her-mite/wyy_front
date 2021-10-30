
// import React, { useState } from 'react';
import { Button, Result } from 'antd';
// import { Redirect, withRouter, Route, Switch } from "react-router-dom";


//  发现音乐页面展示内容
const NotFound = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary">Back Home</Button>}
    />

  );
};

export default NotFound;
