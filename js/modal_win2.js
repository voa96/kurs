const recommended_equipment = document.querySelector(".recommended_equipment");
const min_equipment = document.querySelector(".min_equipment");

const CloseModalBtn = document.querySelector(".close_modal_win")
const ModalWinMain = document.querySelector(".modal_win_wrapper")
const ModalWin = document.querySelector(".modal_win")

const recPrice = document.querySelectorAll(".rec")
const minPrice = document.querySelectorAll(".min")

recommended_equipment.addEventListener("click",switchmax)
min_equipment.addEventListener("click",switchmin)

let idTarget

const gameInfo = [
    {
        name:'gta5',
        card: {rec: '1', min : '2',},
        processor: {rec: '',min: ''},
        access:{rec: '', min: ''},
        motherBoard: {rec: '', min: ''},
        ssd:{rec:'',min:''},
        powerUnit: {rec: '',min:''},
        body: {rec: '',min:''},
        productiveRec: {low: '300 FPS', medium: '200 FPS', high: '100 FPS',max: '30 FPS'},
        productiveMin: {low: '100 FPS', medium: '80 FPS', high: '50 FPS',max: '20 FPS'},
        titleName: 'Grand Theft Auto V',
        img: 'https://i.playground.ru/p/axyE4V_QXmwLFJUJ05q7uQ.jpeg',
        gameText:'Grand Theft Auto V — это не просто игра, это живая платформа. Несмотря на возраст, благодаря гениальной работе Rockstar и невероятному сообществу моддеров, Лос-Сантос продолжает удивлять. Сегодня в GTA V можно увидеть то, о чем мы не могли и мечтать в 2015 году: фотореалистичные графические моды, дополнения с машинами и оружием нового поколения, полный перезапуск физики и масштабные ролевые проекты.',
    },
    {
        name:'gta6',
        card: {rec: '3', min : '4',},
        processor: {rec: '',min: ''},
        access:{rec: '', min: ''},
        motherBoard: {rec: '', min: ''},
        ssd:{rec:'',min:''},
        powerUnit: {rec: '',min:''},
        body: {rec: '',min:''},
        productiveRec: {low: '300 FPS', medium: '200 FPS', high: '100 FPS',max: '30 FPS'},
        productiveMin: {low: '100 FPS', medium: '80 FPS', high: '50 FPS',max: '20 FPS'},
        titleName: 'Grand Theft Auto 6',
        img: 'https://i.ytimg.com/vi/REP0dcYFP9Q/maxresdefault.jpg',
        gameText:'Grand Theft Auto VI игра в жанре action-adventure с открытым миром, разрабатываемая компанией Rockstar Games. Станет шестнадцатой по счёту и восьмой крупной игрой в серии Grand Theft Auto. ',
    },
]
function switchmin(){
    setTimeout(() => {
        ModalWin.querySelector(".img_choice_min").style.opacity = "1"
        ModalWin.querySelector(".img_choice_rec").style.opacity = "0"
    },10)
    const gameInfoObject = gameInfo.find((item) => item.name === idTarget);
    ModalWin.querySelector('.card').textContent = gameInfoObject.card.min
    ModalWin.querySelector('.productivityLow').textContent = gameInfoObject.productiveMin.low
    ModalWin.querySelector('.productivityMedium').textContent = gameInfoObject.productiveMin.medium
    ModalWin.querySelector('.productivityHigh').textContent = gameInfoObject.productiveMin.high
    ModalWin.querySelector('.productivityMax').textContent = gameInfoObject.productiveMin.max
}
function switchmax(){
    setTimeout(() => {
        ModalWin.querySelector(".img_choice_min").style.opacity = "0"
        ModalWin.querySelector(".img_choice_rec").style.opacity = "1"
    },10)
    const gameInfoObject = gameInfo.find((item) => item.name === idTarget);
    console.log(gameInfoObject);
    ModalWin.querySelector('.card').textContent = gameInfoObject.card.rec
    ModalWin.querySelector('.productivityLow').textContent = gameInfoObject.productiveRec.low
    ModalWin.querySelector('.productivityMedium').textContent = gameInfoObject.productiveRec.medium
    ModalWin.querySelector('.productivityHigh').textContent = gameInfoObject.productiveRec.high
    ModalWin.querySelector('.productivityMax').textContent = gameInfoObject.productiveRec.max

}

