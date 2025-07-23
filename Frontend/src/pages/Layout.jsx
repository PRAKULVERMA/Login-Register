import { Outlet, Link } from "react-router-dom";

export default function Layout() {

  return (
    <div className="min-h-screen top-0 left-[60vw] bg-gray-100 text-gray-900 transition-colors duration-300">
      <header className="bg-white shadow px-6 py-4 sticky top-0 z-30">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-center flex-1 ml-10">
            My App
          </h1>

          <div className="flex items-center gap-4">
            <Link
              to="/Login"
              className="text-blue-600 font-medium hover:underline"
            >
              Login
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 w-full p-4">
        <Outlet />
      </main>
    </div>
  );
}
