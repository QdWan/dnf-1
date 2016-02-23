﻿//=================================================================================================================
//※ 변수 지정
//=================================================================================================================
//임시 변수
var i, j, k, temp, temp2, temp3;
var tempArr=[];
var autoDrop;//자동 - 아이템 출력
var autoRun; //자동 - 실행
var running = 0; //"자동 실행 중" 표시 (1 : 연속 실행, 2: 탐색 시작)

var	images = "./images/hell/";
var imageList = []; //이미지 선로딩용 임시저장소

//입력용 변수
var input = [//확률 계산 시 사용
	,//[0] : 던전 종류 (0~7 : '시간의 문' / 8~11 : '파워스테이션' / 12~17 : '죽은 자의 성')
	,//[1] : 던전 난이도
	,//[2] : 지옥파티 난이도
	,//[3] : 아이템 등급
	,//[4] : 에픽 고유 여부 (대상 던전 : 0~11)
	,//[5] : 에픽 부위
	//[6] : 레벨 보정 (일반 장비)
];
var objective = [//탐색 목표
	"",//명칭
	"",//조건 1
	"",//조건 2
	"",//조건 3
	""//조건 4 (최대치)
];
var icon = [//아이콘 표기 시 사용
	[],//[0] : 개별 아이템 아이콘
	[],//[1] : 종류 아이콘
	[] //[2] : 등급 아이콘
];
var goyuList = [];//고유 에픽 리스트

var currentList = [];//구축용 : 레벨별 에픽 리스트
var currentList_level = []//구축용 : 해당 지역의 '특정 레벨' 아이템 수량
var currentList_goyu = [];//구축용 : 현재 지역 고유에픽 리스트


//저장용 변수
var count = 1; //회차
var cost = [0,0];//초대장 ([0] : 전체 / [1] : 실질)
var gold = 0;//골드 환산 (도전장 시세)
var get = [0,0,0,0,0,0];//획득 ([0] : 획득 에픽 / [1] : 보유 에픽 / [2] : 획득 코소 / [3] : 보유 코소 / [4] : 획득 지옥구슬 / [5] : 획득 초대장)
var collect = 0;//현재 수집된 장비 수
var maxQuantity = 0;//최대 드랍 가능 아이템 수

//기타 변수
var thisTime = [];//이번에 드랍한 에픽템
var right_display = "";//우측 출력


//=================================================================================================================
//※ DOM 변수에 할당 (앞에 '_'를 붙임)
//=================================================================================================================
//frame_left
var _dungeon = document.getElementById('dungeon');
	var _dungeon_level = document.getElementById('dungeon_level');
	var _dungeon_cost = document.getElementById('dungeon_cost');
var _difficulty = document.getElementById('difficulty');	
var _run1 = document.getElementById('run1');
var _run2 = document.getElementById('run2');
var _objective = document.getElementById('objective');
var _objective_list = document.getElementById('objective_list');
	var _objective_none = document.getElementById('objective_none');
	var _objective_item = document.getElementById('objective_item');
		var _objective_item_first = document.getElementById('objective_item_first');
		var _objective_item_second = document.getElementById('objective_item_second');
		var _objective_item_third = document.getElementById('objective_item_third');
		var _objective_item_name = document.getElementById('objective_item_name');
	var _objective_set = document.getElementById('objective_set');
		var _objective_set_first = document.getElementById('objective_set_first');
		var _objective_set_name = document.getElementById('objective_set_name');
	var _objective_count = document.getElementById('objective_count');
		var _objective_count_text = document.getElementById('objective_count_text');
	var _objective_cost = document.getElementById('objective_cost');
		var _objective_cost_text = document.getElementById('objective_cost_text');
	var _objective_fatigue = document.getElementById('objective_fatigue');
		var _objective_fatigue_max = document.getElementById('objective_fatigue_max');
		var _objective_fatigue_per = document.getElementById('objective_fatigue_per');
var _difficulty = document.getElementById('difficulty');
var _channel = document.getElementById('channel');
var _clear = document.getElementById('clear');


//frame_center
var _frame_center_title = document.getElementById('frame_center_title');
var _message = document.getElementById('message');
	var _message_count = document.getElementById('message_count');
	var _message_difficulty = document.getElementById('message_difficulty');
var _show = document.getElementById('show');
	var _show_display = document.getElementById('show_display');
