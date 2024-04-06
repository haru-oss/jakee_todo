const onclicked = () => {

    // テキストボックスの値を取得して値を初期化する。
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = ""
}

// テキストに入力された値を取得して、未完了のTODOのliタグを生成



document.getElementById("add-todo").addEventListener("click",onclicked);