const onclicked = () => {

    // テキストボックスの値を取得して値を初期化する。
    const inputText = document.getElementById("add-text").value;
        
    document.getElementById("add-text").value = "";
    
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

    // 完了ボタンを押したら、削除の時と同様liタグを消す必要がある。

     const complateButtun = document.createElement("button");
     complateButtun.innerText = "完了";
     complateButtun.addEventListener("click", () => {
        //    押された完了ボタンの親にあるliタグ配下の完了ボタンと削除ボタンを削除
        const moveTarget = complateButtun.closest("li");

        // 自分自身を消す時はこのように記述
        complateButtun.nextElementSibling.remove();
        complateButtun.remove();
    

     });
     
     
    //  削除buttun生成
     const deleteButtun = document.createElement("button");
     deleteButtun.innerText = "削除";
     deleteButtun.addEventListener("click", () => {

        // 押された削除ボタンの親にあるliタグを未完了リストから削除
        // closestの特徴：　　　指定したタグに一番近い("liタグを探して取得する")
        const deleteTarget = deleteButtun.closest("li"); 
        document.getElementById("incomplate-list").removeChild(deleteTarget);
     });
     
     
    


    //    上のタグ達の階層構造を指定していく
    div.appendChild(p);
    div.appendChild(complateButtun);
    div.appendChild(deleteButtun);
    li.appendChild(div);
    // 未完了リストに追加
    document.getElementById("incomplate-list").appendChild(li);

}


document.getElementById("add-button").addEventListener("click",onclicked);






