import React from "react";
import Link from "next/link";
import Layout from "./layout";

const NotFound = () => {
  return (
    <Layout>
      <section>
        <div className="container">
          <div className="--center-all">
            <h1>Opps! Looks like you are lost</h1>
            <p>Sorry, this page does not exist. please go back to the homepage</p>
            <br />
            <Link href="/">
              <button className="--btn --btn-primary">Back To Home</button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
