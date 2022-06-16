import { useState } from "react";
import CreateModal from "../../Components/Feed/Create/CreateModal";
import UploadBtn from "../../Components/Utils/UploadBtn";


const Feed = () => {
    const [showCreateModal, setShowCreateModal] = useState(false)

    const handleShowCreateModal = () => {
        setShowCreateModal(true)
    }

    return ( 
        <>
            <UploadBtn handleFunc={handleShowCreateModal}  />
            <CreateModal 
                showCreateModal={showCreateModal} 
                setShowCreateModal={setShowCreateModal} />
        </>
     );
}
 
export default Feed;