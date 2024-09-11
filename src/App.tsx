import './reset.css';
import './App.css';

import anvil from './anvil.jpg';

function App() {
  return (
    <>
      <div className="container">
        <header></header>
        <div className="info">
          <img className="img" src={anvil} />
          <div className="detail">
            <p>이름 : 임형석</p>
            <p>학과 : 컴퓨터공학부 24학번</p>
            <p>나이 : 19</p>
          </div>
        </div>
        <footer>
          <p>연 나이는 20살입니다. MBTI는 INTP입니다. 잘 부탁드립니다.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
