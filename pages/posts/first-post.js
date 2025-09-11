// Import the built-in <Head> component from Next.js
// Used for modifying the <head> of the HTML document (like <title>, meta tags, etc.)
import Head from 'next/head';

// Import the built-in <Link> component from Next.js
// Used for client-side navigation between pages (faster than a normal <a>)
import Link from 'next/link';

// Import the built-in <Script> component from Next.js
// Allows adding external scripts in an optimized way (not actually used in this file, but imported here)
import Script from 'next/script';

// Import a custom Layout component
// This wraps the page content to provide consistent structure (like header, footer, etc.)
import Layout from '../../components/layout';

// Export the default component for this page
// Next.js will render this when you navigate to /posts/first-post
export default function FirstPost() {
    return (
        <>
            <Layout>
                
                <Head>
                    <title>First Post</title>
                </Head>

                <h1>First Post</h1>

                <h2>
                    <Link href="/">Back to home</Link>     
                </h2> 
            </Layout>
        </>
    );
}