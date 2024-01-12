// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[{
            protocol: "http",
            hostname: "localhost",
            port: "4000",
            pathname: "/image/**"
        }, {
            hostname: "i.ytimg.com"
        }]
    }
}

module.exports = nextConfig
