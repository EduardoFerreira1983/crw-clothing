import React from "react";

// components

import Editor from "components/Cards/Editor.js";



export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
         {/* Editor />*/}
         <Editor/>
        </div>
        
      </div>
      
    </>
  );
}
