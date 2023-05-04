module.exports = {
  experimental: {
    newNextLinkBehavior: true,
  },
  transpilePackages: [
    "@refinedev/antd",
    "@refinedev/inferencer",
    "antd",
    "@ant-design/pro-components",
    "@ant-design/pro-layout",
    "@ant-design/pro-utils",
    "@ant-design/pro-provider",
    "rc-pagination",
    "rc-picker",
  ],
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "emuuocvkyaoflsbclvbr.supabase.co",
        port: "",
        pathname: "/storage/**",
      },
    ],
  },
};
