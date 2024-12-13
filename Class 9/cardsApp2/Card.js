let imgSrc= "logo.png";

class Card {

    suit = '*';

    char = '2';

    constructor(char, suit) {
        super();
        this.suit = suit;
        this.char = char; 
        //this.elecment = cdocument.createElecment("section");
        this.classList.add("card");
        this.onclick = () => this.flip();
        this.style.color = Card.Color(this.suit);
    }

    


}