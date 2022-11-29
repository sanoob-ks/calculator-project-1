function btnClick(val){
    document.getElementById('input_screen').value=document.getElementById('input_screen').value+val
}
function clearScreen(){
    document.getElementById('input_screen').value=""
}
function equalClick(){
    var text=document.getElementById('input_screen').value
    var result=eval(text)
    document.getElementById('input_screen').value=result

}