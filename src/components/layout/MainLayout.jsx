import Sidebar from "./Sidebar";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen">
      <Sidebar />

      <main className="ml-[267px] min-w-0 bg-white">
        {children}
      </main>
    </div>
  );
}

export default MainLayout;