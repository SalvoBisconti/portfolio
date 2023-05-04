/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ["src/styles/scss"],
    prependData: `
      @import "./helpers/_mixins.scss";
      @import "./helpers/_resoluctions.scss";
      @import "./variables/_colors.scss";
      @import "./variables/_keyframes.scss";
      @import "./variables/_animations.scss";
    `,
  },
};

module.exports = nextConfig;
