import React from "react";
import { Editor } from "@tinymce/tinymce-react";

function TextEditor() {
  return (
    <Editor
      apiKey="rz8vglanyvdatk55pckrbxj8gsdqbk25xz3i0h145yls4xta"
      plugins="wordcount"
      init={{
        height: 500,
        menubar: true,
        plugins: 'link image code',
        toolbar:  "undo redo print | styleselect | fontselect fontsizeselect bold" +
        "italics underline forecolor backcolor | link image | alignleft "+
        + "aligncenter alignright alignjustify |lineheight | numlist bullist "+
        "indent outdent | removeformat",

      }
    }
    />
  );
}

export default TextEditor;