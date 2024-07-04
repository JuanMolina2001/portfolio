export default ({ gh, website, download, techs, name, description }) => {
    const a = [gh, website, download];
    const icons = ["ti ti-brand-github", "ti ti-world-www", "ti ti-download"];
    return (
        <details>
            <summary>
                <div>
                    <div class="btnAccordion"></div>
                    <p class="name">
                        {name}
                    </p>
                </div>
                <div>
                    {
                        a.map((item, index) => {
                            if (item) {

                                return (
                                    <a href={item} target="_blank">
                                        <i class={icons[index]}></i>
                                    </a>
                                );
                            }
                        })
                    }
                </div>
            </summary>
            <div>
                <p class="description">
                    {description}
                </p>
                <div>
                    {
                        techs.map((item) => {
                            return (
                                <img height="35" width="35" src={`/imagenes/${item}`} alt={item} />
                            );
                        })
                    }
                </div>
            </div>
        </details>
    )
}