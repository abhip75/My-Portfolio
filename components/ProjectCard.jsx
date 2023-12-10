import Image from "next/image";
import aizen from "../public/dashboard.png";
import kamui from "../public/kamui.jpg";
import pokedex from "../public/pokemon.jpg";
import portfolio from "../public/portfolio.jpg";
import cryptohunter from "../public/crypto-hunter.jpg";
import redeye from "../public/red-eye.jpg";
import evo from "../public/tesla.jpg";
import nft from "../public/nft.jpg";
import nike from "../public/movies.jpg";
import dashboard from "../public/next-dashboard.jpg";
import shop from "../public/ecom.jpg";
import todo from "../public/todo.png";
import Link from "next/link";

const ProjectCard = () => {
  const data = [
    {
      id: 1,
      image: shop,
      title: "Shopping Cart",
      description: "Created ecommerce project using React js and Tailwind css",
      link: "https://shop-cart-rust.vercel.app/",
      target: "_blank",
    },
    {
      id: 2,
      image: nike,
      title: "Movie App",
      description: "Created Movie App",
      link: "https://e-commerce-mern-app-gvib.vercel.app/",
      target: "_blank",
    },
    {
      id: 3,
      image: aizen,
      title: "Dashboard",
      description: "Created dashboard using react js and material ui",
      link: "https://react-dashboard-hazel.vercel.app/",
      target: "_blank",
    },

    {
      id: 4,
      image: evo,
      title: "Tesla Clone",
      description: "Landing Page",
      link: "https://react-redux-project-theta.vercel.app/",
      target: "_blank",
    },
    
    
    {
      id: 6,
      image: dashboard,
      title: "Nextjs Dashbaord",
      description:
        "Created responsive dashboard using next js and tailwind css",
      link: "https://nextjs-dashboard-gold.vercel.app/",
      target: "_blank",
    },

    {
      id: 7,
      image: todo,
      title: "Nextjs Fullstack",
      description: "Created a todo app using Next js, jwt auth and Mongo DB",
      link: "https://next-js-fullstack-app-orcin.vercel.app/",
      target: "_blank",
    },

    {
      id: 8,
      image: portfolio,
      title: "Portfolio",
      description: "Portfolio made using NextJS and Tailwind CSS",
      link: "",
      target: "",
    },
  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {data.map((project) => {
        return (
          <div
            className="rounded-lg mb-12 flex flex-col items-center"
            key={project.id}
          >
            <Link
              href={project.link}
              target={project.target}
              onClick={() => {
                project.title === "Portfolio"
                  ? alert("You are already on this site! 🤩")
                  : "";
              }}
            >
              <Image
                loading="lazy"
                src={project.image}
                alt={project.title}
                width="200"
                className="rounded-md drop-shadow-2xl hover:scale-110"
              />
            </Link>
            <div className="flex flex-col items-center">
              <h1 className="font-semibold text-[1.5rem] mt-3 text-gray-700 dark:text-white">
                {project.title}
              </h1>
              <p className="max-w-[90%] text-gray-400 font-light text-center">
                {project.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
