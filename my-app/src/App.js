import './App.css';
import Counter from './components/Counter'

function MyButton() {
  return (
    <button>I'm a button</button>
  )
}

const user = {
  name: 'Rob Scherer',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
}

function MyApp() {
   return (
    <div>
      <h1>Hello World</h1>
      <h2>{user.name}</h2>
      <MyButton />
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
      <Counter />
    </div>
   );
}

export default MyApp;
