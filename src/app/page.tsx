export default function Home() {
  return (
    <div className="container flex items-center justify-center h-screen">
      <h1 className="md:hidden">Home | Mobile</h1>
      <h1 className="hidden md:block lg:hidden">Home | Tablet</h1>
      <h1 className="hidden lg:block">Home | Desktop</h1>
    </div>
  );
}
