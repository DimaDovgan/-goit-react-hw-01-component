import './App.css';
import friends from './friend-list/friends.json';
import { FriendList } from './components/friend-list-dir/friend-list'
import user from './social-profile/user.json';
import {Profile} from "./components/social-profile-dir/social-profile"
import data from './statistics/data.json';
import { Statistics } from './components/statistics-dir/statistics';
import  transactions  from './transaction-history/transactions.json';
import {TransactionHistory} from "./components/transaction-history-dir/transaction-history"
function App() {
  return (<div className='App'>
     <FriendList friends={friends} />
<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
    />
    
<Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />
    
<TransactionHistory items={transactions} />
    </div>);
}

export default App;
