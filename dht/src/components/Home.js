import Layout from "./Layout";
import { Box, Stack, Typography, Card, CardActionArea, CardContent } from '@mui/material';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();
  const language = localStorage.getItem('i18nLanguage');

  function getTranslation(key) {
    return t(language + '.' + key + '.translation');
  }

  const content = (
    <Box paddingTop={5}>
      <Stack
        alignItems={"center"}
        spacing={2}
        direction="column"
        style={{ marginBottom: '10px' }}
      >
        <Card sx={{ backgroundColor: "rgb(245, 84, 9)", width: '80%', borderRadius: '8px', boxShadow: 3}}>
          <CardActionArea href="/malfunctions">
            <CardContent>
              <Typography variant="h5">{getTranslation('nav_malfunction')}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ backgroundColor: "rgb(245, 17, 9)", width: '80%', borderRadius: '8px', boxShadow: 3}}>
          <CardActionArea href="/security-incidents">
            <CardContent>
              <Typography variant="h5">{getTranslation('nav_security-incident')}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ backgroundColor: "rgb(218, 196, 0)", width: '80%', borderRadius: '8px', boxShadow: 3}}>
          <CardActionArea href="/first-aid-basics">
            <CardContent>
              <Typography variant="h5">{getTranslation('nav_bsi-basics')}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Stack>
    </Box>
  );

  return (
    <Layout content={content}/>
  );
}

export default Home;