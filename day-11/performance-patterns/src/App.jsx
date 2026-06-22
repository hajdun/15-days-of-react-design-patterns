import { Link, Outlet } from "react-router-dom";

function App() {
    return (
        <div className="flex flex-col items-center m-2 space-y-3">
            <header>
                <nav>
                    <Link to="/">child_demonstration</Link>
                    <Link to="/component_isolation">component_isolation</Link>
                    <Link to="/debounce">debounce</Link>
                    <Link to="/deferred">deferred</Link>
                    <Link to="/lazy_loading">lazy_loading</Link>
                    <Link to="/memoize">memoize</Link>
                    <Link to="/memoize_sort">memoize_sort</Link>
                    <Link to="/non_lazy_loading">non_lazy_loading</Link>
                    <Link to="/render_tracker">render_tracker</Link>
                    <Link to="/throttle">throttle</Link>
                    <Link to="/transition">transition</Link>
                    <Link to="/virtualize">virtualize</Link>
                </nav>
            </header>
            <Outlet />
        </div>
    );
}

export default App;
