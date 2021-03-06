// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// FolderUpload Component : Uploads a Folder to IPFS and returns the URL
import React, { useState } from "react";
import { FolderUpload } from "react-ipfs-uploader";

const App = () => {
  const [folderUrl, setFolderUrl] = useState("");

  return (
    
    <div >
     <div class="container" style={{marginTop:30, justifyContent:'center',height: '500vh', scrollMargin:true}}>
     <FolderUpload setUrl={setFolderUrl} />      
      FolderUrl :{" "}    
      <a href={folderUrl} target="_blank" rel="noopener noreferrer">
        {folderUrl}
      </a>
     </div>
     
    </div>
  );
};

export default App;
