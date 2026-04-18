const inert = document.getElementById('insert')

window.addEventListener('keydown',(e)=>{
    inert.innerHTML = `<div class='color`>

   <table border="1">
    <tr>
        <th>Name</th>
        <th>Roll No</th>
        <th>Course</th>
    </tr>
    <tr>
        <td>Pramila</td>
        <td>001</td>
        <td>BCA</td>
    </tr>
    <tr>
        <td>Rahul</td>
        <td>002</td>
        <td>BTech</td>
    </tr>
</table>
    </div>`;
    
});