// import Footer from "../components/Footer";
// import Header from "../components/Header";

import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
