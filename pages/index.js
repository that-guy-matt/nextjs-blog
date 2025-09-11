// Import the built-in <Head> component from Next.js
// This allows you to set metadata in the <head> of the HTML document (like title, meta tags, etc.)
import Head from 'next/head';

// Import a custom Layout component and a named export `siteTitle` from your layout file
// `Layout` is a wrapper component that defines consistent structure (e.g., header, footer, etc.)
// `siteTitle` is likely a string constant used for the page title
import Layout, { siteTitle } from '../components/layout';

// Import CSS module styles
// `utilStyles` is an object where class names map to unique, scoped CSS class names
import utilStyles from '../styles/utils.module.css';

// Export the default Home page component (this is what Next.js will render at the `/` route)
export default function Home() {
  return (
    // Wrap the page content inside the Layout component
    // Passing `home` as a prop might toggle special styling/behavior in Layout
    <Layout home>
      
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        
        <p className="intro">
          Hi, I’m Matthew — a student learning web development and exploring 
          how to build modern applications with tools like JavaScript, React, and Next.js. 
          I’m interested in solving problems, picking up new skills, and experimenting with technology.
        </p> 

        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}