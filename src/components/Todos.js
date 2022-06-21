import React from "react";
import { Input, Button } from 'antd';
import "../App.css"
import { PlusOutlined } from "@ant-design/icons";

const Todos = () => {
  return (<>
    <Input style={{width: 300, marginRight: 15}} size="large"/>
    <Button type="primary" shape="circle" icon={<PlusOutlined />} size="large"/>
  </>);
}

export default Todos;