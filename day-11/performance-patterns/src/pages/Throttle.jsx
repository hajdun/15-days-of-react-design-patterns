import ScrollTracker from "../performance/throttling/ScrollTracker";

function Throttle() {
    return (
        <div className="flex flex-col items-center m-2 space-y-3">
            < ScrollTracker />
        </div>
    );
}

export default Throttle;
