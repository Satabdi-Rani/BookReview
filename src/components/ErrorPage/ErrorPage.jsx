import { useRouteError } from "react-router-dom";

export default function ErrorPage(){
    const error = useRouteError();
    console.error(error);

    return (
        <div className="flex flex-col h-screen justify-center items-center" id="error-page">
            <h1 className="text-7xl">404 Error</h1>
            <h3 className="text-blue-500 text-3xl pt-6 pb-8 ">Right now, This page is not available!</h3>
            <p>
                {/* <i>{error.statusText || error.message }</i> */}
            </p>
        </div>
    )
}

