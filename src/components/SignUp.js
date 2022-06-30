import React, { useContext, useState } from "react";
import { Card, Input, Avatar, Button } from 'antd';
import { ThemeContext } from "../MyContext";
import SignUpServices from "../services/signup";
import { object, string, number, date, InferType } from 'yup';
import { Formik } from 'formik';

const style = { padding: 20, width: '100%' };
const { Meta } = Card;
const initialState = {
  name: '',
  emailId: '',
  username: '',
  password: '',
  confirmPassword: '',
};

const SignUp = () => {
  const { theme } = useContext(ThemeContext);
  const [initialValues, setInitialvalues] = useState(initialState);

  const createSchema = object({
    name: string().required('Name Required'),
    emailId: string().email('Invalid Email'),
    username: string().required('Username Required'),
    password: string().required('Password Required'),
  });

  const handleSignUp = async () => {
    console.log('aax');
    const x = await SignUpServices.createUser();
    console.log(x);
  }
  return (<div>
    <div className="signup-card">
      <Card
        bordered={false}
        size="large"
        style={
          theme === 'dark' ?
            { backgroundColor: '#1a5ea0', color: '#ffffff', display: "flex", justifyContent: 'center' } :
            { display: "flex", justifyContent: 'center' }}>
        <Meta
          style={{ padding: 10, justifyContent: 'center' }}
          avatar={<Avatar style={{ height: 50, width: '100%' }}
            src="/user.png" />} />
        <Formik>
          <>
            <Input style={style} addonBefore="Name" />
            <Input style={style} addonBefore="E-mail ID" />
            <Input style={style} addonBefore="Username" />
            <Input style={style} addonBefore="Password" />
            <Input style={style} addonBefore="Confirm Password" />
            <Button
              style={{ marginLeft: '40%', marginTop: 20 }}
              type="primary"
              shape="round"
              size="large"
              onClick={handleSignUp}
            >
              Sign Up
            </Button>
          </>
        </Formik>
      </Card>
    </div>
  </div>);
}

export default SignUp;