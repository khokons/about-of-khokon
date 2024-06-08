import Html from "./Html/Html";
import Node from "./Node/Node";
import ReactSwiperComponent from "./React/ReactSwiperComponent";



const Projects = () => {
    return (
        <div className="mt-24">
        <h4 className="text-center uppercase text-xl text-[#C68B59]">PROJECTS I'VE DONE SO FAR</h4>
        <h2 className="uppercase text-2xl text-center my-2 font-bold">Projects</h2>

        <ReactSwiperComponent></ReactSwiperComponent>
        <Node></Node>
        <Html></Html>
    </div>
    );
};

export default Projects;