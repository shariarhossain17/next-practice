import RootLayout from "@/Layout/RootLayout";
import Banner from "@/components/ Banner/Banner";

const HomePage = () => {


  return (
  <>

    <Banner/>
  </>
  );
};
export default HomePage;

 HomePage.getLayout = function getLayout (page){
  return (
    <RootLayout>{page}</RootLayout>
  )
 }