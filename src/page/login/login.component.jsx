import { Button, Form, Input , Row, Typography } from "antd";
import { hoc } from "../../utils";
import { useLoginProps } from "./login.props";
const {Title} =Typography;
export const Login = hoc(useLoginProps ,({onLogin ,emailRef , passwordRef})=>{
    return(
        <Row style={{height:'100%',
        flexDirection:'column',
        }} align={"middle"} justify={'center'}>
            <Title level={2}>Login</Title>
            <Form layout="vertical" onFinish={onLogin} >
                 <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your email!',
                      },
                    ]}
                 >
                    
                    <Input 
                    ref={emailRef} style={{
                        width:'300px'
                    }} type="email" />
                 </Form.Item>
                 <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your password!',
                      },
                    ]}
                 >
                    
                    <Input
                    ref={passwordRef}
                    style={{
                        width:'300px'
                    }} type="password" />
                 </Form.Item>

                <Row justify={"center"} >
                <Button htmlType="sumbit" style={{
                    width:'150px'
                 }}>Login</Button>
                </Row>
            </Form>
        </Row>
    );
})