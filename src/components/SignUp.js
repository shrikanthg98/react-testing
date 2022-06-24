import React, { useContext } from "react";
import { Card, Input, Avatar, Button } from 'antd';
import { ThemeContext } from "../MyContext";
const style = { padding: 20, width: '100%' };
const { Meta } = Card;

const SignUp = () => {
  const { theme } = useContext(ThemeContext);
  return (<div>
    <div className="signup-card">
      <Card
        bordered={false}
        size="large"
        style={
          theme === 'dark' ?
            { backgroundColor: '#1a5ea0', color: '#ffffff', display: "flex", justifyContent: 'center' } :
            { display: "flex", justifyContent: 'center' }}>
        <Meta style={{ padding: 10, justifyContent: 'center' }} avatar={<Avatar style={{ height: 50, width: '100%' }} src="/user.png" />} />
        <Input style={style} addonBefore="E-mail ID" />
        <Input style={style} addonBefore="Username" />
        <Input style={style} addonBefore="Password" />
        <Input style={style} addonBefore="Confirm Password" />
        <Button style={{ marginLeft: '40%', marginTop: 20 }} type="primary" shape="round" size="large">
          Sign Up
        </Button>
      </Card>
    </div>
  </div>);
}

export default SignUp;