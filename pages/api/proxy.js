import { createProxyMiddleware } from 'http-proxy-middleware';

export default createProxyMiddleware({
    target: process.env.NEXT_PUBLIC_APPWRITE_URL, // 環境変数からエンドポイントを取得
    changeOrigin: true,
    pathRewrite: {
        '^/api/proxy/': '/', // '/api/proxy' をルートにリダイレクト
    },
});

export const config = {
    api: {
        bodyParser: false,
    },
};