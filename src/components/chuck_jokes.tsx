import Joke from "../joke";

const ChuckJokes: React.FC<Joke> = ({id,joke}) => (
    <div>
        <p>{id} : {joke}</p>
    </div>
);

export default ChuckJokes;