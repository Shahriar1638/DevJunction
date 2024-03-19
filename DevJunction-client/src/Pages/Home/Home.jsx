import Banner from "./Banner/Banner";
import Contributor from "./Contributor/Contributor";
import MainTabPage from "./Tabs/MainTabPage";

const Home = () => {
    return (
        <div>
            <Banner></Banner>  
            <MainTabPage></MainTabPage>
            <Contributor></Contributor>
        </div>
    );
};

export default Home;