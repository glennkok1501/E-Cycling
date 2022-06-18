import { useState } from "react";
import { Button } from "react-bootstrap";
import Loading from "../Utils/Loading";
import CreateNoticeModal from "./CreateNoticeModal";
import NoticesList from "./NoticesList";

const View = () => {

    const [showCreateModal, setShowCreateModal] = useState(false)
    const [ids, setIds] = useState([])
    const [isPending, setIsPending] = useState(true)

    return ( 
        <>
            <Loading isPending={isPending} />
            {
                !isPending && 
                <>
                    <div className="d-flex justify-content-end" >
                        <Button onClick={() => setShowCreateModal(true)} className="rounded-pill ps-4 pe-4" variant="dark">Make an announcement</Button>
                    </div>

                    <CreateNoticeModal showCreateModal={showCreateModal} setShowCreateModal={setShowCreateModal} />
                </>
            }
            <NoticesList ids={ids} setIds={setIds} isPending={isPending} setIsPending={setIsPending} />
        
        </>
        
     );
}
 
export default View;