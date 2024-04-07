const onclicked = () => {

    // テキストボックスの値を取得して値を初期化する。
    const inputText = document.getElementById("add-text").value;
        
    document.getElementById("add-text").value = "";
    
    // テキストに入力された値を取得して、未完了のTODOのliタグを生成
    
    // li生成
    const li = document.createElement("li");
    // div.list-low生成 
    const div = document.createElement("div");
    div.className = "list-low";
    
    // p.todo-item生成
    const p = document.createElement("p");
    p.className = "todo-item";
    p.textContent= (inputText);
    // innerTextとcontentは何が違うのか?????????
    
    //    buttun生成
     const buttun = document.createElement("buttun");
     buttun.textContent = "完了"
     
     
    
     console.log(p);


//    上のタグ達の階層構造を指定していく
    li.appendChild(div);
    div.appendChild(p);

    // 未完了リストに追加
    document.getElementById("incomplate-list").appendChild(li);
    











}


document.getElementById("add-todo").addEventListener("click",onclicked);






