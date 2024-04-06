function addingEventListener() {
   
    const input = document.getElementById('button');
    
    
    function handleClick() {
        alert('I was clicked!');
    }

    input.addEventListener('click', handleClick);
}

