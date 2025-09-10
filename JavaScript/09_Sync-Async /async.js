const user = document.getElementById('user');
const btn = document.getElementById('btn');



const getuser = async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json();
    console.log(data);
    const userid = data.map((userid)=> userid.id)
    const username = data.map((username)=> username.title)
    user.innerHTML = `
    <h1>User List</h1>
    ${data.map((users)=> `<p> User is is:- ${users.id} <br/> User Task Title:- ${users.title} <br/> Task Completed:- 
    <span style="color:${users.completed? 'green':'red'}">${users.completed}</span>
    </p> `).join('')}
    <br/> 
    `
}
btn.addEventListener('click', getuser);