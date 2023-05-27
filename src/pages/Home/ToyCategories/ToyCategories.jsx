import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from "react";
import Toys from "../Toys/Toys";

const ToyCategories = () => {
    const [categories, setCategories] = useState('sports');

    const [toys, setToys] = useState();


    useEffect( () => {
        fetch(`http://localhost:5000/allToys?category=${categories}`)
        .then(res => res.json())
        .then(data => setToys(data))
    } ,[categories])
    
    return (
        <div>
            <section className=" container mx-auto px-4 py-12">
                <div className="mx-auto w-fit  font-bold text-xl md:text-5xl text-[#EC0973] px-8 md:pt-4 md:pb-5 py-3 border-0 mb-8">
                    Shop by category
                </div>
                <div>
                    <Tabs>
                        <TabList>
                            <Tab onClick={() => setCategories('sports')}>Sports Car</Tab>
                            <Tab onClick={() => setCategories('regular')}>Regular Car</Tab>
                            <Tab onClick={() => setCategories('truck')}>Truck</Tab>
                        </TabList>
                        <TabPanel >
                           <Toys toys={toys} ></Toys>
                        </TabPanel>
                        <TabPanel >
                            <Toys toys={toys} ></Toys>
                        </TabPanel>
                        <TabPanel >
                            <Toys toys={toys} ></Toys>
                        </TabPanel>
                    </Tabs>
                </div>
            </section>
        </div>
    );
};

export default ToyCategories;