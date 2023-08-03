
const accordeons = document.querySelectorAll('.accordeon');

accordeons.forEach((accordeon)=>{
    const accordeonButton = accordeon.querySelector('.accordeonButton');

    accordeonButton.addEventListener('click', ()=>{
        const minusIcon = accordeonButton.querySelector('.minusIcon').classList.toggle('active');

        const plusIcon = accordeonButton.querySelector('.plusIcon').classList.toggle('active');

        const accordeonText = accordeon.querySelector('.accordeonText').classList.toggle('active');
    });
});