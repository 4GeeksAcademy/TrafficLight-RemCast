import Section from "../components/Section";
import useAppContext from "../contexts/AppContext";


const Home = () => {
    const { store } = useAppContext();
    const { isLoading } = store;

    if (isLoading) {
        return (<div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>);
    }

    return (
        <main className="container">
            <Section fetchType="people" title="Characters" />
            <Section fetchType="planets" title="Planets" />
            <Section fetchType="species" title="Species" />
            <Section fetchType="starships" title="Starships" />
        </main>
    );
};

export default Home;