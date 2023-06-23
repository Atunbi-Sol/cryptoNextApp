import Layout from "@/components/Layout";
import React from "react";

const Coin = () => {
  return (
    <Layout>
      <section style={{ background: "#eee" }}>
        <div className="container">
          <h1>Coin Details</h1>
        </div>
      </section>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  
}

export default Coin;
