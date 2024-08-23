const App = () => {
    return (
        <div>
            <h1>Tweets</h1>
            <Tweet 
                username="JohnDoe"
                name="John"
                date = {new Date().toJSON().slice(0,10)}
                message="This is the first message."
            />
            <Tweet 
                username="JohnnyApple"
                name="Seed"
                date = {new Date().toJSON().slice(0,10)}
                message="This is the second message."
            />
        </div>
        
    )
}

