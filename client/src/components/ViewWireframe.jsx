// BELONGS TO:
//      - Wireframe.jsx
//
//
// FUNCTIONALITY:
//      - GET all projects wireframes ROUTE
//
//
// VISUAL:
//      - renders sections of projects wireframes
//                               01. title
//                               02. image
//                               03. note
//
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";
// import { useMutation, useQuery } from "@apollo/client";

// const Wireframe = () => {
//   const [wireframe, setWireframe] = useState({});
//   const { id } = useParams();
//   const { currentUser } = useAuth();

//   useEffect(() => {
//     axios.get(`/api/wireframes/${id}`).then((res) => {
//       setWireframe(res.data);
//     });
//   }, [id]);

//   return (
//     <div className="wireframe">
//       <h1>{wireframe.name}</h1>
//       <img src={wireframe.image} alt={wireframe.name} />
//       <p>{wireframe.notes}</p>
//     </div>
//   );
// };

// export default Wireframe;
