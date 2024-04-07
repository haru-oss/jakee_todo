const onclicked = () => {

    // テキストボックスの値を取得して値を初期化する。
    const inputText = document.getElementById("add-text").value;
        
    document.getElementById("add-text").value = "";
    
    // テキストに入力された値を取得して、未完了のTODOのliタグを生成
    
    // li生成
    const li = document.createElement("li");
    // div.list-low生成 
    const div = document.createElement("div");
    div.className = "list-row";
    
    // p.todo-item生成
    const p = document.createElement("p");
    p.className = "todo-item";
    p.textContent= (inputText);
    // innerTextとcontentは何が違うのか?????????
    
    //    完了buttun生成


     const complateButtun = document.createElement("button");
     complateButtun.innerText = "完了";
     
     
    //  削除buttun生成
     const deleteButtun = document.createElement("button");
     deleteButtun.innerText = "削除";
     
     
    


    //    上のタグ達の階層構造を指定していく
    div.appendChild(p);
    div.appendChild(complateButtun);
    div.appendChild(deleteButtun);
    li.appendChild(div);
    // 未完了リストに追加
    document.getElementById("incomplate-list").appendChild(li);
    
   










}


document.getElementById("add-button").addEventListener("click",onclicked);






