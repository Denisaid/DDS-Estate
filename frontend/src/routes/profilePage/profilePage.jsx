import Chat from '../../components/chat/Chat';
import List from '../../components/list/List';
import './profilePage.scss';

function ProfilePage () {
    return (
        <div className="profilePage">
            <div className="details">
                <div className="wrapper">
                    <div className="title">
                        <h1>User Information</h1>
                        <button>Update Profile</button>
                    </div>
                    <div className="info">
                        <span>Avatar:
                        <img
                        src="https://pavelpohanka.cz/wp-content/uploads/2015/01/OMG_DDS.png"
                        alt=""
                        />
                        </span>
                        <span>Username: <b>Deniz Said</b></span>
                        <span>E-mail: <b>deniz@gmail.com</b></span>
                    </div>
                    <div className="title">
                        <h1>My List</h1>
                        <button>Create New Post</button>
                    </div>
                    <List/>
                    <div className="title">
                        <h1>Saved List</h1>
                    </div>
                    <List/>
                </div>
            </div>
            <div className="chatContainer">
                <div className="wrapper">
                    <Chat/>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;