const artifactSlots = [
    {
        id: "꽃",
        name: "꽃",
        image: "img/artifact/꽃.webp"
    },
    {
        id: "깃털",
        name: "깃털",
        image: "img/artifact/깃털.webp"
    },
    {
        id: "시계",
        name: "시계",
        image: "img/artifact/시계.webp"
    },
    {
        id: "성배",
        name: "성배",
        image: "img/artifact/성배.webp"
    },
    {
        id: "왕관",
        name: "왕관",
        image: "img/artifact/왕관.webp"
    }
];

const artifacts = [
    {
        id: "검투사",
        name: "검투사의 피날레",
        image: "img/artifact/검투사.webp",

        twoPiece: {
            stat: "ATK",
            value: 18,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
	{
        id: "악단",
        name: "대지를 유랑하는 악단",
        image: "img/artifact/악단.webp",

        twoPiece: {
            stat: "EM",
            value: 80,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
	{
        id: "번분",
        name: "번개 같은 분노",
        image: "img/artifact/번분.webp",

        twoPiece: {
            stat: "ElectroDMG",
            value: 15,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
	{
        id: "뇌명",
        name: "뇌명을 평정한 존자",
        image: "img/artifact/뇌명.webp",

        twoPiece: {
            stat: null,
            value: null,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
	{
        id: "청록",
        name: "청록색 그림자",
        image: "img/artifact/청록.webp",

        twoPiece: {
            stat: "AnemoDMG",
            value: 15,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
	{
        id: "소녀",
        name: "사랑받는 소녀",
        image: "img/artifact/소녀.webp",

        twoPiece: {
            stat: "HR",
            value: 15,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
	{
        id: "반암",
        name: "유구한 반암",
        image: "img/artifact/반암.webp",

        twoPiece: {
            stat: "GeoDMG",
            value: 15,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
	{
        id: "유성",
        name: "날아오르는 유성",
        image: "img/artifact/유성.webp",

        twoPiece: {
            stat: null,
            value: null,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
	{
        id: "화염마녀",
        name: "불타오르는 화염의 마녀",
        image: "img/artifact/화염마녀.webp",

        twoPiece: {
            stat: "PyroDMG",
            value: 15,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
	{
        id: "현인",
        name: "불 위를 걷는 현인",
        image: "img/artifact/현인.webp",

        twoPiece: {
            stat: null,
            value: null,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
	{
        id: "기사도",
        name: "피메 물든 기사도",
        image: "img/artifact/기사도.webp",

        twoPiece: {
            stat: "PhysDMG",
            value: 25,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
	{
        id: "왕실",
        name: "옛 왕실의 의식",
        image: "img/artifact/왕실.webp",

        twoPiece: {
            stat: null,
            value: null,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
	{
        id: "얼음용사",
        name: "얼음바람 속에서 길잃은 용사",
        image: "img/artifact/얼음용사.webp",

        twoPiece: {
            stat: "CryoDMG",
            value: 15,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
	{
        id: "몰락",
        name: "몰락한 마음",
        image: "img/artifact/몰락.webp",

        twoPiece: {
            stat: "HydroDMG",
            value: 15,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
	{
        id: "천암",
        name: "견고한 천암",
        image: "img/artifact/천암.webp",

        twoPiece: {
            stat: "HP",
            value: 20,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
	{
        id: "창백",
        name: "창백의 화염",
        image: "img/artifact/창백.webp",

        twoPiece: {
            stat: "PhysDMG",
            value: 25,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
	{
        id: "시메나와",
        name: "추억의 시메나와",
        image: "img/artifact/시메나와.webp",

        twoPiece: {
            stat: "ATK",
            value: 18,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
	{
        id: "절연",
        name: "절연의 기치",
        image: "img/artifact/절연.webp",

        twoPiece: {
            stat: "ER",
            value: 20,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
	{
        id: "조개",
        name: "바다에 물든 거대 조개",
        image: "img/artifact/조개.webp",

        twoPiece: {
            stat: "HR",
            value: 15,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
	{
        id: "껌데기",
        name: "풍요로운 꿈의 껍데기",
        image: "img/artifact/껍데기.webp",

        twoPiece: {
            stat: "DEF",
            value: 30,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
	{
        id: "진사",
        name: "진사 왕생록",
        image: "img/artifact/진사.webp",

        twoPiece: {
            stat: "ATK",
            value: 18,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
	{
        id: "제사",
        name: "제사의 여운",
        image: "img/artifact/제사.webp",

        twoPiece: {
            stat: "ATK",
            value: 18,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
	{
        id: "숲기",
        name: "숲의 기억",
        image: "img/artifact/숲기.webp",

        twoPiece: {
            stat: "DendroDMG",
            value: 15,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
	{
        id: "도금",
        name: "도금된 꿈",
        image: "img/artifact/도금.webp",

        twoPiece: {
            stat: "EM",
            value: 80,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
	{
        id: "누각",
        name: "모래 위 누각의 역사",
        image: "img/artifact/누각.webp",

        twoPiece: {
            stat: "AnemoDMG",
            value: 15,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
	{
        id: "낙원",
        name: "잃어버린 낙원의 꽃",
        image: "img/artifact/낙원.webp",

        twoPiece: {
            stat: "EM",
            value: 80,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
	{
        id: "님프",
        name: "님프의 꿈",
        image: "img/artifact/님프.webp",

        twoPiece: {
            stat: "HydroDMG",
            value: 15,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
	{
        id: "감로",
        name: "감로빛 꽃바다",
        image: "img/artifact/감로.webp",

        twoPiece: {
            stat: "HP",
            value: 20,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
	{
        id: "그림자",
        name: "그림자 사냥꾼",
        image: "img/artifact/그림자.webp",

        twoPiece: {
            stat: null,
            value: null,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
	{
        id: "극단",
        name: "황금 극단",
        image: "img/artifact/극단.webp",

        twoPiece: {
            stat: null,
            value: null,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
	{
        id: "노래",
        name: "지난날의 노래",
        image: "img/artifact/노래.webp",

        twoPiece: {
            stat: "HR",
            value: 15,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
	{
        id: "야화",
        name: "메아리숲의 야화",
        image: "img/artifact/야화.webp",

        twoPiece: {
            stat: "ATK",
            value: 18,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
	{
        id: "공상",
        name: "조화로운 공상의 단편",
        image: "img/artifact/공상.webp",

        twoPiece: {
            stat: "ATK",
            value: 18,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
	{
        id: "몽상",
        name: "미완의 몽상",
        image: "img/artifact/몽상.webp",

        twoPiece: {
            stat: "ATK",
            value: 18,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
	{
        id: "잿더미",
        name: "잿더미성 용사의 두루마리",
        image: "img/artifact/잿더미.webp",

        twoPiece: {
            stat: null,
            value: null,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
	{
        id: "흑요석",
        name: "흑요석 비전",
        image: "img/artifact/흑요석.webp",

        twoPiece: {
            stat: null,
            value: null,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
	{
        id: "맹세",
        name: "긴 밤의 맹세",
        image: "img/artifact/맹세.webp",

        twoPiece: {
            stat: null,
            value: null,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
	{
        id: "회랑",
        name: "깊은 회랑의 피날레",
        image: "img/artifact/회랑.webp",

        twoPiece: {
            stat: "CryoDMG",
            value: 15,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
	{
        id: "경계",
        name: "하늘 경계가 드러난 밤",
        image: "img/artifact/경계.webp",

        twoPiece: {
            stat: "EM",
            value: 80,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
	{
        id: "밤노래",
        name: "달을 엮는 밤노래",
        image: "img/artifact/밤노래.webp",

        twoPiece: {
            stat: "ER",
            value: 20,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
	{
        id: "여명",
        name: "샛별과 달의 여명",
        image: "img/artifact/여명.webp",

        twoPiece: {
            stat: "EM",
            value: 80,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
	{
        id: "바람",
        name: "바람이 시작되는 날",
        image: "img/artifact/바람.webp",

        twoPiece: {
            stat: "ATK",
            value: 18,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
	{
        id: "은총",
        name: "하늘의 은총",
        image: "img/artifact/은총.webp",

        twoPiece: {
            stat: "ER",
            value: 20,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
	{
        id: "산산",
        name: "그림자 속 산산조각 난 꿈",
        image: "img/artifact/산산.webp",

        twoPiece: {
            stat: "ATK",
            value: 18,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
	{
        id: "증표",
        name: "핏빛 증표",
        image: "img/artifact/증표.webp",

        twoPiece: {
            stat: "ATK",
            value: 18,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
	{
        id: "용광로",
        name: "용광로가 빚은 심장",
        image: "img/artifact/용광로.webp",

        twoPiece: {
            stat: "ATK",
            value: 18,
        },
		
		fourPiece: {
            stat: null,
            value: null,
            condition: null,
        },
    },
]
	
	
	