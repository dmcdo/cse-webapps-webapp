import Header from "./components/Header";

function NotFound() {
    return <>
        <Header />
        <br />
        <div className="card flex flex-col items-center">
            <h1 className="text-2xl">The requested URL {window.location.href} was not found on this server.</h1>
        </div>
    </>
}

export default NotFound;
