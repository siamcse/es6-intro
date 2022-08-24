document.getElementById('bg-button').addEventListener('click',function(){
    const friends = document.getElementsByClassName('friends');
    for(const friend of friends){
        friend.style.backgroundColor = 'green';
    }
})
document.getElementById('centering').addEventListener('click',function(){
    const center = document.getElementById('center');
    center.style.textAlign = 'center';
})
document.getElementById('add-friend').addEventListener('click',function(){
    const friendsContainer = document.getElementById('friends');
    const div = document.createElement('div');
    div.classList.add('friends');
    div.innerHTML = `
    <h3 class="friend">New Friend</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste reiciendis accusamus consequatur, sunt officia officiis.</p>
    `;
    friendsContainer.appendChild(div);
})