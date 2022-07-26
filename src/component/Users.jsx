// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Users = () => {
//   const [items, setItems] = useState([]);
//   const url = axios("https://jsonplaceholder.typicode.com/users").then(
//     (data) => {
//       console.log("data>>>>", data.data);
//       setItems(data.data);
//     }
//   );
//   return (
//     <div>
//       {items.map((value) => {
//         return <p>{value.name}</p>;
//       })}
//     </div>
//   );
// };
// export default Users;
//===========================================

// const Users = () => {
//   const [items, setItems] = useState([]);
//   const url = fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((data) => {
//       setItems(data);
//     });
//   return (
//     <div>
//       {items.map((value) => {
//         return <p>{value.name}</p>;
//       })}
//     </div>
//   );
// };
// export default Users;

//===================================
// const Users = () => {
//   const [item, setItem] = useState([]);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((dataList) => {
//         console.log("dataList", dataList);
//         setItem(dataList);
//       });
//   }, []);

//   return (
//     <div>
//       {item.map((value) => {
//         return (
//           <div>
//             <p key={value.id}>
//               {value.name} <span>{value.email}</span>
//             </p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
// export default Users;
//=============================================
// const Users = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/users`)
//       .then((response) => response.json())
//       .then((actualData) => {
//         setUsers(actualData);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Users</h1>
//       {users.map((user) => (
//         <p key={user.id}>{user.name}</p>
//       ))}
//     </div>
//   );
// };

// export default Users;
