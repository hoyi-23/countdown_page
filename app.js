const countdown = () => {
    const countDate = new Date(2030, 1, 1).getTime();
    const now = new Date().getTime(); //curret Time
    const gap = countDate - now; //取得目標時間與現在的數值差距

    //getTime取的數值是以毫秒計算

    const second = 1000; //1000毫秒=1秒
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    //計算gap
    //Math.floor() 函式會回傳小於(等於)所給數字的最大整數。
    const textDay = Math.floor(gap / day);
    // % 會給出餘數
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSecond;
};

//讓時間會自動更改，使用setInterval讓他每一秒都執行一次
setInterval(countdown,1000);