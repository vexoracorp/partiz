export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body style={{ paddingRight: "240px", paddingLeft: "240px" }}>
        {children}
      </body>
    </html>
  );
}
