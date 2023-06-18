// import React, { useEffect } from 'react';
// import lobbyScript from './js/lobby.js';
// import { useNavigate } from 'react-router-dom';
// import './styles/main.css';
// import './styles/lobby.css';
// import './styles/room.css';
// const Hangout = () => {
//     const navigate = useNavigate();
//     useEffect(() => {
//         const form = document.getElementById('lobby__form');
      
//         const displayName = sessionStorage.getItem('display_name');
//         if (displayName) {
//           form.name.value = displayName;
//         }
      
//         const handleSubmit = (e) => {
//           e.preventDefault();
      
//           sessionStorage.setItem('display_name', e.target.name.value);
//         //   window.location = `room.html?room=1`;
//             navigate('/hangout/room');
//         };
      
//         form.addEventListener('submit', handleSubmit);
      
//         // Clean up the event listener
//         return () => {
//           form.removeEventListener('submit', handleSubmit);
//         };
//       }, []);
      
      
//   return (
//     <div>
//       {/* <header id="nav">
//         <div className="nav--list">
//           <a href="lobby.html">
//             <h3 id="logo">
//               <span>Rainbow hangout</span>
//             </h3>
//           </a>
//         </div>
//       </header> */}

//       <main id="room__lobby__container">
//         <div id="form__container">
//           <div id="form__container__header">
//             <p>👋Join Room</p>
//           </div>

//           <form id="lobby__form">
//             <div className="form__field__wrapper">
//               <label>Your Name</label>
//               <input type="text" name="name" required placeholder="Enter your display name..." />
//             </div>

//             <div className="form__field__wrapper">
//               <button type="submit">
//                 Go to Room
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
//                   <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
//                 </svg>
//               </button>
//             </div>
//           </form>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Hangout;

const HangoutPage = () => {
    return (
        <div>
            <h1>Hangout</h1>
        </div>
    )
}
export default HangoutPage;