import Navbar from "@/components/Navbar/Navbar";

const RootLayout = ({children}) => {

  return (
<div className="">
 <Navbar/>
  <div>{children}</div>
</div>
  );
};
export default RootLayout;

