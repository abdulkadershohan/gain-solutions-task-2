import HashLoader from "react-spinners/HashLoader";
import PropagateLoader from "react-spinners/PropagateLoader";

function Loading() {
    let type = 'authChackd'
    let content = ''
    const override = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
        width: "100%",
        height: "100vh",
        margin: "0 auto",
    };
    if (type === 'fatch') {
        content = (
            <PropagateLoader color="#36d7b7"
                cssOverride={override}
            />
        )
    }
    if (type === 'authChackd') {
        content = (
            <HashLoader color="#36d7b7"
                cssOverride={override}
            />
        )
    }

    return (
        <div className="sweet-loading ">
            {content}
        </div>
    );
}

export default Loading;