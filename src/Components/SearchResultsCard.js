/**
 * @returns SearchResults
 */

 function SearchResults(user){
     console.log(user)
    const div = document.createElement('div');
    div.innerHTML = `
        <div>
            ${user.first_name}
        </div> 
    `
    return div
}

export default SearchResults;