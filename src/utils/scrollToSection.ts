export const scrollToSection = (sectionId: string) => {
    
    if (sectionId === '#') {
    window.scrollTo({top: 0, behavior:'smooth'})
    }

    const elemento = document.querySelector<HTMLElement>(sectionId);
    if( elemento ) {
        elemento.scrollIntoView({ behavior:'smooth', block:'start' })
    }
}
