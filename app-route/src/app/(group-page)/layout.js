import Navbar from "@/components/shared/Navbar";

const GroupLayout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    );
};

export default GroupLayout;