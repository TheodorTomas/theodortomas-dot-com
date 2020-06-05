import React from 'react';
import NextHead from 'next/head';

const Head = () => (
  <NextHead>
    <title>Theodór Tómas | Software Engineer</title>

    {/* Meta Data */}
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="theme-color" content="rgba(74, 74, 74, 0.95)" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta
      name="description"
      content="Software Engineer, problem solver and enthusiast of tomorrow's technology. Developing software applications with React.js, HTML5, CSS3 & Node.js."
    />
    <meta
      name="keywords"
      content="Theodór Tómas, Software Engineer, Software Developer, Web Developer, React.js, Node.js, JavaScript, HTML5, CSS3"
    />
    <meta name="author" content="Theodór Tómas Theodórsson" />

    {/* Open Graph Meta Tags */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="www.theodortomas.com" />
    <meta property="og:title" content="Theodór Tómas | Software Engineer" />
    <meta
      property="og:description"
      content="Software Engineer, problem solver and enthusiast of tomorrow's technology. Developing software applications with React.js, HTML5, CSS3 & Node.js or whatever tool best fits the job."
    />
    {/* TODO: add og:image */}
  </NextHead>
);

export default Head;
