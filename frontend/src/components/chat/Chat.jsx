import { useState } from 'react';
import './chat.scss';

function Chat() {
    const [chat, setChat] = useState(true);
    
    return (
        <div className="chat">
            <div className="messages">
                <h1>Messages</h1>
                <div className="message">
                    <img src="https://pavelpohanka.cz/wp-content/uploads/2015/01/OMG_DDS.png" alt="" />
                    <span>Deniz Said</span>
                    <p>
                        Lorem ipsum, dolor sit amet...
                    </p>
                </div>
                <div className="message">
                    <img src="https://pavelpohanka.cz/wp-content/uploads/2015/01/OMG_DDS.png" alt="" />
                    <span>Deniz Said</span>
                    <p>
                        Lorem ipsum, dolor sit amet...
                    </p>
                </div>
                <div className="message">
                    <img src="https://pavelpohanka.cz/wp-content/uploads/2015/01/OMG_DDS.png" alt="" />
                    <span>Deniz Said</span>
                    <p>
                        Lorem ipsum, dolor sit amet...
                    </p>
                </div>
                <div className="message">
                    <img src="https://pavelpohanka.cz/wp-content/uploads/2015/01/OMG_DDS.png" alt="" />
                    <span>Deniz Said</span>
                    <p>
                        Lorem ipsum, dolor sit amet...
                    </p>
                </div>
                <div className="message">
                    <img src="https://pavelpohanka.cz/wp-content/uploads/2015/01/OMG_DDS.png" alt="" />
                    <span>Deniz Said</span>
                    <p>
                        Lorem ipsum, dolor sit amet...
                    </p>
                </div>

            </div>
            {chat && (
                <div className="chatBox">
                <div className="top">
                    <div className="user">
                        <img src="https://pavelpohanka.cz/wp-content/uploads/2015/01/OMG_DDS.png" alt="" />
                        Deniz Said
                    </div>
                    <span className='close' onClick={()=>setChat(null)}>X</span>
                </div>
                <div className="center">
                    <div className="chatMessage">
                        <p>Lorem ipsum dolor, sit amet</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem ipsum dolor, sit amet</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem ipsum dolor, sit amet</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem ipsum dolor, sit amet</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem ipsum dolor, sit amet</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem ipsum dolor, sit amet</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem ipsum dolor, sit amet</p>
                        <span>1 hour ago</span>
                    </div>
                </div>
                <div className="bottom">
                    <textarea></textarea>
                    <button>send</button>
                </div>
            </div>)}
        </div>
    );
}

export default Chat;