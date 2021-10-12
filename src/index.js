import getData from './getData.js';
import Navbar from "./Components/Navbar.js";
import MainContainer from "./Components/MainContainer.js";
import SearchResultsCard from "./Components/SearchResultsCard.js";

function handleUpdateUsers(){
    return getData()
    .then(res=>{
        const results = []
        for( let user of res.data ){
            results.push( SearchResultsCard(user) )
        }
        console.log(results)
        document.body.append( ...results )
    })
}
document.body.append( Navbar(), MainContainer() )

document.getElementById("search").addEventListener("click", handleUpdateUsers)

// const dayjs = require('dayjs');
// const _ = require('lodash');
// // npm install lodash


// function timeComponent(){
//     const el = document.createElement('div');
//     // const el2 = document.createElement('div');
//     el.innerText = dayjs().format("DD/MM/YYYY HH:mm:ss");
//     // el2.innerText = _.join(['a', 'b', 'c'], '~');
//     return [el];
// }


// document.body.append( ...timeComponent() );