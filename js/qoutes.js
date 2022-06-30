const quotes = [
    {
        quote:"자신의 부족한 점을 더 많이 부끄러워할 줄 아는 이는 더 존경받을 가치가 있는 사람이다.",
        author:"조지 버나드 쇼"
    },
    {
        quote:"자신을 내 보여라. 그러면 재능이 드러날 것이다.",
        author:"발타사르 그라시안"
    },
    {
        quote:`낮에 꿈꾸는 사람은 
                    밤에만 꿈꾸는 사람에게는 찾아오지 않는 많은 것을 알고 있다.`,
        author:"에드거 앨런 포"
    },
    {
        quote:`당신의 노력을 존중하라. 당신 자신을 존중하라. 자존감은 자제력을 낳는다. 
                                           이 둘을 모두 겸비하면, 진정한 힘을 갖게 된다.`,
        author:"클린트 이스트우드"
    },
    {
        quote:"노력 없이 쓰인 글은 대개 감흥 없이 읽힌다.",
        author:"사무엘 존슨"
    },
    {
        quote:"연은 순풍이 아니라 역풍에 가장 높이 난다.",
        author:"윈스턴 처칠"
    },
    {
        quote:"언제나 현재에 집중할 수 있다면 행복할 것이다.",
        author:"파울로 코엘료"
    },
    {
        quote:"명확히 설정된 목표가 없으면, 우리는 사소한 일상을 충실히 살다 결국 그 일상의 노예가 되고 만다.",
        author:"로버트 하인라인"
    },
    {
        quote:`뜻을 세운다는 것은 목표를 선택하고, 그 목표에 도달할 행동과정을 결정하고, 
                        그 목표에 도달할 때까지 결정한 행동을 계속하는 것이다. 중요한 것은 행동이다.`,
        author:"마이클 핸슨"
    },
    {
        quote:"친구를 얻는 방법은 친구에게 부탁을 들어달라고 하는 것이 아니라 내가 부탁을 들어주는 것이다.",
        author:"투키디데스"
    },
    {
        quote:"당신을 만나는 모든 사람이 당신과 헤어질 때는 더 나아지고 더 행복해질 수 있도록 하라.",
        author:"마더 테레사"
    },

]
//명언 11개

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)]
//랜덤값에 quotes의 길이를 곱해줌으로써 정수부분이 명언의 개수만큼 나온다

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;





//Math.random() => 0.0~1.0 까지 랜덤값
//Math.round() => 값 반올린
//Math.ceil() => 값 올림
//Math.floor() => 값 내림