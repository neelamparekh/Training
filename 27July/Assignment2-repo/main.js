

function getRepoData(){

    var userName= document.getElementById('username').value;
    var index = document.getElementById('indexnumber').value;
console.log(index);

    $.ajax({
        url: `http://api.github.com/users/${userName}/repos`,

        success: function(data){

                var repo = JSON.stringify(data[index]);

                document.getElementById('indexnumber').innerHTML=data[index];

                document.getElementById('reponame').innerHTML=repo; // displays in HTML
                console.log(document.getElementById('reponame')); // display in console
              

        },
        error: function(e){
            console.log(e);
        }
    })
}
