// https://www.youtube.com/watch?v=zQyrwxMPm88
// npm install firebase react-firebase-hooks
// https://github.com/fireship-io/react-firebase-chat/tree/master/src
// if this doesn't work, ^ original git

import React, { Component, useRef, useState } from 'react';
import './Chat.css';
import img2 from './sss.png';

import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyC9bqRucfHam-HhjAJCV68kvvFcwEAdhYM",
  authDomain: "final-project-chat-6892d.firebaseapp.com",
  projectId: "final-project-chat-6892d",
  storageBucket: "final-project-chat-6892d.appspot.com",
  messagingSenderId: "172097499578",
  appId: "1:172097499578:web:adf832e5f62953400cad83"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();


function Chat() {

  const [user] = useAuthState(auth);

  return (
    <div id="BIGDIV">
      <div className="App">
        <header>
          <h1>Global Chat</h1>
          <SignOut />
        </header>

        <section>
          {user ? <ChatRoom /> : <SignIn />}
        </section>

      </div>
    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
    </>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}


function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(500);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form id ="form1" onSubmit={sendMessage}>

      <input id ="input1" value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Type Here" />

      <button id="send" type="submit" >Send!</button>

    </form>
  </>)
}


function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      
      <img src={photoURL} onError={(e) => (e.target.onerror = null, e.target.src = img2)}/>
      <p>{text}</p>
    </div>
  </>)
}

export default Chat;