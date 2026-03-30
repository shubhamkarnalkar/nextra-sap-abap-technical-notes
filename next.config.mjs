import nextra from "nextra";

const withNextra = nextra({
  defaultShowCopyCode: true,
});

// Explicitly setting output to 'export' prevents the GitHub Action from crashing
export default withNextra({
  output: "export",
  images: {
    unoptimized: true, // Necessary for static exports using next/image
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/resources",
        permanent: true,
      },
    ];
  },
});
