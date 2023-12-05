function addItem() {
    var inputBox = document.getElementById('input-box');
    var listItem = document.createElement('li');
    listItem.textContent = inputBox.value;
    
    document.getElementById('list-container').appendChild(listItem);
    
    inputBox.value = ''; 
}

document.getElementById('input-box').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        addItem();
    }
});
