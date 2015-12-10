﻿var skillList = [
	["광검 마스터리","절제된 공격","오토 가드","오버드라이브","이면 뒤집기","신기의 손놀림","백스텝 커터","류심(流心)","류심: 충(衝)","류심: 쾌(快)","류심: 승(昇)","류심: 강(强)","발도","차지 크래시","맹룡 단공참","환영검무","극 귀검술 참철식","극 귀검술, 폭풍식","차지 버스트","극초발도","어둠의 친화","사슬 해제","달의 커튼","만월 달빛베기","귀참 드라이브","귀검편","툼스톤","귀영섬","몽롱한 눈의 브레멘","잔영의 케이가","냉기의 사야","역병의 라사","흑염의 칼라","칠흑의 공포","제 7의 귀신 : 광폭의 블라슈","결정의 사야","툼스톤 트라이앵글","프렌지","광기","다이하드","혈기 왕성","혈십자","블러드 러스트","폭주","레이징 퓨리","갈증","블러디 레이브","블러드 소드","아웃레이지 브레이크","선혈의 추억","익스트림 오버킬","블러드루인","버스트 퓨리","살기감지","파동각인","진공참","수라 진공참","귀문반","정신이 번쩍!","파동 해제","살의의 파동","파동검 빙인","무쌍파","파동검 폭염","작열파동진","부동명왕진","심안","파동의 눈","극파동검 빙인","극파동검 폭염"],
	["납도","제국검술","속성의 소검 마스터리","쾌속의 도 마스터리","파쇄의 둔기 마스터리","견고의 대검 마스터리","속성변환","발검술","반격","쾌속검","방검술","환검","승천","신검합일","비연참","마검발현","반월","섬광","폭명기검","악즉참","참격혼","극 귀검술 : 시공섬","용성락","참마검","파천세","사복검 - 발(浡)","광폭화","사복검 - 무(楙)","사복검 - 조(釣)","사형조수","폭류나선","사복검 - 강(强)","혈마인","혈화난무","혈지군무","검마격살","탐욕의 번제","암연검 : 기가 블레이드","포식자 갈로아","역천의 프놈","양의공","삼재검","흡기","회륜","오기조원","발화","비상","거압","극검","난화검","비연장","멸화장","폭검","혜성만리","삼매진화","열화지옥","백보신장","십자검","우시르의 저주","쉐도우 랜서","히든 블레이드","쉐도우 바인딩","쉐도우 하베스트","쉐도우 하이딩","스카폴드","소울드레인","이보브","리버레이트 - 벅샷","리버레이트 - 매드니스","쉐도우 퍼펫","블랙 미러","컨제스트","데들리 케이프","디스트로이어","충실한 종","둠스데이","스타폴","이몰레이션"],
	["환영폭쇄","태양의 커튼","수플렉스 썬더","축염포","카이","활성화 숨결","넨 가드","나선의 넨","사자후","뇌명 : 사나운 빛의 넨수","기공장","광충노도","흩날리는 천염화","넨화","궁극의 넨가드","태사자후","슈퍼 아머","강권","머슬 시프트","급소 지정","붕권","철산고","원인치 펀치","본 크러셔","라이징 너클","라이트닝 댄스","비트 드라이브","스탬피드","사상 최강의 로킥","파쇄권","라이징 어퍼","독 바르기","이중 투척","히든 스팅","클로 마스터리","블록 버스터","마운트","도발","천라지망","그라운드 킥","크레이지 발칸","베놈 마인","정크 스핀","일발화약성","혈관을 흐르는 맹독","독무","맹독 일발화약성","블럭 봄","그랩캐넌","강렬한 테이크 다운","반드시 잡는다!","슬라이딩 그랩","로플링","숄더 태클","백브레이커","넥 스냅","브레이킹 엘보","에어슈타이너","스파이어","수플렉스 싸이클론","와일드 캐넌 스파이크","옷깃 잡기","기간틱 타이푼","에어클러치","싸이클론 어택"],
	["환영폭쇄","태양의 커튼","뇌전 무릎찍기","축염포","활성화 숨결","넨 가드","나선의 넨","나선의 넨 : 출","나선의 넨 : 주","사자후","뇌명 : 사나운 빛의 넨수","기공장","기호지세","넨의 극의","금뇌호 : 심판의 넨수","넨 스피어","기공환","슈퍼 아머","강권","머슬 시프트","급소 지정","뇌격","철산고","본 크러셔","클로즈 킥","홍염 질풍각","라이트닝 댄스","헥토파스칼 킥","효율적인 연소","화염의 각","연환퇴","스핀 킥","일발화약성","자동 장전","독병 투척","바늘 투척","블럭 투척","그물 투척","이중 투척","클로 마스터리","마운트","도발","그라운드 태클","크레이지 발칸","베놈 마인","니들 스핀","천수천안","천붕지괴","스티키 볼","광폭혈사","그랩캐넌","강렬한 테이크 다운","반드시 잡는다!","슬라이딩 그랩","로플링","숄더 태클","임팩트 콤비네이션","넥 스냅","스냅 샷","에어슈타이너","블로우 스트라이크","롤링 스파이크","와일드 캐넌 스파이크","반격","나의 공격리듬은!!","피어스","한놈만 팬다!!"],
	["리볼버 로딩","리볼버 패닝","데스 바이 리볼버","헤드샷","패스티스트 건","웨스턴 파이어","이동사격","난사","멀티 헤드샷","더블 건호크","건가드","스타일리쉬","트리플 클러치","리벤저","에어 레이드","죽음의 표식","에어 스핀","스커드 제노사이드","얼티밋 멀티 헤드샷","중화기 마스터리","캐넌볼","미라클 비전","슈타이어 대전차포","레이저 라이플","화염 강타","FM-92 스팅어","FM-31 그레네이드 런처","양자 폭탄","X-1 익스트루더","스펙트럴 서치 아이","새틀라이트 빔","팜페로 부스터","FM-92 스팅어 SW","로보틱스","로봇 전폭","회심의 랜드러너","카모플라쥬","Ez-8 카운트다운","Ex-S 바이퍼","공중 전투 메카 : 템페스터","메카 드롭","스패로우 팩토리","G-1 코로나","트랜스폼 : G-2 롤링썬더","트랜스폼 : G-3 랩터","최후의 투지","게이볼그 펀치","Ez-10 카운터어택","Ex-S 바이퍼 Zero","장탄 공급","탄 마스터리","머스켓 마스터리","보우건 마스터리","냉동탄","작열탄","철갑탄","G-35L 섬광류탄","G-18C 빙결류탄","네이팜탄","플래시 마인","크로스모어","버스터 샷","C4 원격조작","닐 스나이핑","듀얼 플리커","특수 기동 전대 '블랙로즈'","M-61 마인","플라잉 C4"],
	["리볼버 로딩","리볼버 패닝","데스 바이 리볼버","헤드샷","패스티스트 건","웨스턴 파이어","이동사격","난사","멀티 헤드샷","더블 건호크","건가드","건블레이드","트리플 클러치","리벤저","소닉 스파이크","체인 스내치","체인 파우더","베일드 컷","블러디 스파이크","블러디 카니발","얼티밋 멀티 헤드샷","중화기 마스터리","캐넌볼","미라클 비전","슈타이어 대전차포","레이저 라이플","화염 강타","FM-92 mk2 랜서","FM-31 그레네이드 런처","양자 폭탄","X-1 익스트루더","오버 히트","에인션트 트리거","FM-92 mk2 랜서 SW","로보틱스","로봇 전폭","위기의 랜드러너","카모플라쥬","트랜스포메이션","Ez-8 카운트다운","Ex-S 바이퍼","공중 전폭 메카 : 게일포스","메카 드롭","스패로우 팩토리","G-1 코로나","트랜스폼 : G-2 롤링썬더","트랜스폼 : G-3 랩터","G-익스텐션","트랜스폼 : G-0 배틀로이드","Ez-10 카운터어택","Ex-S 바이퍼 Zero","장탄 공급","강화탄","니트로 모터","유탄 마스터리","머스켓 마스터리","보우건 마스터리","서보 니트로","냉동탄","작열탄","철갑탄","G-35L 섬광류탄","G-18C 빙결류탄","광자탄","플래시 마인","크로스모어","버스터 샷","C4 원격조작","닐 스나이핑","병기 강화","EMP 스톰","M-61 마인","플라잉 C4"],
	["화속성 마스터리","수속성 마스터리","명속성 마스터리","암속성 마스터리","메모라이즈","이동 캐스팅","플레임 스트라이크 (火)","칠링 펜스 (水)","썬버스트 (明)","보이드 (暗)","핼로윈 버스터 (火)","아크틱 피스트 (水)","썬더 콜링 (明)","나이트 할로우 (暗)","원소 집중","애스트럴 스톰","샤이닝 칠링 펜스 (水+明)","플레임 보이드 볼케이노 (火+暗)","환수 강화 오라","환수 정화","나를 따라라","매스 텔레포트","저놈 잡아라!","끈끈이 투척","환수 폭주","계약소환 : 프리트","계약소환 : 검은 기사 산도르","계약소환 : 마계화 아우쿠소","계약소환 : 루이즈 언니!","정령소환 : 아도르","정령소환 : 나이아스","정령소환 : 스토커","정령소환 : 위스프","정령소환 : 데드 멀커","정령소환 : 글레어린","정령소환 : 아퀘리스","정령소환 : 플레임 헐크","정령소환 : 정령왕 에체베리아","정령 희생","위스프 희생 공격","나이아스 희생 공격","스토커 희생 공격","아도르 희생 공격","스피릿 본드","계약소환 : 정복자 카시야스","분노한 검은 기사 산도르","중급정령 : 샐리스트","중급정령 : 라트리아","중급정령 : 셰이드","중급정령 : 알리시아","플로레상과 친하게 지내기","플루토와 친하게 지내기","잭프로스트와 친하게 지내기","잭오랜턴과 친하게 지내기","스위트 캔디바","고출력 매직 미사일","빗자루 스핀","플로레 컬라이더","데스 파우더","블랙 망토","변이 파리채","반중력 기동장치","칠링 파우더","애시드 클라우드","메가 드릴","개조 슈르르","용암지대 생성 물약","성난 불길 가열로","성공 예감","퓨전 크래프트","대왕 파리채","빗자루 바운드 스핀","봉 마스터리","창 마스터리","더블 스윙","쇄패","뇌연격","강습유성타","오토 체이서","체이서 : 무(無)","체이서 : 명(明)","체이서 : 수(水)","타이머 밤","체이서 : 화(火)","체이서 : 암(暗)","퓨전 체이서","체이서 프레스","황룡천공","배틀 그루브","테아나 변신","인챈티드 쇄패","진 뇌연격"],
	["속성발동","엘레멘탈 포스","엘레멘탈 실드","마나 폭주","크리스탈 어택","파이어 로드","체인 라이트닝","암전","플레임 서클","아이스 크리스탈 샤워","다크니스 맨틀","라이트닝 월","엘레멘탈 레인","엘레멘탈 체인","엘레멘탈 버스터","컨센트레이트","엘레멘탈 스트라이크","설화연창","발현","회전투창","아이스 로드","브로큰 애로우","공명","피어스 오브 아이스","아이스 빅 해머","아이스 크래쉬","아이스맨","극한의 물기둥","툰드라의 가호","빙류환","아이스 오브","아이스 필드"],
	["수호의 은총","여명의 축복","빛의 복수","영혼의 희생","신성한 빛","천상의 멜로디","천상의 하모니","보호의 징표","패스트 힐","영광의 축복","생명의 원천","힐 윈드","용기의 은총","순백의 칼날","승리의 창","크로스 크래쉬","디플렉트 월","플래시 글로브","참회의 망치","정의의 심판","신념의 오라","아포칼립스","프레셔 월","플래시 스크랩","윌 드라이버","더킹 스트레이트","더킹 어퍼","더킹 바디블로","컴뱃 마스터리","테크니컬 마스터리","디바인 크러시","사이드 와인드","퀵 패리","고져스 컴비네이션","홀리 카운터","초핑 해머","머신건 잽","심판의 회오리","섀도우 박서","헤븐리 컴비네이션","허리케인 롤","드라이 아웃","빅뱅 펀치","개틀링 펀치","데몰리션 펀치","거병 마스터리","질풍타","단층지격","열정의 챠크라","저 하늘의 별","거선풍","난격","대회전격","무쌍격","광명의 챠크라","성불","어둠 가르기","주작부","제압부","공의 식신 - 백호","지의 식신 - 현무","낙뢰부","식신의 군","투기 발산","창룡격","지의 식신 - 진현무","멸혼부","참격","낫 마스터리","데빌 스트라이커","데스 사이드 D","지뢰진 D","추락하는 영혼 E","스핀커터 D","복수의 가시 D","환청","스피닝 디포메이션 D","리퍼 D","데빌 클러치 D","어둠의 권능 D","악몽","악마화","복마전","재앙"],
	["스위프트","히트엔드","단검 마스터리","쌍검 마스터리","소드 댄스","밴디트 컷","더블 피어스","체인소","허리케인","데스 허리케인","라이트닝 애로우","버티컬 스파이럴","소닉 어설트","엑셀 스트라이크","문아크","실버스트림","체인소 러쉬","어슬랜트 스파이럴","니콜라스 강령","복종하는 사령","좀비 강령","흑사진","흡기암경파","학살의 발라크르 강령","발라크르의 야망","기요틴","어둠의 손톱","망자의 원한","암흑의 의식","야행혼","리빙데드","팬텀스트롬","학살자의 공포","망자의 집념","분기암경파","화염구","환영 다중 수리검","화둔 : 홍염","쿠나이 연마","화염선풍","나선 대차륜 쿠나이","인법 : 바꿔치기","인법 : 잔영 남기기","열화천도","인법 : 육도윤회","두꺼비유염탄","암영술","비기 :염무개화","초열혼폭술","흉멸인법진","암기 : 비연수리검","마환 : 풍마수리검","날카로운 단검","섀도우 댄싱","암살자의 마음가짐","넥 디바이더","홀드업!","심장 찌르기","나락 떨구기","칼날돌풍","파이널 디스트럭션","암살","절명의 그림자","배후습격","단검투척","섀도우 스팅"],
	["가디언 라이딩","에이션트 보어","워크라이","장미 갑옷","에이션트 디어","선고","위대한 의지","압도","자연의 수호","체인러쉬","신록의 검","엘비쉬 점프","철벽방어","뱅가드 스트랏슈","자연의 속박","런지 에볼루션","분쇄","대자연의 가호","천마 섬광","생명의 전조","신뢰의 돌파","약식소환 : 보라스","약식소환 : 히스테릭 워리어","약식소환 : 젤라틴 마스크","약식소환 : 크레이지 스핀","약식소환 : 빅대디","헬게이트","약식소환 : 럭키왁키","약식소환 : 트윙클 아티스트","약식 소환 : 뱀파이어 칠드런","약식 소환 : 레이지 햇","약식 소환 : 하트퀸","엘레멘탈 서클","희생폭탄","제노사이드 크러쉬","공진","사악한 수혈","브레인 스톰","데몬 월","팬시 트위스트","파성추","혼돈의 검","천공검","파이널 어택","형질전환","악신난무","검은 충격","디멘션 블레이드"],
	["어둠의 도 마스터리","어둠의 둔기 마스터리","어둠의 소검 마스터리","어둠의 대검 마스터리","어둠의 광검 마스터리","어퍼","브리프 컷","바운스 블로우","피어스 스트라이크","다크 크래셔","드로우 소드","래피드 무브","일루젼 슬래쉬","다크 슬래쉬","스핀 어택","윕 어택","트리플 스탭","다크 폴","모멘터리 슬래쉬","다크 플레임 소드","다크 크로스","홉 스매쉬","다크 러스트","다크 익스플로전","다크 레이브","다크 소드","다크 브레이크","웨이브","베인 슬래쉬","그랜드 웨이브","다크 웨이브","다크 볼","쇼크 웨이브","웨이브 스핀"],
	["화염","파이어 월","운석 낙하","냉기","아이스 스톤","아이스 플레이트","방해","우드 펜스","드로우","수호","플레임 허리케인","아이스 실드","바람","윈드 프레스","윈드 스톰"]
]
