import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useRouter } from "next/router";
import { useEffect } from 'react';
import Copyright from '../../components/Copyright';
import Message from '../../components/Message';
import ProTip from '../../components/ProTip';
import api from '../../src/config/config';
import http from '../../src/http/http';
export default function About() {
function Login() {
    // protocol + domain + pathname
    const redirect = location.origin + location.pathname
    window.location.href =
        api.auth + '/?callback=' + encodeURIComponent(redirect)
}
// 开始登录

const router = useRouter(); 
const query = router.query
if (query.token != null) {
const token = query.token as string
// 1.写入
}
useEffect(() => {
  if (localStorage.getItem("token") != null) {
    const token = localStorage.getItem("token");
    Message.success({content: "您已登录，正在验证登录有效性……", duration: 3000})
    setTimeout(() => {
    VerifyToken(token)}, 2000)
  }
})
function VerifyToken(token) {
  localStorage.setItem('token', token);
  http('get','/user',null)
  .then(res => {
    Message.success({content: "登录成功，正在重定向……", duration: 3000})
    setTimeout(() => {
    router.push('/Panel/home')
   }, 1000)
   console.log("登录成功！");
})
.catch(err => {
  localStorage.removeItem('token')
  Message.error({content: '登录遇到问题', duration: 2000})
  Login();
})
}
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          欢迎使用镜缘映射
        </Typography>
        <Box maxWidth="sm">
          <Button variant="contained" onClick = {Login}>
            去登录
          </Button>
        </Box>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );

}