var _result = document.getElementById('result');
	var _result_epic = document.getElementById('result_epic');
	var _result_epic_real = document.getElementById('result_epic_real');
	var _result_soul = document.getElementById('result_soul');
	var _result_beed = document.getElementById('result_beed');
var _cost_invitation = document.getElementById('cost_invitation');
var _cost_real = document.getElementById('cost_real');
var _cost_gold = document.getElementById('cost_gold');
var _cost_gold_real = document.getElementById('cost_gold_real');
var _cost_set_gold = document.getElementById('cost_set_gold');


//frame_right
var _frame_right_title = document.getElementById('frame_right_title');

var _record_filter = document.getElementById('record_filter');
	var _record_filter_first = document.getElementById('record_filter_first');
	var _record_filter_second = document.getElementById('record_filter_second');
	var _record_filter_third = document.getElementById('record_filter_third');
	var _record_filter_level = document.getElementById('record_filter_level');
	var _record_filter_clear = document.getElementById('record_filter_clear');
var _inventory_filter = document.getElementById('inventory_filter');
	var _inventory_filter_first = document.getElementById('inventory_filter_first');
	var _inventory_filter_second = document.getElementById('inventory_filter_second');
	var _inventory_filter_third = document.getElementById('inventory_filter_third');
	var _inventory_filter_level = document.getElementById('inventory_filter_level');
	var _inventory_filter_clear = document.getElementById('inventory_filter_clear');
var _set_filter = document.getElementById('set_filter');
	var _set_filter_first = document.getElementById('set_filter_first');
	var _set_filter_second = document.getElementById('set_filter_second');
	var _set_filter_third = document.getElementById('set_filter_third');
	var _set_filter_level = document.getElementById('set_filter_level');
	var _set_filter_clear = document.getElementById('set_filter_clear');
	
var _record = document.getElementById('record');
var _inventory = document.getElementById('inventory');
	var _inventory_display = document.getElementById('inventory_display');
	var _inventory_table = document.getElementById('inventory_table');
var _set = document.getElementById('set');
	var _set_display = document.getElementById('set_display');
	var _set_table = document.getElementById('set_table');
	
var _record_check = document.getElementById('record_check');
	var _record_check_cost = document.getElementById('record_check_cost');
	var _record_check_difficulty = document.getElementById('record_check_difficulty');
	var _record_check_quantity = document.getElementById('record_check_quantity');
	var _record_check_reset = document.getElementById('record_check_reset');
var _inventory_check = document.getElementById('inventory_check');
	var _inventory_check_confirm = document.getElementById('inventory_check_confirm');
	var _inventory_check_cost = document.getElementById('inventory_check_cost');
	var _inventory_check_all = document.getElementById('inventory_check_all');
	var _inventory_check_collect = document.getElementById('inventory_check_collect');
var _set_check = document.getElementById('set_check');
	var _set_check_confirm = document.getElementById('set_check_confirm');
	var _set_check_cost = document.getElementById('set_check_cost');
	var _set_check_all = document.getElementById('set_check_all');
	var _set_check_only = document.getElementById('set_check_only');
var _disassemble_1 = document.getElementById('disassemble_1');
var _disassemble_2 = document.getElementById('disassemble_2');

var _shift1 = document.getElementById('shift1');
var _shift2 = document.getElementById('shift2');
var _shift3 = document.getElementById('shift3');


//etc
var _cover =  document.getElementById('cover');
var _cover_notice =  document.getElementById('cover_notice');
var _imagePreloader = document.getElementById('imagePreloader');
	
//=================================================================================================================
//※ 자료
//=================================================================================================================
	//던전 정보
