
import './Styles/App.css';


import React, { useState } from 'react';
import Counter from './Components/Counter';
import PostList from './Components/PostList';


function App() {

	const [posts, setPosts] = useState([
		{id:1, title: 'Javascript', body: 'It is so easy'},
		{id:2, title: 'Javascript 2', body: 'It is so easy'},
		{id:3, title: 'Javascript 3', body: 'It is so easy'},

	])

return  <div className="App">
			<Counter/>
			<PostList posts={posts}/>

		
		</div>;
}

export default App;
   


/*___________________________________________
  useState

  function App() {
	let [name, setName] = useState('name ');
  let [secondName, setsecondName] = useState('secondName ');
  let [age, setAge] = useState('age ');
  let [ban, setBan] = useState(false);

	return <div>
		<span>{name}</span>
    <span>{secondName}</span>
    <span>{age}</span>
    <span>{ban ? 'забанен' : 'не забанен'}</span>
      
    <button onClick={() => setBan(true)}>ban</button>
    <button onClick={() => setBan(false)}>enban</button>

    <button onClick={() => setName('your name ')}>Change</button>
		<button onClick={() => setsecondName('your second name ')}>Change</button>
    <button onClick={() => setAge('your age ')}>Change</button>
	</div>;
}
___________________________________________*/
/* input
function App() {
	const [value1, setValue1] = useState(0);
	const [value2, setValue2] = useState(0);
	const [result, setResult] = useState(0);
	
	return <div>
		<input value={value1} onChange={event => setValue1(event.target.value)} />
		<input value={value2} onChange={event => setValue2(event.target.value)} />
		
		<button onClick={() => setResult(Number(value1) + Number(value2))}>btn</button>
		<p>result: {result}</p>
	</div>;
}
_____________________________________*/
/*
chechBox
function App() {
	const [checked, setChecked] = useState(true);
	
	return <div>
		<input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
		<p>состояние: {checked ? 'отмечен' : 'не отмечен'}</p>
	</div>;
}
function App() {
	const [checked, setChecked] = useState(true);
	
	let message;
	if (checked) {
		message = <p>сообщение 1</p>;
	} else {
		message = <p>сообщение 2</p>;
	}
	
	return <div>
		<input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
		<div>{message}</div>
	</div>;
}
*//*
function App() {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
	
	const result = notes.map((note, index) => {
		return <p key={index}>{note}</p>;
	});
	
	return <div>
		{result}
	</div>;
}*/


