import Sidebar from "@/components/shared/Sidebar";

const layout = ({children}) => {
    return (
        <div className="flex">
            <div className="w-[400px]" >
                <Sidebar/>
            </div>
            <div className="w-full">
            {
                children
            }
            </div>
        </div>
    );
};

export default layout;