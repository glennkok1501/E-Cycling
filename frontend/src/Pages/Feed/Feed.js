import { useState } from "react";
import CreateModal from "../../Components/Feed/Create/CreateModal";
import PostsList from "../../Components/Feed/PostsView/PostsList";
import UploadBtn from "../../Components/Utils/UploadBtn";


const Feed = () => {
    const [showCreateModal, setShowCreateModal] = useState(false)

    const handleShowCreateModal = () => {
        setShowCreateModal(true)
    }

    return ( 
        <>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <PostsList />

                </div>
            </div>
            <UploadBtn handleFunc={handleShowCreateModal}  />
            <CreateModal 
                showCreateModal={showCreateModal} 
                setShowCreateModal={setShowCreateModal} />
        </>
     );
}
 
export default Feed;