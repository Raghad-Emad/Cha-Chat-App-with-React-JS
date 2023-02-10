import './chatOnline.css';

export default function ChatOnline() {
  return (
    <div>
        <div className="chatOnlineFriend">
            <div className="chatOnlineImgContainer">
                <img 
                className='chatOnlineImg'
                src="https://mybroadband.co.za/news/wp-content/uploads/2017/04/Twitter-profile-picture.jpg" 
                alt="online img" />
                <div className="chatOnlineBadge"></div>
            </div>
            <span className="chatOnlineName">John Doe</span>
        </div>
    </div>
  )
}
