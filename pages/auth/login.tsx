import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ProTip from '../../components/ProTip';
import Copyright from '../../components/Copyright';
import api from '../../src/config/config'
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

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
  console.log(localStorage.getItem('token'));
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
