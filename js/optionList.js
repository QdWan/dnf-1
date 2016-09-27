﻿
var optionList = [
	{
		"id":"s0001",
		"name":"힘 +$x",
		"point":1,
		"x":100
	}, 
	{
		"id":"s0002",
		"name":"지능 +$x",
		"point":1,
		"x":100
	}, 
	{
		"id":"s0003",
		"name":"체력 +$x",
		"point":1,
		"x":100
	}, 
	{
		"id":"s0004",
		"name":"정신력 +$x",
		"point":1,
		"x":100
	}, 
	{
		"id":"s0005",
		"name":"HPMAX +$x",
		"point":1,
		"x":200
	}, 
	{
		"id":"s0006",
		"name":"MPMAX +$x",
		"point":1,
		"x":200
	}, 
	{
		"id":"s0007",
		"name":"HP 1분당 $x 회복",
		"point":1,
		"x":20
	}, 
	{
		"id":"s0008",
		"name":"MP 1분당 $x 회복",
		"point":1,
		"x":20
	}, 
	{
		"id":"s0009",
		"name":"모든 상태변화 내성 +$x",
		"point":1,
		"x":10
	}, 
	{
		"id":"s0010",
		"name":"물리공격력 +$x",
		"point":5,
		"x":100
	}, 
	{
		"id":"s0011",
		"name":"물리방어력 +$x",
		"point":5,
		"x":100
	}, 
	{
		"id":"s0012",
		"name":"마법공격력 +$x",
		"point":5,
		"x":100
	}, 
	{
		"id":"s0013",
		"name":"마법방어력 +$x",
		"point":5,
		"x":100
	}, 
	{
		"id":"s0014",
		"name":"둑립공격력 +$x",
		"point":5,
		"x":150
	}, 
	{
		"id":"s0015",
		"name":"물리크리티컬 확률 +$x%",
		"point":2,
		"x":5
	}, 
	{
		"id":"s0016",
		"name":"물리크리티컬 공격력 +$x%",
		"point":10,
		"x":2
	}, 
	{
		"id":"s0017",
		"name":"마법크리티컬 확률 +$x%",
		"point":2,
		"x":5
	}, 
	{
		"id":"s0018",
		"name":"마법크리티컬 공격력 +$x%",
		"point":10,
		"x":2
	}, 
	{
		"id":"s0019",
		"name":"공격속도 +$x%",
		"point":2,
		"x":2
	}, 
	{
		"id":"s0020",
		"name":"이동속도 +$x%",
		"point":2,
		"x":2
	}, 
	{
		"id":"s0021",
		"name":"캐스팅속도 +$x%",
		"point":2,
		"x":2
	}, 
	{
		"id":"s0022",
		"name":"적중률 +$x%",
		"point":2,
		"x":2
	}, 
	{
		"id":"s0023",
		"name":"회피율 +$x%",
		"point":2,
		"x":2
	}, 
	{
		"id":"s0024",
		"name":"경직률 +$x",
		"point":2,
		"x":10
	}, 
	{
		"id":"s0025",
		"name":"점프력 +$x",
		"point":2,
		"x":10
	}, 
	{
		"id":"s0026",
		"name":"화속성저항 +$x",
		"point":1,
		"x":10
	}, 
	{
		"id":"s0027",
		"name":"수속성저항 +$x",
		"point":1,
		"x":10
	}, 
	{
		"id":"s0028",
		"name":"명속성저항 +$x",
		"point":1,
		"x":10
	}, 
	{
		"id":"s0029",
		"name":"암속성저항 +$x",
		"point":1,
		"x":10
	}, 
	{
		"id":"s0030",
		"name":"모든속성저항 +$x",
		"point":1,
		"x":10
	}, 
	{
		"id":"s0031",
		"name":"인벤토리 무게 한도 +$xkg",
		"point":1,
		"x":3
	}, 
	{
		"id":"s0032",
		"name":"3% 확률로 $x 피해의 파이어익스플로전 시전",
		"point":2,
		"x":100
	}, 
	{
		"id":"s0033",
		"name":"3% 확률로 $x 피해의 아이스니들 시전",
		"point":2,
		"x":100
	}, 
	{
		"id":"s0034",
		"name":"3% 확률로 $x 피해의 라이트닝볼트 시전",
		"point":2,
		"x":100
	}, 
	{
		"id":"s0035",
		"name":"3% 확률로 $x 피해의 다크썬더보트 시전",
		"point":2,
		"x":100
	}, 
	{
		"id":"s0036",
		"name":"$x% 확률로 적에게 감전 상태이상 부여",
		"point":2,
		"x":1
	}, 
	{
		"id":"s0037",
		"name":"$x% 확률로 적에게 출혈 상태이상 부여",
		"point":2,
		"x":1
	}, 
	{
		"id":"s0038",
		"name":"$x% 확률로 적에게 중독 상태이상 부여",
		"point":2,
		"x":1
	}, 
	{
		"id":"s0039",
		"name":"$x% 확률로 적에게 빙결 상태이상 부여",
		"point":2,
		"x":1
	}, 
	{
		"id":"s0040",
		"name":"$x% 확률로 적에게 저주 상태이상 부여",
		"point":2,
		"x":1
	}, 
	{
		"id":"s0041",
		"name":"감전 상태이상 적 공격시 피해 $x% 증가",
		"point":5,
		"x":10
	}, 
	{
		"id":"s0042",
		"name":"출혈 상태이상 적 공격시 피해 $x% 증가",
		"point":5,
		"x":10
	}, 
	{
		"id":"s0043",
		"name":"중독 상태이상 적 공격시 피해 $x% 증가",
		"point":5,
		"x":10
	}, 
	{
		"id":"s0044",
		"name":"빙결 상태이상 적 공격시 피해 $x% 증가",
		"point":5,
		"x":10
	}, 
	{
		"id":"s0045",
		"name":"저주 상태이상 적 공격시 피해 $x% 증가",
		"point":5,
		"x":10
	}, 
	{
		"id":"s0046",
		"name":"400px 주위 아군 힘 $x 증가",
		"point":2,
		"x":50
	}, 
	{
		"id":"s0047",
		"name":"400px 주위 아군 지능 $x 증가",
		"point":2,
		"x":50
	}, 
	{
		"id":"s0048",
		"name":"400px 주위 아군 체력 $x 증가",
		"point":2,
		"x":50
	}, 
	{
		"id":"s0049",
		"name":"400px 주위 아군 정신력 $x 증가",
		"point":2,
		"x":50
	}, 
	{
		"id":"s0050",
		"name":"화속성강화 +$x",
		"point":5,
		"x":5
	}, 
	{
		"id":"s0051",
		"name":"수속성강화 +$x",
		"point":5,
		"x":5
	}, 
	{
		"id":"s0052",
		"name":"명속성강화 +$x",
		"point":5,
		"x":5
	}, 
	{
		"id":"s0053",
		"name":"암속성강화 +$x",
		"point":5,
		"x":5
	}, 
	{
		"id":"s0054",
		"name":"모든속성강화 +$x",
		"point":5,
		"x":5
	}, 
	{
		"id":"s0055",
		"name":"500px 주위 적 화속성저항 $x 감소",
		"point":5,
		"x":5
	}, 
	{
		"id":"s0056",
		"name":"500px 주위 적 수속성저항 $x 감소",
		"point":5,
		"x":5
	}, 
	{
		"id":"s0057",
		"name":"500px 주위 적 명속성저항 $x 감소",
		"point":5,
		"x":5
	}, 
	{
		"id":"s0058",
		"name":"500px 주위 적 암속성저항 $x 감소",
		"point":5,
		"x":5
	}, 
	{
		"id":"s0059",
		"name":"500px 주위 적 모든속성저항 $x 감소",
		"point":5,
		"x":5
	}, 
	{
		"id":"s0060",
		"name":"공격력 +$x% 증가",
		"point":10,
		"x":5
	}, 
	{
		"id":"s0061",
		"name":"공격시 +$x% 추가 피해",
		"point":10,
		"x":5
	}, 
	{
		"id":"s0062",
		"name":"스킬공격력 +$x% 증가",
		"point":10,
		"x":5
	}, 
	{
		"id":"s0063",
		"name":"모든 15레벨 스킬 Lv. +$x",
		"point":10,
		"x":1
	}, 
	{
		"id":"s0064",
		"name":"모든 20레벨 스킬 Lv. +$x",
		"point":10,
		"x":1
	}, 
	{
		"id":"s0065",
		"name":"모든 25레벨 스킬 Lv. +$x",
		"point":10,
		"x":1
	}, 
	{
		"id":"s0066",
		"name":"모든 30레벨 스킬 Lv. +$x",
		"point":10,
		"x":1
	}, 
	{
		"id":"s0067",
		"name":"모든 35레벨 스킬 Lv. +$x",
		"point":10,
		"x":1
	}, 
	{
		"id":"s0068",
		"name":"모든 40레벨 스킬 Lv. +$x",
		"point":10,
		"x":1
	}, 
	{
		"id":"s0069",
		"name":"모든 45레벨 스킬 Lv. +$x",
		"point":10,
		"x":1
	}, 
	{
		"id":"s0070",
		"name":"모든 50레벨 스킬 Lv. +$x",
		"point":10,
		"x":1
	}, 
	{
		"id":"s0071",
		"name":"모든 60레벨 스킬 Lv. +$x",
		"point":10,
		"x":1
	}, 
	{
		"id":"s0072",
		"name":"모든 70레벨 스킬 Lv. +$x",
		"point":10,
		"x":1
	}, 
	{
		"id":"s0073",
		"name":"모든 75레벨 스킬 Lv. +$x",
		"point":10,
		"x":1
	}, 
	{
		"id":"s0074",
		"name":"모든 80레벨 스킬 Lv. +$x",
		"point":10,
		"x":1
	}, 
	{
		"id":"s0075",
		"name":"모든 85레벨 스킬 Lv. +$x",
		"point":10,
		"x":1
	}, 
	{
		"id":"s0076",
		"name":"모든 스킬 Lv. +$x",
		"point":10,
		"x":1
	}, 
	{
		"id":"s0077",
		"name":"화속성 공격",
		"point":5,
		"x":1
	}, 
	{
		"id":"s0078",
		"name":"수속성 공격",
		"point":5,
		"x":1
	}, 
	{
		"id":"s0079",
		"name":"명속성 공격",
		"point":5,
		"x":1
	}, 
	{
		"id":"s0080",
		"name":"암속성 공격",
		"point":5,
		"x":1
	}, 
	{
		"id":"s0081",
		"name":"속성강화가 가장 높은 수치의 속성 부여",
		"point":5,
		"x":1
	}, 
	{
		"id":"s0082",
		"name":"$x% 확률로 적 무기 파괴",
		"point":10,
		"x":1
	}, 
	{
		"id":"s0083",
		"name":"$x% 확률로 적 방어구 파괴",
		"point":10,
		"x":1
	}, 
	{
		"id":"s0084",
		"name":"카운터 공격력 +$x% 증가",
		"point":10,
		"x":20
	}, 
	{
		"id":"s0085",
		"name":"카운터 공격 시 +$x% 추가피해",
		"point":10,
		"x":20
	}
];
