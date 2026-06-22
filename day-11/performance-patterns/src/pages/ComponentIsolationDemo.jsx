import Dashboard from "../performance/component-isolation/Dashboard";
import IsolatedDashboard from "../performance/component-isolation/IsolatedDashboard";


function ComponentIsolationDemo() {
    return (
        <div className="flex flex-col items-center m-2 space-y-3">
            <Dashboard />
            <IsolatedDashboard />
        </div>
    );
}

export default ComponentIsolationDemo;