var areaList = [//던전별 지역 명칭
	"시간의 문",//[0] : 대화재
	"시간의 문",//[1] :전염병
	"시간의 문",//[2] :카르텔
	"시간의 문",//[3] :검은 성전
	"시간의 문",//[4] :극비구역
	"시간의 문",//[5] :옛 비명굴
	"시간의 문",//[6] :태동
	"시간의 문",//[7] :자각
	
	"파워스테이션",//[8] :코레 발전수
	"파워스테이션",//[9] :푸르츠 발전소
	"파워스테이션",//[10] :트롬베 발전소
	"파워스테이션",//[11] :그란디네 발전소
	
	"죽은 자의 성",//[12] :매달린 망루
	"죽은 자의 성",//[13] :루크린제
	"죽은 자의 성",//[14] :강철의 브라키움
	"죽은 자의 성",//[15] :샐러맨더의 화로
	"죽은 자의 성"//[16] :빛의 연회장
]
var levelList = [//던전별 드랍 레벨
	[70, 75],//[0] : 대화재
	[70, 75],//[1] : 전염병
	[70, 75],//[2] : 카르텔
	[70, 75],//[3] : 검은 성전
	[70, 75],//[4] : 극비구역
	[75, 80],//[5] : 옛 비명굴
	[75, 80],//[6] : 태동
	[75, 80],//[7] : 자각
	
	[75, 80, 85],//[8] : 코레 발전소
	[80, 85],//[9] : 푸르츠 발전소
	[80, 85],//[10] : 트롬베 발전소
	[80, 85],//[11] : 그란디네 발전소
	
	[80, 85],//[12] : 매달린 망루
	[80, 85],//[13] : 루크린제
	[80, 85],//[14] : 강철의 브라키움
	[80, 85],//[15] : 샐러맨더의 화로
	[80, 85]//[16] : 빛의 연회장
];
var costList = [//던전별 드랍 레벨
	20,//[0] : 대화재
	20,//[1] : 전염병
	20,//[2] : 카르텔
	21,//[3] : 검은 성전
	21,//[4] : 극비구역
	22,//[5] : 옛 비명굴
	22,//[6] : 태동
	22,//[7] : 자각
	
	23,//[8] : 코레 발전소
	24,//[9] : 푸르츠 발전소
	24,//[10] : 트롬베 발전소
	24,//[11] : 그란디네 발전소
	
	26,//[12] : 매달린 망루
	26,//[13] : 루크린제
	26,//[14] : 강철의 브라키움
	26,//[15] : 샐러맨더의 화로
	26//[16] : 빛의 연회장
];
var cutList = [//던전별 실질 소모 초대장 감소, 에픽 해체
	20,//[0] : 코스모소울
	[//[1] : 지옥구슬
		//시간의 문
		400,//[0] : 대화재
		400,//[1] : 전염병
		400,//[2] : 카르텔
		400,//[3] : 검은성전
		400,//[4] : 극비구역
		400,//[5] : 옛비명굴
		400,//[6] : 태동
		400,//[7] : 자각
		//파워스테이션
		450,//[8] : 코레 발전소
		450,//[9] : 푸르츠 발전소
		450,//[10] : 트롬베 발전소
		450,//[11] : 그란디네 발전소
		//죽은 자의 성
		500,//[12] : 매달린 망루
		500,//[13] : 루크린제
		500,//[14] : 강철의 브라키움
		500,//[15] : 샐러맨더의 화로
		500//[16] : 빛의 연회장
	],
	[//[2] : 에픽 해체 - 초대장으로 변환
		[60,80],
		[65,80],
		[70,100],
		[75,100],
		[80,120],
		[85,120]
	],
	[//[3] : 에픽 해체 - 코스모소울로 변환
		[60,4],
		[65,4],
		[70,5],
		[75,5],
		[80,6],
		[85,6]
	]
		
		
];

	//확률_수치
