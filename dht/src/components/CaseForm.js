import BackCard from "./BackCard";
import React from "react";
import PdfGenerator from "./PdfGenerator";
import { useTranslation } from 'react-i18next';
import { Stack, Typography } from '@mui/material';
import { useFormData } from "../FormDataContext";

function CaseForm() {
    const { t } = useTranslation();
      const language = localStorage.getItem('i18nLanguage');
    
      function getTranslation(key) {
        return t(language + '.' + key + '.translation');
      }

      const { formData, setFormData } = useFormData();

    // Handle changes in dynamic form fields
  const handleChange = (index, field, value) => {
    const updatedSteps = [...formData.steps];
    updatedSteps[index][field] = value;
    setFormData({ ...formData, steps: updatedSteps });
  };

  // Add a new step/outcome pair
  const addStep = () => {
    setFormData({
      ...formData,
      steps: [...formData.steps, { step: "", outcome: "" }],
    });
  };

  const removeStep = (index) => {
    // Log the data for debugging
    console.log('Removing step at index:', index);
    console.log('Before removing:', formData.steps);
  
    // Create a new array, excluding the item at the specified index
    const updatedSteps = formData.steps.filter((_, i) => i !== index);
  
    // Log after filtering
    console.log('After removing:', updatedSteps);
  
    // Update the formData with the new steps array
    setFormData((prevFormData) => ({
      ...prevFormData,
      steps: updatedSteps,
    }));
  };
  
  

    const content = (
        <Stack spacing={5} alignItems={"center"}>
                <Typography variant="h5" component="div">
                    {getTranslation('home_heading')}
                </Typography>
                <form>
        {formData.steps.map((step, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <input
              type="text"
              placeholder={`Step ${index + 1}`}
              value={step.step}
              onChange={(e) => handleChange(index, "step", e.target.value)}
            />
            <br />
            <textarea
              placeholder="Outcome"
              value={step.outcome}
              onChange={(e) => handleChange(index, "outcome", e.target.value)}
            />
            <br />
            <button
              type="button"
              onClick={() => removeStep(index)}
              disabled={formData.steps.length === 1}
            >
              Remove Step
            </button>
          </div>
        ))}
        <button type="button" onClick={addStep}>
          Add Step
        </button>
      </form>
                <PdfGenerator formData={formData} />
            <BackCard/>
        </Stack>   
    );

    return (
        content
    );
}

export default CaseForm;