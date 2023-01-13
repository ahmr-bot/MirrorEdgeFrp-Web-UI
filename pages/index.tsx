import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import Copyright from '../components/Copyright';
const tiers = [
  {
    title: 'Pro',
    titles: '免费计划',
    subheader: '',
    price: '0',
    description: [
      '三条隧道',
      '无限带宽',
      '无限流量',
      '众生平等',
      '完全不需要任何一分钱！！！',
    ],
    buttonText: '现在开始使用吧',
    buttonVariant: 'contained',
    link: 'https://panel.mefrp.com/login',
  }
]; 


export default function Home() {
  return (
     <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}> 
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            MirrorEdge Frp [ME Frp] 镜缘映射
          </Typography>
              <Link
              variant="button"
              color="text.primary"
              href="https://jq.qq.com/?_wv=1027&k=bH86wYBz"
              sx={{ my: 1, mx: 1.5 }}
            >
              加入 QQ 群
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="https://panel.mefrp.com/login"
              sx={{ my: 1, mx: 1.5 }}
            >
              控制面板
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="https://forum.laecloud.com"
              sx={{ my: 1, mx: 1.5 }}
            >
              论坛
            </Link>
          <Button href="https://oauth.laecloud.com" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            注册
          </Button>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h2"
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
        >
          MirrorEdge Frp [ME Frp] 镜缘映射
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          为什么选择我们？<br />
          这是一个 <strong>完全免费 不限带宽 不限流量 </strong> 快速 稳定的端口映射服务
          使用开源项目 Frp  ， 简单易用
        </Typography>
              <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
            <Box maxWidth="sm">
          <Button variant="contained" href="auth/login">
            开始免费使用
          </Button>
        </Box>
        <br />
        <br />
        <br />
        <Button variant="contained" href="https://dash.laecloud.com/modules/gct">
            仅需 <strong>3.95 元起!</strong>高性能 物美价廉的 莱云 游戏容器！
          </Button>
        </Box>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
              
            >
              <Card>
                <CardHeader
                  title={tier.titles}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      ￥{tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">/GB
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant as 'outlined' | 'contained'} href={tier.link}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Copyright />
      </Container>
      {/* End footer */}
          </React.Fragment>
  );
}
