import Card from "../../components/Card/Card";
import "./CardList.scss";

const CardList = ({beers}) => {

    const beerCards = beers.map(beer => {
        return <Card key={beer.id} 
        image={beer.image_url} 
        name={beer.name} 
        tagline={beer.tagline} 
        abv={beer.abv} 
        ph={beer.ph}
        ibu={beer.ibu}
        first_brewed={beer.first_brewed}
        description={beer.description} />
    })

    return (
        <section className="cardList">
            {beerCards}
        </section>
    );
}

export default CardList;