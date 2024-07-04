import Accordion  from "./accordion";
export default () => {
    return(
        <section id="proyectos">
    <h2 id="projectsTitle"></h2>
    <div id="projectsList">
        <Accordion
            download="https://drive.google.com/file/d/1CCHQdHVQdbpR6vRvbI37hCS8n70IqO1h/view"
            gh="https://github.com/JuanMolina2001/autophagos"
            techs={["electron.svg", "puppeteer.svg"]}
            name ="Autophagos"
        />
        <Accordion
            gh="https://github.com/JuanMolina2001/DevFusion"
            techs={["pywebview.png", "preact.svg"]}
            name="DevFusion"
        />
        <Accordion
            gh="https://github.com/JuanMolina2001/musicPlayer"
            techs={["electron.svg", "preact.svg"]}
            name="Music Player"
        />
        <Accordion
            gh="https://github.com/JuanMolina2001/API-TNE"
            website="https://tne-api.fly.dev"
            techs={["express.svg"]}
            name="API TNE"
        />
    </div>
</section>
    )
}