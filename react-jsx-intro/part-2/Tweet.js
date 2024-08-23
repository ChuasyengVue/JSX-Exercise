const Tweet = (props) => {
    return (
        <div className="tweet">
            <ul>
            <li > <b>Username:</b> { props.username } </li>
            <li> <b>Tweeter Name:</b> { props.name } </li>
            <li> <b>Tweet Date:</b> { props.date } </li>
            <span> <b>Tweet Message:</b> { props.message }</span> 
        </ul>
        </div>
        
    )
}

