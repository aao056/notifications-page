import './App.css';

function App() {
  return (
    <div className='container'>
      <div className='upper'>
        <div className="info">
          <h1 className='title'>
            Notifications 
          </h1>
          <span className='count'>3</span>
        </div>
        <button class="mark-read">Mark all as read</button>
      </div>
      <ul className='notifications'>
        <li className='unread-notification'>
        <img alt="mark-webber" src='images/avatar-mark-webber.webp'/>
          <div className='notification-content'>
            <a className='name' href="#">Mark Webber</a>
            <p className='content'>reacted to your recent post</p>
            <span className='post'>My first tournament today!</span>
            <div className='circle'/>
            <span className='time'>1m ago</span>
          </div>
        </li>
        <li className='unread-notification'>
          <img alt="angela-gray" src='images/avatar-angela-gray.webp'/>
          <div>
              <div className='notification-content'>
                <a className='name' href='#' >Angela Gray</a>
                <p className='content'>followed you</p>
                <div className='circle'></div>
                <span className='time'>5m ago</span>
              </div>
          </div>
        </li>
        <li className='unread-notification'>
          <img alt="jacob-thompson" src='images/avatar-jacob-thompson.webp'/>
          <div>
              <div className='notification-content'>
                <a className='name' href='#'>Jacob Thompson</a>
                <p className='content'>has joined your group</p>
                <a href='#' className='group'>Chess Club</a>
                <div className='circle'></div>
                <span className='time'>1 day ago</span>
              </div>
          </div>
        </li>
        <li className='notification'>
          <img alt="Rizky Hasanuddin" src='images/avatar-rizky-hasanuddin.webp'/>
          <div>
            <div className='notification-content'>
                <a className='name' href="#">Rizky Hasanuddin</a>
                <p className='content'>sent you a private message</p>
                <span className='time'>5 days ago</span>
                <p className='message'>
                  Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and
                  I'm already having lots of fun and improving my game.
                </p>
              </div>
            </div>
        </li>
        <li className='notification'>
          <img alt="Kimberly Smith" src='images/avatar-kimberly-smith.webp'/>
          <div className='notification-content'>
              <a className='name' href="#">Kimberly Smith</a>
              <p className='content'>commented on your picture</p>
              <span className='time'>1 week ago</span>
          </div>
          <div className='commented-picture'>
                <img alt = "commented-picture" src='images/image-chess.webp'/>
          </div>
        </li>
        <li className='notification'>
            <img alt="Nathan Peterson" src='images/avatar-nathan-peterson.webp'/>
            <div>
              <div className='notification-content'>
                <a href="#" className='name'>Nathan Peterson</a>
                <p className='content'>reacted to your recent post</p>
                <span className='post'>5 end-game strategies to increase your win rate</span>
                <span className='time'>2 weeks ago</span>
              </div>
            </div>
        </li>
        <li className='notification'>
          <img alt="Anna Kim" src='images/avatar-anna-kim.webp'/>
          <div>
              <div className='notification-content'>
                <a className='name'>Anna Kim</a>
                <p className='content'>left the group</p>
                <a href="#" className='group'>Chess club</a>
                <span className='time'>2 weeks ago</span>
              </div>
            </div>
        </li>
      </ul>
    </div>
  );
}

export default App;
