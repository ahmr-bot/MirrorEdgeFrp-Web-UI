import MuiLink from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://aehxy.com/">
      Aehxy
      </MuiLink>{' '}
      {new Date().getFullYear()}.
    <br />
    <MuiLink color="inherit" href="https://cfu.mefrp.com/">
    Frp 内网穿透联盟统一识别编码:AZWB66WB
      </MuiLink><br />
      <MuiLink color="inherit" href="https://www.aehxy.com/">
  Aehxy
      </MuiLink>策划 / 运营<MuiLink color="inherit" href="https://www.laecloud.com/">
|莱云
      </MuiLink>所有
        <br />
      {typeof window !== 'undefined' && window.location.host === 'frp.mcserverx.com' ? (
        <MuiLink color="inherit" href="https://beian.miit.gov.cn/">
        蜀ICP备2022026470号-4
    </MuiLink>
      ) : null}

    </Typography>
  );
}
