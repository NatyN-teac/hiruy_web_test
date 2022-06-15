document.getElementById('search-input').addEventListener('keyup', async (e) => {
    // Search comments
    // Use this API: https://jsonplaceholder.typicode.com/comments?postId=3
    // Display the results in the UI

    // Things to look out for
    // ---
    // Use es6
    const search_query = document.getElementById("search-input").value
    const res = await fetch('http://localhost/simple-html-site-feature-php-quiz/php/public/index.php');
    const json = await res.json()
    var output = '';
    json.forEach(element => {
        if(element.name.match(search_query)){
            output += '<li>'+element.name+'</li><hr>'
        }
    })
    const result = output
    document.getElementById('results').innerHTML = result
})