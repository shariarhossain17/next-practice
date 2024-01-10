import { useRouter } from "next/router";

const ErrorPage = () => {

    const router = useRouter()

    setTimeout(() => {
       router.push("/");
    }, 5000);
    return (
        <div>
            <h2>404 page</h2>
        </div>
    );
};

export default ErrorPage;