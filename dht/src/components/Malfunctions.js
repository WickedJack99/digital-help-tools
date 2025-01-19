import Layout from "./Layout";
import { Box, Stack, Typography, Card, CardActionArea, CardContent } from '@mui/material';
import { useTranslation } from 'react-i18next';
import BackCard from './BackCard';

function Malfunctions() {
  const { t } = useTranslation();
  const language = localStorage.getItem('i18nLanguage');

  function getTranslation(key) {
    return t(language + '.' + key + '.translation');
  }

  const items = [
    {
        name: getTranslation('printer-printing-wrong-case_form_heading'),
        color: "rgb(245, 84, 9)",
        href: "printer-printing-wrong-case"
    },
    {
        name: getTranslation('emails-not-sent-case_form_heading'),
        color: "rgb(245, 84, 9)",
        href: "/emails-not-sent-case"
    },
    {
        name: getTranslation('error-message-case_form_heading'),
        color: "rgb(245, 84, 9)",
        href: "/error-message-case"
    },
    {
        name: getTranslation('device-not-starting-case_form_heading'),
        color: "rgb(245, 84, 9)",
        href: "/device-not-starting-case"
    },
    {
        name: getTranslation('no-internet-connection-case_form_heading'),
        color: "rgb(245, 84, 9)",
        href: "/no-internet-connection-case"
    },
    {
        name: getTranslation('mobile-data-medium-case_form_heading'),
        color: "rgb(245, 84, 9)",
        href: "/mobile-data-medium-case"
    },
    {
        name: getTranslation('custom_case_form_heading'),
        color: "rgb(245, 84, 9)",
        href: "/custom-case"
    },
]

  const content = (
    <Box paddingTop={5}>
      <Stack
        alignItems={"center"}
        spacing={2}
        direction="column"
        style={{ marginBottom: '10px' }}
      >
        {items.map((item) => (
            <Card sx={{ backgroundColor: item.color, width: '80%', borderRadius: '8px', boxShadow: 3}}>
                <CardActionArea href={item.href}>
                <CardContent>
                    <Typography variant="h5">{item.name}</Typography>
                </CardContent>
                </CardActionArea>
            </Card>
        ))}
        <BackCard/>
      </Stack>
    </Box>
  );

  return (
    <Layout content={content}/>
  );
}

export default Malfunctions;