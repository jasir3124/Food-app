import ChefCarl from "./chefCarl"

export default function ChefsSection(){
    const chefs = [
        {
            name: 'Juan Carlos',
            img: '/img/people/chef 1.jpeg',
            recipiesCount: '10',
            cuisine: 'Mexican'
        },
        {
            name: 'Kendrick Lamar',
            img: '/img/people/chef 2.jpeg',
            recipiesCount: '19',
            cuisine: 'Italian'
        },
        {
            name: 'Kanye West',
            img: '/img/people/chef 3.jpeg',
            recipiesCount: '18',
            cuisine: 'French'
        },
        {
            name: 'Shiloh Dinasty',
            img: '/img/people/chef 4.jpeg',
            recipiesCount: '4',
            cuisine: 'American'
        },
        {
            name: 'Drake',
            img: '/img/people/chef 5.png',
            recipiesCount: '13',
            cuisine: 'Mexican'
        },
        {
            name: 'J Cole',
            img: '/img/people/chef 6.jpeg',
            recipiesCount: '16',
            cuisine: 'Indian'
        }
    ]
    return(
        <div className="section chiefs">
            <h1 className="title">Our Top Chefs</h1>
            <div className="topChefsContainer">
                {/* <ChefCarl />
                <ChefCarl />
                <ChefCarl />
                <ChefCarl />
                <ChefCarl />
                <ChefCarl /> */}
                { chefs.map(chef => <ChefCarl key={chef.name} chef={chef}/>) }
            </div>
        </div>
    )
}