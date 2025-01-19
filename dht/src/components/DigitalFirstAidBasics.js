import Layout from "./Layout";
import { Box, Stack, Typography, Card, CardActionArea, CardContent } from '@mui/material';
import { useTranslation } from 'react-i18next';
import BackCard from './BackCard';

function DigitalFirstAidBasics() {
  const { t } = useTranslation();
  const language = localStorage.getItem('i18nLanguage');

  function getTranslation(key) {
    return t(language + '.' + key + '.translation');
  }

  const content = (
    <></>
  );

  return (
    <Layout content={content}/>
  );
}

export default DigitalFirstAidBasics;