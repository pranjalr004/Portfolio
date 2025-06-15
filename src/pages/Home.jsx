export const Home=()=>{
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* {Theme Toggle} */}
        <ThemeToggle/>

        {/* {Background Effects} */}
        <StartBackground/>
        {/* {Navbar} */}
        <Navbar/>

        {/* {Main Content} */}
        <main>
            <HeroSection/>
            <AboutSection/>
            <SkillsScetion/>
            <ProjectsSection/>
            <ContactSection/>
        </main>

        {/* {Footer} */}
        <Footer/>
    </div>
}