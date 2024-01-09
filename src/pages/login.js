import styles from "@/styles/Login.module.css";
import { signIn } from "next-auth/react";


import Head from "next/head";
const LoginPage = () => {
  return (
    <div>
      <Head>
        <title>Next Login</title>
      </Head>
      <div className={styles.form}>
        <h3>LOGIN</h3>
        <div className="flex text-[20px] ">
         <button onClick={()=> signIn("github",{
          callbackUrl:"http://localhost:3000/"
         })}>Github</button>
         <button>Google</button>
        </div>
        <hr />
        <form>
          <label htmlFor="">Your Email</label>
          <input type="email" />
          <label htmlFor="">Your Password</label>
          <input type="password" />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;