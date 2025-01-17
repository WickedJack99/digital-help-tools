import React from "react";
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { useTranslation } from 'react-i18next';
import { useFormData } from "../FormDataContext";

// Define styles for the PDF
const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
});

// Define the PDF Document
const MyDocument = ({ formData }) => (
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.heading}>Form Data</Text>
        </View>
        {formData.steps.map((step, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.text}>Step {index + 1}: {step.step}</Text>
            <Text style={styles.text}>Outcome: {step.outcome}</Text>
          </View>
        ))}
      </Page>
    </Document>
  );

// The PdfGenerator Component
const PdfGenerator = () => {
    const { formData, setFormData } = useFormData();

    const { t } = useTranslation();
    const language = localStorage.getItem('i18nLanguage');
  
    function getTranslation(key) {
      return t(language + '.' + key + '.translation');
    }

  return (
      <PDFDownloadLink
        document={<MyDocument formData={formData} />}
        fileName="case-data.pdf"
      >
      </PDFDownloadLink>
  );
};

export default PdfGenerator;