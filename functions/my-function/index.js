import { createProxyMiddleware } from 'http-proxy-middleware';

export default createProxyMiddleware({
    target: process.env.NEXT_PUBLIC_APPWRITE_URL, 
    changeOrigin: true,
    pathRewrite: {
        '^/api/proxy': '', 
    },
});

export const config = {
    api: {
        bodyParser: false,
    },
};