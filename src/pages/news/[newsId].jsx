import RootLayout from "@/Layout/RootLayout";

const NewsDetails = () => {
    return (
        <div>
            <h1>this is news details</h1>
        </div>
    );
};

export default NewsDetails;


NewsDetails.getLayout = function getLayout (page) {

    return <RootLayout>{page}</RootLayout>
}