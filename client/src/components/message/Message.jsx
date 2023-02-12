import "./message.css";
import { format } from 'timeago.js'

export default function Message({own , message}) {
  return (
    <div className={own ? 'message own' : 'message'}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://mybroadband.co.za/news/wp-content/uploads/2017/04/Twitter-profile-picture.jpg"
          alt="message img"
        />
        <p className="messageText">
          {message.text} 
        </p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  );
}
