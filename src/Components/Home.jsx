import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Countrys from "./Countrys/Countrys";
import Distination from "./Distination/Distination";

import Offer from "./Offer";
import Service from "./Service";

import UAbout from "./UAbout";
import Testimonial from "./Testimonial";
import Guids from "./Guids";
import Vlog from "./Vlog";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <UAbout></UAbout>
            <Distination></Distination>
            <Service></Service>
            <Countrys></Countrys>
            <Offer></Offer>
            <Guids></Guids>
            <Vlog></Vlog>
            <Testimonial></Testimonial>


        </div>
    );
};

export default Home;