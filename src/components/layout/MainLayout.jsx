import Sidebar from "./Sidebar";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen">
      <Sidebar />

      <main className="ml-0 min-w-0 bg-white md:ml-[267px]">
        {children}
      </main>
    </div>
  );
}

export default MainLayout;
