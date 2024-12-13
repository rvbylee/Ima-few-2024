
DOM.set({
    width: "40em",
    margin: "5em auto",
    H1: "People in Space",
    main:{
        h2: "This is how many people are in space right now",
        section: {
            id: "listElement",
            display: "flex",
            margin: "1em",
            width: "5em",
            height: "10em",
            backgroundColors: "Wheat",
            innerText: "Some text",
        },
    },
});


async function loadPeople (){
    let response = await fetch ("http://api.open-notify.org/astros.json");
    let json = await response.json();
    for(let person of json.people){
        listElement.set({
            section:{
                margin: "1em auto",
                padding: "0.5em",
                backgroundColor: "#ddd",
                h3: personl.name,
                p: "is staioned on the " + person.craft,
            }
           
        });
    }

};

loadPeople();


