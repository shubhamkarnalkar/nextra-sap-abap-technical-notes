import nextra from "nextra";

const withNextra = nextra({
  defaultShowCopyCode: true,
});

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const repoName = process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}` : "";

// Explicitly setting output to 'export' prevents the GitHub Action from crashing
export default withNextra({
  output: "export",
  basePath: isGitHubPages ? repoName : "",
  images: {
    unoptimized: true, // Necessary for static exports using next/image
  },
});
