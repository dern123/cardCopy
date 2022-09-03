const card = document.querySelector(".text")
card.addEventListener("click", (e)=>copyCard(e))
function copyCard(e){
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = e.target.textContent;
    document.body.appendChild(selBox);
    selBox.focus();
    alert('Скопійовано: ' + `${e.target.textContent}`)
    selBox.select();
    navigator.clipboard.writeText(e.target.textContent);
    // document.execCommand('copy');
    document.body.removeChild(selBox);
}

