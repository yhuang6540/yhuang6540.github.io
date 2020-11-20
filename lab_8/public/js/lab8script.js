
let url = "https://www.reddit.com/r/popular.json";
let chart = "";
console.log(url);
//const fetchPromise = fetch(url);

let settings = { method: "Get" };
let chartValues = [];

async function getData() {
    await fetch(url, settings)
        .then(res => res.json())
        .then((json) => {
            let listSize = json.data.children.length;
            // Loop to pick 5 random entries
            for (x = 0; x < 5; x++) {
                /*
                    Get a random number within the size of the list
                    Get subreddit, author, title, and ups from record
                    Set the message to be:
                        let message = "<b>Subreddit </b>: " + subreddit + " <b>Author</b>:" + author + " <b>Title</b>:" + title + " <b>Up votes</b>: " + ups;
                    Add a new <li> element with the message to the 'redditList' element
                    Add a data entry to chartValues with author as the label and ups as the y component
                */

               //get a random number within the list size
               let number = Math.floor(Math.random() * listSize);
               
               //get into a specific post
               let record = json.data.children[number].data;
               
               //get the detail info
               let subreddit = record.subreddit;
               let author = record.author;
               let title = record.title;
               let ups = record.ups;

               let message = "<b>Subreddit </b>: " + subreddit + " <b>Author</b>:" + author + " <b>Title</b>:" + title + " <b>Up votes</b>: " + ups;
               
               //add detail info to index.html
               let item = document.createElement("li");
               item.innerHTML = (message);
               document.getElementById("redditList").append(item);
                
               /*.......*/
                
                let addToChart = {'label':author,y:ups}; // Gave this. This needs to be added to the 'chartValues'
                /*.......*/
                chartValues.push(addToChart);
            }
        })
        .then(values => console.log(chartValues));
        chart.render(); // Do you need to remove the comments from here in order to get it to work?
};
//getData();

window.onload = async function makeChart() {
    getData();
    chart = new CanvasJS.Chart("chartContainer", {
        //animationEnabled: true,
        title: {
            text: "Upvotes"
        },

        data: [     
            { 
                type: "column",
                name: "Popular Reddit",
                dataPoints: chartValues// WHAT GOES HERE???
            }
        ]
    });
    
    //chart.render();
}

//window.onload = makeChart();