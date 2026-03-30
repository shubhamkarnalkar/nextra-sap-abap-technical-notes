import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head, Search } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

export const metadata = {
  title: "My Cool Docs Site",
};

// const banner = (
//   <Banner storageKey="some-key">My Project 1.0.0 is released 🎉</Banner>
// );
const navbar = (
  <Navbar
    logo={<b>📔Shubhamkar Nalkar</b>}
    logoLink={"https://www.linkedin.com/in/shubhankar-n"}
    projectLink="https://github.com/shubhamkarnalkar"
  />
);
const footer = (
  <Footer>MIT {new Date().getFullYear()} © Shubhamkar Nalkar</Footer>
);

const search = <Search placeholder="Search docs.."></Search>;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          // banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shubhamkarnalkar/"
          footer={footer}
          search={search}
          editLink={null}
          feedback={{ content: null }}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
