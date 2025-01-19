import Layout from "./Layout";
import { Box, Stack, Typography, Card, CardActionArea, CardContent } from '@mui/material';
import { useTranslation } from 'react-i18next';
import BackCard from './BackCard';

function SecurityIncidents() {
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
          <CardActionArea href="/custom-case">
            <CardContent>
              <Typography variant="h5">{getTranslation('nav_custom-case')}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ backgroundColor: "rgb(245, 84, 9)", width: '80%', borderRadius: '8px', boxShadow: 3}}>
          <CardActionArea href="/custom-case">
            <CardContent>
              <Typography variant="h5">{getTranslation('nav_custom-case')}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <BackCard/>
      </Stack>
    </Box>
  );

  return (
    <Layout content={content}/>
  );
}

export default SecurityIncidents;