var chanceList_num = [
	[//[0] : 난이도
	0.4,//어려움
	0.6//매우 어려움
	],
	[//[1] : 지옥파티 & 던전난이도별 드랍률 (아이템 개별)
		//Part 1. 지옥파티 난이도
		[//[1][0] : 어려움 드랍률
			//Part 2. 던전 난이도
			[//[1][0][0] : 노멀 어려움 드랍률
				0.9714,//마봉
				0.0075,//에픽
				0.0208,//코스모소울
				0.0003//지옥구슬
			],
			[//[1][0][1] : 익스 어려움 드랍률
				0.96755,//마봉
				0.0075,//에픽
				0.0245,//코스모소울
				0.00045//지옥구슬
			],
			[//[1][0][2] : 마스터 어려움 드랍률
				0.9632,//마봉
				0.0075,//에픽
				0.0287,//코스모소울
				0.0006//지옥구슬
			],
			[//[1][0][3] : 킹 어려움 드랍률
				0.95895,//마봉
				0.0075,//에픽
				0.0328,//코스모소울
				0.00075//지옥구슬
			],
			[//[1][0][4] : 슬레 어려움 드랍률
				0.95445,//마봉
				0.0075,//에픽
				0.037,//코스모소울
				0.00105//지옥구슬
			]
		],
		[//[1][1] : 매우어려움 드랍률
			[//[1][1][0] : 노멀 매우어려움 드랍률
				0.97605,//마봉
				0.01,//에픽
				0.0138,//코스모소울
				0.00015//지옥구슬
			],
			[//[1][1][1] : 익스 매우어려움 드랍률
				0.9732,//마봉
				0.01,//에픽
				0.0165,//코스모소울
				0.0003//지옥구슬
			],
			[//[1][1][2] : 마스터 매우어려움 드랍률
				0.97025,//마봉
				0.01,//에픽
				0.0193,//코스모소울
				0.00045//지옥구슬
			],
			[//[1][1][3] : 킹 매우어려움 드랍률
				0.96746,//마봉
				0.01,//에픽
				0.022,//코스모소울
				0.00054//지옥구슬
			],
			[//[1][1][4] : 슬레 매우어려움 드랍률
				0.966525,//마봉
				0.01,//에픽
				0.0228,//코스모소울
				0.000675//지옥구슬
			]
		]
	],
	[//[2] : 고유 에픽 드랍률
		0.995,//일반 에픽
		0.005//고유 에픽
	],
	[//[3] : 아이템 부위별 드랍률
		45,//무기(15)
		36,//방어구(6)
		6,//장신구(1)
		13//특수장비(2)
	],
	[//[4] : 지역 별 레벨 가중치
		[
			[//카테고리 1-1 : 파워스테이션 (코레 제외)
				9,10,11
			],
			[//카테고리 1-2 : 해당 레벨
			60,//80제
			40//85제
			]
		],
		[
			[//카테고리 1-1 : 죽은자의 성
				12,13,14,15,16
			],
			[//카테고리 1-2 : 해당 레벨
			55,//80제
			45//85제
			]
		]
	]
];

	//"기본" 확률_수치
var chanceList_num_default = [
	[//[0] : 난이도
	0.4,//어려움
	0.6//매우 어려움
	],
	[//[1] : 지옥파티 & 던전난이도별 드랍률 (아이템 개별)
		//Part 1. 지옥파티 난이도
		[//[1][0] : 어려움 드랍률
			//Part 2. 던전 난이도
			[//[1][0][0] : 노멀 어려움 드랍률
				0.9714,//마봉
				0.0075,//에픽
				0.0208,//코스모소울
				0.0003//지옥구슬
			],
			[//[1][0][1] : 익스 어려움 드랍률
				0.96755,//마봉
				0.0075,//에픽
				0.0245,//코스모소울
				0.00045//지옥구슬
			],
			[//[1][0][2] : 마스터 어려움 드랍률
				0.9632,//마봉
				0.0075,//에픽
				0.0287,//코스모소울
				0.0006//지옥구슬
			],
			[//[1][0][3] : 킹 어려움 드랍률
				0.95895,//마봉
				0.0075,//에픽
				0.0328,//코스모소울
				0.00075//지옥구슬
			],
			[//[1][0][4] : 슬레 어려움 드랍률
				0.95445,//마봉
				0.0075,//에픽
				0.037,//코스모소울
				0.00105//지옥구슬
			]
		],
		[//[1][1] : 매우어려움 드랍률
			[//[1][1][0] : 노멀 매우어려움 드랍률
				0.97605,//마봉
				0.01,//에픽
				0.0138,//코스모소울
				0.00015//지옥구슬
			],
			[//[1][1][1] : 익스 매우어려움 드랍률
				0.9732,//마봉
				0.01,//에픽
				0.0165,//코스모소울
				0.0003//지옥구슬
			],
			[//[1][1][2] : 마스터 매우어려움 드랍률
				0.97025,//마봉
				0.01,//에픽
				0.0193,//코스모소울
				0.00045//지옥구슬
			],
			[//[1][1][3] : 킹 매우어려움 드랍률
				0.96746,//마봉
				0.01,//에픽
				0.022,//코스모소울
				0.00054//지옥구슬
			],
			[//[1][1][4] : 슬레 매우어려움 드랍률
				0.966525,//마봉
				0.01,//에픽
				0.0228,//코스모소울
				0.000675//지옥구슬
			]
		]
	],
	[//[2] : 고유 에픽 드랍률
		0.995,//일반 에픽
		0.005//고유 에픽
	],
	[//[3] : 아이템 부위별 드랍률
		45,//무기(15)
		36,//방어구(6)
		6,//장신구(1)
		13//특수장비(2)
	],
	[//[4] : 지역 별 레벨 가중치
		[
			[//카테고리 1-1 : 파워스테이션 (코레 제외)
				9,10,11
			],
			[//카테고리 1-2 : 해당 레벨
			60,//80제
			40//85제
			]
		],
		[
			[//카테고리 1-1 : 죽은자의 성
				12,13,14,15,16
			],
			[//카테고리 1-2 : 해당 레벨
			55,//80제
			45//85제
			]
		]
	]
];

	//확률_명칭
