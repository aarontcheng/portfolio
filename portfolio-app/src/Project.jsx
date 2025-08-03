function Project(props){


    return (
        <>
            <div className="project">
                <h4>{props.name}</h4>
                <a style={{color :"white"}} href={props.link}>{props.link}</a>
                <img src={props.image}/>
                <br/>
                <br/>
                <ul>
                    <li>{props.bullets}</li>
                </ul>
            </div>
            
            


        </>
    )

} export default Project