import React from "react";
import Layout from '../components/layout';
import Hero from "../components/hero";


const Success = () => {
    return (
        <Layout>
            <Hero title="Thank you for your order!" />
            <button>
                Download
            </button>
        </Layout>
    )
}
export default Success;