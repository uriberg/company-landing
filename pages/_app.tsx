import App from 'next/app'
import React from 'react'
import Layout from "../components/Layout";
import '../sass/main.scss';

export default class MyApp extends App {
    render () {
        const { Component, pageProps } = this.props;
        return (
            <Layout title="Fintek">
                <Component {...pageProps} />
            </Layout>
        )
    }
}
