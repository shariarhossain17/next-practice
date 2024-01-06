import RootLayout from "@/Layout/RootLayout";

const HomePage = () => {


  return (
    <div>
    
      
      This is Home page
      </div>
  );
};
export default HomePage;

 HomePage.getLayout = function getLayout (page){
  return (
    <RootLayout>{page}</RootLayout>
  )
 }