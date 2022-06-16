import { useState } from "react";
import CreateBtn from "../../Components/Feed/Create/CreateBtn";
import CreateModal from "../../Components/Feed/Create/CreateModal";
import PostsList from "../../Components/Feed/PostsView/PostsList";


const Feed = () => {
    const [showCreateModal, setShowCreateModal] = useState(false)

    const handleShowCreateModal = () => {
        setShowCreateModal(true)
    }

    return ( 
        <>

            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <CreateBtn handleFunc={handleShowCreateModal}  />

                    <PostsList />

                </div>
            </div>
            <CreateModal 
                showCreateModal={showCreateModal} 
                setShowCreateModal={setShowCreateModal} />
        </>
     );
}
 
export default Feed;