CloseModalBtn.addEventListener("click",CloseModal)
function CloseModal(){
    ModalWinMain.style.scale = "0.3"
    ModalWin.style.opacity = "0.1"
    setTimeout(() => {
        ModalWin.style.display = "none"
    }, 200);
    document.documentElement.style.overflow = 'auto'
}




// slider
const allSliders = [];

// Функция создания слайдера
function createSlider(gameBlock) {
    const sliderData = {
        container: gameBlock,
        slider: gameBlock.querySelector('.game_screen_slaider'),
        slides: gameBlock.querySelectorAll('.game_screen_slaider img'),
        prevBtn: gameBlock.querySelector('.prev_btn'),
        nextBtn: gameBlock.querySelector('.next_btn'),
        openModalBtn: gameBlock.querySelector('.open_modal'),
        currentSlide: 0,
        autoPlayInterval: null,
        isAutoPlaying: true
    };
    function openModalWin(){
        ModalWin.style.display = 'block'
        document.documentElement.style.overflow = 'hidden'
        setTimeout(() => {
            ModalWinMain.style.scale = '1'
            ModalWin.style.opacity = '1'
        },20);
    }
    
    // Функции для этого слайдера
    function nextSlide() {
        sliderData.currentSlide++;  
        if (sliderData.currentSlide >= sliderData.slides.length) 
            {sliderData.currentSlide = 0;}
        updateSlider();
        resetAutoPlay();
    }
    
    function prevSlide() {
        sliderData.currentSlide--;
        if (sliderData.currentSlide < 0) 
            {sliderData.currentSlide = sliderData.slides.length - 1;}
        updateSlider();
        resetAutoPlay();
    }
    
    function updateSlider() {
        sliderData.slider.style.transform = `translateX(-${sliderData.currentSlide * 100}%)`;
    }
    
    function startAutoPlay() {
        if (sliderData.autoPlayInterval) {
            clearInterval(sliderData.autoPlayInterval);
        }
        sliderData.autoPlayInterval = setInterval(nextSlide, 3000);
        sliderData.isAutoPlaying = true;
    }
    
    function resetAutoPlay() {
        if (sliderData.isAutoPlaying) {
            clearInterval(sliderData.autoPlayInterval);
            startAutoPlay();
        }
    }
    
    sliderData.prevBtn.addEventListener('click', prevSlide);
    sliderData.nextBtn.addEventListener('click', nextSlide);
    
    sliderData.openModalBtn.addEventListener('click', openModalWin);
    sliderData.openModalBtn.addEventListener('click', function ltarget(e){
            idTarget = e.target.id
            console.log(idTarget);
            const gameInfoObject = gameInfo.find((item) => item.name === idTarget);
            ModalWin.querySelector('.game_text').textContent = gameInfoObject.gameText
            ModalWin.querySelector('.img_game').src = gameInfoObject.img
            switchmax()
        });
        
    
    // Пауза при наведении
    sliderData.container.addEventListener('mouseenter', () => {
        if (sliderData.isAutoPlaying) {
            clearInterval(sliderData.autoPlayInterval);
        }
    });
    
    sliderData.container.addEventListener('mouseleave', () => {
        if (sliderData.isAutoPlaying) {
            startAutoPlay();
        }
    });
    
    startAutoPlay();
    
    allSliders.push(sliderData);
}

document.querySelectorAll('.game').forEach(gameBlock => {
    createSlider(gameBlock);
});

console.log(`Создано слайдеров: ${allSliders.length}`);