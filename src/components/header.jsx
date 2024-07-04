export default () => {
    return(
        <header>
    <nav>
        <a href="/blog">
             Blog
         </a>
         <a href="/portfolio">
                Portfolio
        </a>
    </nav>
    <nav>
        <a target="_blank" href="https://github.com/JuanMolina2001">
            <i class="ti ti-brand-github"></i>
        </a>
        <a
            target="_blank"
            href="https://www.linkedin.com/in/juan-molina-gallardo-b072b4277?jobid=1234&lipi=urn%3Ali%3Apage%3Ad_jobs_easyapply_pdfgenresume%3BFIFVgkLhS1uhAhP%2F%2BAo8bA%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_jobs_easyapply_pdfgenresume-v02_profile"
        >
            <i class="ti ti-brand-linkedin"></i>
        </a>
        <details>
            <summary>
                <i class="ti ti-language"></i>
            </summary>
            <div>
                <button id="es">Español</button>
                <button id="en">English</button>
            </div>
        </details>
    </nav>
</header>
    )
}