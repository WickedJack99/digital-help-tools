import Layout from "./Layout";
import CustomCaseForm from "./CustomCaseForm";

function CustomCase() {

  const content = (
    <CustomCaseForm></CustomCaseForm>
  );

  return (
    <Layout content={content}/>
  );
}

export default CustomCase;