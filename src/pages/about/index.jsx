import RootLayout from "../../../components/Layout/RootLayout";

const AboutHomePage = () => {
    return (
        <div>
            <h1>This is about Home page</h1>
        </div>
    );
};



export default AboutHomePage;

AboutHomePage.getLayout=  function(page){
    return (
      <RootLayout>{page}</RootLayout>
    )
  }