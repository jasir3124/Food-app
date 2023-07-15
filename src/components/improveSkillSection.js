export default function ImproveSkill(){
    const list = [
        'Learn new recepies',
        'Experiment with food',
        'Write your own recipes',
        'Know nutrition facts',
        'Get cooking tips',
        'Get ranked',
    ]


    return(
            <div className="section improveSkills">
                <div className="col img">
                    <img src="/img/gallery/sushi.jpg" alt=""/>
                </div>
                <div className="col typography">
                    <h1 className="title">Improve your culinary skills</h1>
                    { list.map((item, index) => (
                        <p className="skillItem" key={index}>{item}</p>
                    ))}
                    <button className="btn">Sign up now</button>
                </div>
            </div>
    )
}