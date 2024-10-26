// pages/api/proxy.js
import { createProxyMiddleware } from 'http-proxy-middleware';

export default createProxyMiddleware({
  target: process.env.NEXT_PUBLIC_APPWRITE_URL, // 環境変数からエンドポイントを取得
  changeOrigin: true,
  pathRewrite: {
    '^/api/proxy': '', // `/api/proxy`を削除してAppwriteのルートにリクエストを送信
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};