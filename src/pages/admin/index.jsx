import DashBoardLayout from "../../components/Layout/DashBoadLayout";
import RootLayout from "../../components/Layout/RootLayout";

const AdminPage = () => {
    return (
        <div>
            this is admin page
        </div>
    );
};

export default AdminPage;

AdminPage.getLayout= function getLayout(page){
    return (
        <RootLayout>

            <DashBoardLayout>{page}</DashBoardLayout>
        </RootLayout>
    )
}