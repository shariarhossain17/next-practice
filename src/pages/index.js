import RootLayout from "@/Layout/RootLayout";

const HomePage = () => {


  return (
  <h1 className="text-red-700">

    
  </h1>
  );
};
export default HomePage;

 HomePage.getLayout = function getLayout (page){
  return (
    <RootLayout>{page}</RootLayout>
  )
 }