import BackCard from "./BackCard";
import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { Stack, Typography, TextField, Card, CardActionArea, CardContent, Box } from '@mui/material';
import { jsPDF } from 'jspdf';

function CustomCaseForm() {
  const { t } = useTranslation();
    const language = localStorage.getItem('i18nLanguage');
  
    function getTranslation(key) {
      return t(language + '.' + key + '.translation');
    }

    const [formData, setFormData] = useState(() => {
      const savedData = sessionStorage.getItem('formData');
      return savedData ? JSON.parse(savedData) : { steps: [] };
    });
  
    // Effect to update sessionStorage whenever formData changes
    useEffect(() => {
      if (formData.steps.length > 0) {
        sessionStorage.setItem('formData', JSON.stringify(formData));
      }
    }, [formData]);
  
    // Add a new step
    const addStep = () => {
      setFormData(prevData => ({
        ...prevData,
        steps: [...prevData.steps, { step: '', outcome: '' }]
      }));
    };
  
    // Remove a step by index
    const removeStep = (index) => {
      setFormData(prevData => ({
        ...prevData,
        steps: prevData.steps.filter((_, i) => i !== index)
      }));
    };
  
    // Handle change in step or outcome
    const handleChange = (index, field, value) => {
      setFormData(prevData => {
        const updatedSteps = [...prevData.steps];
        updatedSteps[index][field] = value;
        return { ...prevData, steps: updatedSteps };
      });
    };
  
    // Handle download using jsPDF
    const handleDownload = () => {
      const doc = new jsPDF();
      
      // Add title
      doc.setFontSize(20);
      doc.text(getTranslation('custom_case_form_heading'), 20, 20);
      
      // Add steps with text wrapping
      formData.steps.forEach((step, index) => {
        doc.setFontSize(16);
        // Text with wrapping
        doc.text(getTranslation('step') + ` ${index + 1}: ${step.step}`, 20, 30 + index * 25);
        
        doc.setFontSize(11);
        // Use doc.text with max width to ensure wrapping
        const yPosition = 35 + index * 50; // Start Y position for the outcome text
        doc.text(getTranslation('step_form_description') + `: ${step.outcome}`, 20, yPosition, { maxWidth: 170 });  // Set maxWidth to control text wrapping
      });
      
      // Save the generated PDF
      doc.save("case-data.pdf");
    };

    // Add a listener to the beforeunload event
    useEffect(() => {
      const handleBeforeUnload = (event) => {
        if (formData.steps.length > 0) {
          event.preventDefault();
          event.returnValue = ''; // Modern browsers require this for the dialog to show
        }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [formData]);

  const content = (
    <Stack alignItems={"center"}>
    <Box paddingTop={5}>
    <form>
      <Stack
        spacing={2}
        direction="column"
        alignItems="center"
        style={{ marginBottom: '10px' }}
      >
        {formData.steps.map((step, index) => (
          <Box key={index} width="100%">
            <Typography variant="h5" color="textSecondary">
              {getTranslation('step') + ` ${index + 1}`}
            </Typography>
            <TextField
              label={getTranslation('step_form_heading')}
              variant="outlined"
              value={step.step}
              onChange={(e) => handleChange(index, 'step', e.target.value)}
              fullWidth
              multiline
              style={{ marginBottom: '10px', marginTop: '10px' }}
            />
            <TextField
              label={getTranslation('step_form_description')}
              variant="outlined"
              value={step.outcome}
              onChange={(e) => handleChange(index, 'outcome', e.target.value)}
              fullWidth
              multiline
              rows={3}
            />
            <Card
              sx={{
                width: '100%',
                borderRadius: '8px',
                boxShadow: 3,
                cursor: 'pointer',
                marginTop: '10px',
              }}
              onClick={() => removeStep(index)}
            >
              <CardActionArea>
                <CardContent>
                  <Typography variant="h5" color="textSecondary">
                    {getTranslation('remove_step_button')}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        ))}
        <Card
          sx={{
            width: '100%',
            borderRadius: '8px',
            boxShadow: 3,
            cursor: 'pointer',
          }}
          onClick={addStep}
        >
          <CardActionArea>
            <CardContent>
              <Typography variant="h5" color="textSecondary">
                {getTranslation('add_step_button')}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Stack>
    </form>
    <BackCard/>

      {/* Floating PDF Download Button */}
      <Box
        sx={{
          position: 'fixed',
          right: '20%',
          top: '20%',
          transform: 'translateY(-50%)',
        }}
      >
        <Card
          sx={{
            padding: 2,
            boxShadow: 3,
            borderRadius: '8px',
            cursor: 'pointer',
            textAlign: 'center',
            width: 'fit-content',
          }}
          onClick={handleDownload}
        >
          <Typography variant="h6" color="primary">
            {getTranslation('pdf_download_button_text')}
          </Typography>
        </Card>
      </Box>
    </Box>
    </Stack>
  );

  return (
    content
  );
}

export default CustomCaseForm;