// app/layout.jsx
import '../styles/globals.css';

export const metadata = {
  title: 'CryptoInfoDaily',
  description: 'CMC Clone for Degens',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
