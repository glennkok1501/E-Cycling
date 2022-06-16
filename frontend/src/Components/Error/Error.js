import { Alert } from "react-bootstrap"

const Error = ({error}) => {
    return (
        <>
            {error && <Alert key={"danger"} variant={"danger"}>{error}</Alert>}
        </>
    )
}

export default Error