var chanceList_name = [
	[//[0] : 난이도
		"어려움",//[0][0]
		"매우 어려움"//[0][1]
	],
	[//[1] : 난이도별 드랍률 (아이템 개별)
		//Part 1. 지옥파티 난이도
		[//[1][0] : 어려움 드랍률
			//Part 2. 던전 난이도
			[//[1][0][0] : 노멀 어려움 드랍률
				"마봉",
				"에픽",
				"코스모소울",
				"지옥구슬"
			],
			[//[1][0][1] : 익스 어려움 드랍률
				"마봉",
				"에픽",
				"코스모소울",
				"지옥구슬"
			],
			[//[1][0][2] : 마스터 어려움 드랍률
				"마봉",
				"에픽",
				"코스모소울",
				"지옥구슬"
			],
			[//[1][0][3] : 킹 어려움 드랍률
				"마봉",
				"에픽",
				"코스모소울",
				"지옥구슬"
			],
			[//[1][0][4] : 슬레 어려움 드랍률
				"마봉",
				"에픽",
				"코스모소울",
				"지옥구슬"
			]
		],
		[//[1][1] : 매우어려움 드랍률
			[//[1][1][0] : 노멀 매우어려움 드랍률
				"마봉",
				"에픽",
				"코스모소울",
				"지옥구슬"
			],
			[//[1][1][1] : 익스 매우어려움 드랍률
				"마봉",
				"에픽",
				"코스모소울",
				"지옥구슬"
			],
			[//[1][1][2] : 마스터 매우어려움 드랍률
				"마봉",
				"에픽",
				"코스모소울",
				"지옥구슬"
			],
			[//[1][1][3] : 킹 매우어려움 드랍률
				"마봉",
				"에픽",
				"코스모소울",
				"지옥구슬"
			],
			[//[1][1][4] : 슬레 매우어려움 드랍률
				"마봉",
				"에픽",
				"코스모소울",
				"지옥구슬"
			]
		]
	],
	[//[2] : 고유 에픽 드랍률
		"일반에픽",
		"고유에픽"
	],
	[//[3] : 아이템 부위별 드랍률
		"무기",
		"방어구",
		"악세서리",
		"특수장비"
	],
	[//[4] : 지역 별 레벨 가중치
		[
			[//카테고리 1-1 : 파워스테이션 (코레 제외)
				9,10,11
			],
			[//카테고리 1-2 : 해당 레벨
			80,
			85
			]
		],
		[
			[//카테고리 1-1 : 죽은자의 성
				12,13,14,15,16
			],
			[//카테고리 1-2 : 해당 레벨
			80,
			85
			]
		]
	]
];

	//드랍 정보
var dropQuantityList = [
	[//장비 드랍 (지옥파티 난이도별)
		4,//어려움
		6//매우 어려움
	],
	[//조각 드랍 (던전 난이도별)
		5,//노멀
		6,//익스퍼트
		8,//마스터
		9,//킹
		10//슬레이어
	],
	[//초대장 드랍 (던전 난이도별)
		[0,0,1,1,2,3,4,5],//노멀
		[0,0,1,2,2,3,4,5],//익스퍼트
		[0,0,1,2,3,3,4,5],//마스터
		[0,0,1,2,3,4,4,5],//킹
		[0,0,1,2,3,4,5,5]//슬레이어
	]
]
	//코스모소울 비용 정보
var soulCostList = [
	[70,35],
	[75,40],
	[80,45],
	[85,50]
]

	//장비 부위 리스트 (차후에 자동으로 입력됨)
var equipList = [];

var gradeList = [
	"마봉","에픽"
];