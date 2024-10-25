import './globals.css'; 
import type { Metadata } from 'next'; 
import UserProvider from './context/user';
import AllOverlays from './components/AllOverlay';

export const metadata: Metadata = {
  title: 'TikTok Clone',
  description: 'TikTok Clone',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">  
      <body>
        <UserProvider>
          <AllOverlays />
          {children}
        </UserProvider>
      </body>
    </html>
  );
}