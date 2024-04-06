const onclicked = () => {

    // テキストボックスの値を取得して値を初期化する。
    const inputText = document.getElementById("add-text").value;
        
    document.getElementById("add-text").value = "";
    
    // テキストに入力された値を取得して、未完了のTODOのliタグを生成
    
    // li生成
    const li = document.createElement("li");
   // li生成 
    const div = document.createElement("div");
    div.className = "list-low";
   
   // li生成
   const p = document.createElement("p");
   p.className = "todo-item";
   p.textContent= (inputText);

//    上のタグ達の階層構造を指定していく
    div.appendChild(p);
    li.appendChild(div);
    console.log(li);
// div.appendChild(p)





// innerTextとcontentは何が違うのか？


   //    buttun生成
    const buttun = document.createElement("buttun");
    buttun.textContent = "完了"
    
    

    console.log(p);




}


document.getElementById("add-todo").addEventListener("click",onclicked);





// 階層構造まで終わったら、pushする。