import MemoizedProfileTracker from "../performance/memoization/memo/MemoizedProfileTracker";

function Memoize() {
    return (
        <div className="flex flex-col items-center m-2 space-y-3">
            < MemoizedProfileTracker />
        </div>
    );
}

export default Memoize;
