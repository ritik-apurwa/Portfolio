export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="pt-20 container overflow-hidden mx-auto">{children}</div>
  );
}
