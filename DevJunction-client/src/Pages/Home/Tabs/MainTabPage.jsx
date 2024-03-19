import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabCards from "./TabCards";
import { useLoaderData } from "react-router-dom";
const MainTabPage = () => {
    const data = useLoaderData()
    const categoryList = data[0]
    const jobsList = data[1]
    return (
      <div className="mx-4 md:mx-6 lg:mx-8 my-52">
        <Tabs>
          <div className="mb-6">
            <TabList>
                {
                    categoryList.map(job => <Tab key={job._id}>{job.category}</Tab>)
                }
            </TabList>
          </div>          
          <TabPanel>
            <div className="grid grid-cols-1 my-6 md:grid-cols-2 md:gap-8">
              {
                jobsList.map(job => {
                  if (job.category===categoryList[0].category){
                      return <TabCards key={job._id} job={job}></TabCards>
                    }})
              }
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {
                jobsList.map(job => {
                  if (job.category===categoryList[1].category){
                      return <TabCards key={job._id} job={job}></TabCards>
                    }})
              }
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {
                jobsList.map(job => {
                  if (job.category===categoryList[2].category){
                      return <TabCards key={job._id} job={job}></TabCards>
                    }})
              }
            </div>
          </TabPanel>
        </Tabs>
      </div>
    );
};

export default MainTabPage;
