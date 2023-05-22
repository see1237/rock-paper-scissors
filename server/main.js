const express = require("express");
const app = express();
const port =3000;

 app.use(express.static('public'));  // public 폴더 아래 html, javascript 파일 놓고 localhost:3000만 입력하면 
                                    // index.html까지 입력하지 않아도 브라우저에서 실행됨

app.listen(port, () =>{
    console.log()
})

// html, javascript 파일을 다운받도록 로직
