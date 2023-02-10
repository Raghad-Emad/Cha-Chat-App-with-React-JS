import "./message.css";

export default function Message({own}) {
  return (
    <div className={own ? 'message own' : 'message'}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://mybroadband.co.za/news/wp-content/uploads/2017/04/Twitter-profile-picture.jpg"
          alt="message img"
        />
        <p className="messageText">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        </p>
      </div>
      <div className="messageBottom">1 Hour ago</div>
    </div>
  );
}
