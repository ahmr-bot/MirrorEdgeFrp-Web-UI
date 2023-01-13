import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useRouter } from "next/router";
import { useEffect } from "react";
import Copyright from '../../components/Copyright';
import ProTip from '../../components/ProTip';
import api from '../../src/config/config';
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
localStorage.setItem('token',token);
}

// 处理回调数据
  useEffect(() => {
  if(localStorage.getItem('token') != null) {
    console.log("已经登录了哦，重定向")
  } else {
  }
  })

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