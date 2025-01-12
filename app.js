function change(){
    var change = prompt('Enter Color Name')
    var selecolor = document.body
    selecolor.style.backgroundColor = change
    if(change === ""){
        document.write('Please enter color name')

    }
}