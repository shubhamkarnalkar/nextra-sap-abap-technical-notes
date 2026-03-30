import nextra from "nextra";

const withNextra = nextra({
  defaultShowCopyCode: true,
});

export default withNextra({
  // Manually define the output to bypass the buggy injection
  output: "export",
  images: {
    unoptimized: true, // Required for static exports
  },
  // Note: 'redirects' is removed because it won't work on GitHub Pages
});
