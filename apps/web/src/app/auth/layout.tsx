export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="bg-gradient-to-bl from-[#F6F4F0] to-[#DFD6CF] w-full h-full flex">
      {children}
    </section>
  );
}
