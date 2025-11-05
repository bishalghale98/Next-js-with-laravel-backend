import Header from "@/components/public/Header";

export default function PublicLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
