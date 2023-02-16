import { Services } from "@/data";
import { GetServerSidePropsContext } from "next";
import ServiceCard from "./../components/ServiceCard";
import { IService } from "./../types";

const Home = () => {
  // console.log(props.services);
  // const serviceData = props.services;
  // console.log('CLIENT', serviceData)
  return (
    <div className="flex flex-col p-4 px-6 pt-1">
      <h5 className="my-3 font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        itaque dolorum repellendus omnis! Aperiam, iure iste velit rem
        repudiandae facilis.
      </h5>
      <div className="p-4 mt-5 bg-gray-300" style={{marginLeft:"-1.5rem" , marginRight:"-1.5rem"}}>
        <h6 className="my-3 text-xl font-bold tracking-wide">What i offer ?</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {Services.map((service, index) => {
            return (
              <div className="bg-gray-200 rounded-lg lg-col-span-1" key={index}>
                <ServiceCard key={index} service={service} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;

// this will run everytime we VISITS THIS PAGE
// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   const response = await fetch(`http://localhost:3000/api/services`);
//   const data = await response.json();

//   console.log('SERVER', data)

//   return {
//     props: {
//       services: data,
//     },
//   };
// };

// EXECUTES EVERYTIME WHEN YOU REFRESH THE PAGE ONLY IN DEVELOPMENT MODE
//  RUNS ONCE AT THE BUILD TIME , NEVER RUNS ON PRODUCTION
// USE CASES - USE IT WHERE THE DATA IS COMPLETLY STATIC SUCH AS , FAQ PAGE
export const getStaticProps = async (context: GetServerSidePropsContext) => {
  const response = await fetch(`http://localhost:3000/api/services`);
  const data = await response.json();

  console.log("SERVER", data);

  return {
    props: {
      services: data,
    },
  };
};
