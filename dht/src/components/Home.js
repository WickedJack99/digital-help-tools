import Layout from "./Layout";
import { Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import CaseForm from "./CaseForm";

function Home() {
  const { t } = useTranslation();
  const language = localStorage.getItem('i18nLanguage');

  function getTranslation(key) {
    return t(language + '.' + key + '.translation');
  }

  const content = (
    <>
        <Stack spacing={5} alignItems={"center"}>
            <CaseForm/>
        </Stack>
    </>
  );

  return (
    <Layout content={content}/>
  );
}

export default Home;