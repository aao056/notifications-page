import './App.css';
import data from "./data.json"

function App() {
  return (
    <div className='container'>
      <div className='upper'>
        <div className="info">
          <h1 className='title'>
            Notifications 
          </h1>
          <span className='count'>{data.filter((el) => el.status === 'unread').length}</span>
        </div>
        <button className="mark-read">Mark all as read</button>
      </div>
      <ul className='notifications'>
       {
        data.map((el, index) => (
          <li key={index} 
              className={el.status === 'unread' ? 'unread-notification' : 'notification'}>
              <img alt={el.from} src={el.background_url}/>
              <div className='notification-content'>
                <a className='name' href="#">{el.from}</a>
                <p className='content'>{el.content}</p>
                {el.post && <span className='post'>{el.post}</span>}
                {el.group && <a href='#' className='group'>{el.group}</a>}
                {el.status === 'unread' && <div className='circle'/>}
                <span className='time'>{el.time}</span>
                {el.message && <p className='message'>{el.message}</p>}
              </div>
              {el.commented_picture && <div className='commented-picture'>
                <img alt = "commented-picture" src={el.commented_picture}/>
              </div>}
          </li>
        ))
       }
      </ul>
    </div>
  );
}

export default App;
