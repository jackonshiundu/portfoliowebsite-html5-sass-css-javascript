//code to for opening and clossing menu bar
const openMenu=document.getElementById('open__menu')
const closeMenu=document.getElementById('close_menu')
const navLinks=document.querySelector('.nav__links')

openMenu.addEventListener('click',()=>{
    openMenu.style.display='none';
    closeMenu.style.display='inline-block';
    navLinks.style.display='flex';

})
closeMenu.addEventListener('click',()=>{
    openMenu.style.display='inline-block';
    closeMenu.style.display='none';
    navLinks.style.display='none';

})
//code to scroll the nav bar
const sections = document.querySelectorAll('section[id]')
console.log(sections)
function scrollActive(){
    const scrollY=window.pageXOffset;

    sections.forEach(current=>{
        const sectionHeight=current.offsetHeight;
        const sectionTop=current.offsetTop-50;
        sectionID=current.getAttribute('id');

        if (scrollY>50 && scrollY<sectionTop+sectionHeight){
            document.querySelector('.nav__links li a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__links li a[href*=' + sectionId + ']').classList.remove('active')

        }
    })
}
window.addEventListener('scroll',scrollActive);

//code to scroll the nav bar
//code to animate the progress bar the nav bar
const progressBar=document.querySelector('.progressbar');
const updateProgressBar=()=>{
    progressBar.style.width=`${((window.scrollY)/(document.body.scrollHeight-window.innerHeight)*100)}%`;
    requestAnimationFrame(updateProgressBar);
}
updateProgressBar();
//code to animate the progress bar ends here
