const Person = ({age, name, hobbies}) => {
    // Condition for voting age.
    const goVote = age >= 18 ? "PLEASE GO VOTE!!!" : "YOU MUST BE 18!!!"

    // Create new array on every hobbies
    const hobbiesLi = hobbies.map (hobbies => (<li>{ hobbies }</li>));

    return (
        <div>
            <p>Learn some information about this person</p>
            <ul>
                <li><b>name: </b>{ name.slice(0,6) }</li>
                <li><b>age:</b> { age }</li>
                <ul><b>hobby:</b> {hobbiesLi}</ul>
            </ul>
            <h3>{goVote}</h3>
        </div>
    )
}