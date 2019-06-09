import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import '../styles/index.scss';

const Meta = ({ title }) => (
  <Head>
    <title>{title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <link rel="apple-touch-icon" sizes="76x76" href="/static/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
    <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
    <script
      defer
      src="https://pro.fontawesome.com/releases/v5.8.1/js/all.js"
      integrity="sha384-GBwm0s/0wYcqnK/JmrCoRqWYIWzFiGEucsfFqkB76Ouii5+d4R31vWHPQtfhv55b"
      crossOrigin="anonymous"
    />
  </Head>
);

export default Meta;

Meta.propTypes = {
  title: PropTypes.string
};

Meta.defaultProps = {
  title: 'John Kueh'
};
