const SECTOR_DATA = {
  "categories": [
    {
      "category": "AI 파생 방사형 지도 (AI Derivative Radial Map)",
      "summary": "생성형·에이전틱 AI의 연산 폭증이라는 단일 진앙에서 출발해, 칩(두뇌) → 전력·냉각(혈류) → 데이터센터(신체) → 로봇(손발) → 소프트웨어(영혼)로 파생되는 7개 대분류 통합 지도. 모든 가지의 공통 내러티브는 '연산=자본=전기=구리=물'이라는 등식의 연쇄 전이이며, 각 차수가 깊어질수록 시장이 덜 본 소모성·복리 구조의 히든 모멘텀이 응축된다.",
      "children": [
        {
          "sector": "반도체·컴퓨팅 (연산의 두뇌)",
          "tier": 1,
          "narrative": "AI 연산 수요가 가장 직접적으로 전환되는 1차 진앙. GPU·NPU·HBM이 '연산이 곧 자본'이라는 기대감의 핵심이며, 한국은 가속기 본체보다 이를 받쳐주는 메모리·패키징·소재·검사에서 구조적 레버리지를 가진다. 미세공정 한계로 성능 향상의 무게중심이 '단일 칩 미세화'에서 'HBM 다음은 연결(패키징·광)'로 이동 중.",
          "hiddenMomentum": "학습용 초고가 GPU 일변도에서 '저전력 추론 NPU'로 무게중심 이동. 한국거래소의 AI 팹리스 코스닥 상장 지원(2026-05)으로 IPO 모멘텀이 디자인하우스·IP·후공정으로 낙수. HBM4E·16단 전환 시 박막화(30μm)·하이브리드 본딩 난도 급등으로 소부장 수혜폭 확대. 검사·소재·SiC링 등 '소모성 복리' 구조가 회전율·복리 관점에 정확히 부합.",
          "koreanStocks": [
            {
              "name": "SK하이닉스",
              "ticker": "000660",
              "role": "HBM4 점유율 54~55% 1위, 엔비디아 가속기 HBM 공급 핵심",
              "market": "KOSPI",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "삼성전자",
              "ticker": "005930",
              "role": "HBM4 세계 첫 양산 + AMD 독자 채널 + 2nm GAA 파운드리 양면 진입",
              "market": "KOSPI",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "한미반도체",
              "ticker": "042700",
              "role": "HBM TC본더 글로벌 1위(71%), 하이브리드 본더 2027말 양산 예정",
              "market": "KOSPI",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "한화세미텍",
              "ticker": "",
              "role": "TC본더 SK하이닉스 진입 + 하이브리드 본더 개발 성공",
              "market": "비상장",
              "confidence": "high",
              "listed": false,
              "verified": true
            },
            {
              "name": "리노공업",
              "ticker": "058470",
              "role": "테스트소켓·프로브핀 글로벌 1위, 영업이익률 40%+ 캐시카우",
              "market": "KOSDAQ",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "ISC",
              "ticker": "095340",
              "role": "러버타입 테스트소켓, HBM 전용 신규 소켓 수요",
              "market": "KOSDAQ",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "넥스틴",
              "ticker": "348210",
              "role": "전공정 웨이퍼 패턴결함 검사 국산화, 해외매출 60%",
              "market": "KOSDAQ",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "원익IPS",
              "ticker": "240810",
              "role": "ALD·CVD 전공정 장비, 삼성 GAA 공급 (GAA에서 ALD 스텝 급증)",
              "market": "KOSDAQ",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "HPSP",
              "ticker": "403870",
              "role": "고압수소어닐링 장비 독점 — GAA·미세화 직접 수혜",
              "market": "KOSDAQ",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "티씨케이",
              "ticker": "064760",
              "role": "고순도 SiC 포커스링 세계 1위(80%), 식각 소모성 부품",
              "market": "KOSDAQ",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "동진쎄미켐",
              "ticker": "005290",
              "role": "포토레지스트 아시아 강자 + HBM용 CMP 슬러리",
              "market": "KOSDAQ",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "솔브레인",
              "ticker": "357780",
              "role": "식각/세정액·CMP 슬러리·전구체 종합 소재",
              "market": "KOSDAQ",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "가온칩스",
              "ticker": "399720",
              "role": "AI칩 디자인하우스, 삼성 파운드리 DSP — 딥엑스 DX-M1 수주",
              "market": "KOSDAQ",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "오픈엣지테크놀로지",
              "ticker": "394280",
              "role": "NPU·메모리 인터페이스 IP, 온디바이스AI",
              "market": "KOSDAQ",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "리벨리온",
              "role": "추론 특화 NPU 팹리스, SK그룹 지분 약 26% (비상장, IPO 추진 — 상장 시 신규 풀)",
              "market": "비상장",
              "confidence": "high",
              "listed": false,
              "verified": true,
              "ticker": null
            },
            {
              "name": "두산테스나",
              "ticker": "131970",
              "role": "시스템반도체 웨이퍼 테스트 1위 OSAT",
              "market": "KOSPI",
              "confidence": "medium",
              "listed": true,
              "verified": true
            },
            {
              "name": "제주반도체",
              "ticker": "080220",
              "role": "LPDDR 메모리 — 온디바이스 AI폰 핵심",
              "market": "KOSDAQ",
              "confidence": "high",
              "listed": true,
              "verified": true
            }
          ],
          "globalPlayers": [
            "NVIDIA",
            "AMD",
            "Broadcom",
            "Google (TPU)",
            "TSMC",
            "ASML",
            "Applied Materials",
            "Micron",
            "Groq",
            "Cerebras",
            "Arm",
            "Cadence",
            "Synopsys"
          ]
        },
        {
          "sector": "전력·에너지 (연산의 혈류)",
          "tier": 1,
          "narrative": "'연산=전기'가 시장의 1차 컨센서스. AI 데이터센터 1기당 전력수요가 32MW→80MW급으로 2배 이상 점프하고 미국 노후 전력망 교체 수요까지 겹치며, 초고압 변압기 리드타임이 24개월→최대 5년으로 폭발했다. 한국 3사가 북미 그리드 병목의 거의 유일한 해소처로 부상해 수주잔고가 수년치로 채워지는 '없어서 못 파는' 슈퍼사이클. 송전망 지연으로 빅테크가 가스터빈·연료전지·SMR 등 '계량기 뒤(behind-the-meter)' 자가발전으로 선회하며 발전원까지 파생이 확장된다.",
          "hiddenMomentum": "변압기에서 '800kV 차단기·GIS·STATCOM'으로 제품 믹스가 고도화되며 ASP 구조적 상승. 가스터빈 Big3 매진(2029~30년치)의 낙수로 두산에너빌리티가 '제4 공급자'로 부상(380MW 2기 계약). 빅테크의 SMR '직접 PPA'가 유틸리티를 건너뛰는 구조 변화. NVIDIA의 800VDC 랙 전환으로 SiC·GaN 전력반도체가 소자 레벨 2차 테마로. 변압기 슈퍼사이클의 가장 안쪽 소재인 방향성 전기강판(GOES)·구리는 '경기지표'에서 'AI 필수재'로 리프레이밍 중.",
          "koreanStocks": [
            {
              "name": "HD현대일렉트릭",
              "ticker": "267260",
              "role": "초고압 변압기 글로벌 톱티어, 1Q26 신규수주 사상최대 약 2.65조, 백로그 11.6조",
              "market": "KOSPI",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "효성중공업",
              "ticker": "298040",
              "role": "변압기+800kV 차단기+STATCOM, 미국 생산능력 2배 증설",
              "market": "KOSPI",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "LS ELECTRIC",
              "ticker": "010120",
              "role": "국내 DC 전력인프라 약 70% 담당, 배전·스위치기어·계통안정화 종합",
              "market": "KOSPI",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "일진전기",
              "ticker": "103590",
              "role": "변압기+초고압 케이블 수직계열 국내 유일, 북미 직수주",
              "market": "KOSPI",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "두산에너빌리티",
              "ticker": "034020",
              "role": "국산 대형 가스터빈 유일 제조 + SMR 주기기, 데이터센터 380MW 공급계약",
              "market": "KOSPI",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "두산퓨얼셀",
              "ticker": "336260",
              "role": "발전용 연료전지(SOFC), AI 데이터센터 온사이트 발전 양산 개시(2025-07)",
              "market": "KOSPI",
              "confidence": "medium",
              "listed": true,
              "verified": true
            },
            {
              "name": "한전기술",
              "ticker": "052690",
              "role": "국내 유일 원자로·원전 종합설계, i-SMR 설계",
              "market": "KOSPI",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "삼성SDI",
              "ticker": "006400",
              "role": "데이터센터 직납 BBU·UPS 배터리, 글로벌 UPS 점유율 1위, 고판가 믹스",
              "market": "KOSPI",
              "confidence": "medium",
              "listed": true,
              "verified": true
            },
            {
              "name": "LG에너지솔루션",
              "ticker": "373220",
              "role": "LFP 기반 차세대 UPS 랙(JP6)·BBU, ESS 누적수주 140GWh+",
              "market": "KOSPI",
              "confidence": "medium",
              "listed": true,
              "verified": true
            },
            {
              "name": "DB하이텍",
              "ticker": "000990",
              "role": "전력반도체 파운드리, 650V GaN HEMT·SiC, 800VDC 전력변환 응용",
              "market": "KOSPI",
              "confidence": "low",
              "listed": true,
              "verified": true
            },
            {
              "name": "한국전력",
              "ticker": "015760",
              "role": "전력망 운영·수도권 송전 병목의 핵심 주체",
              "market": "KOSPI",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "LS",
              "ticker": "006260",
              "role": "지주 — LS전선(해저·HVDC·전력케이블) 모회사, 구리 밸류체인",
              "market": "KOSPI",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "가온전선",
              "ticker": "000500",
              "role": "미국 AI DC 버스덕트 공급 5년 최대 4조원, 내부 배전 혈관",
              "market": "KOSPI",
              "confidence": "medium",
              "listed": true,
              "verified": true
            },
            {
              "name": "대한전선",
              "ticker": "001440",
              "role": "초고압 전력케이블, 미국 그리드향 수출 확대",
              "market": "KOSPI",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "풍산",
              "ticker": "103140",
              "role": "전기동·신동(구리 가공) 국내 대표 — AI 인프라 필수재",
              "market": "KOSPI",
              "confidence": "low",
              "listed": true,
              "verified": true
            },
            {
              "name": "POSCO홀딩스",
              "ticker": "005490",
              "role": "방향성 전기강판(변압기 철심 소재) — 슈퍼사이클 최안쪽 소재",
              "market": "KOSPI",
              "confidence": "low",
              "listed": true,
              "verified": true
            },
            {
              "name": "HD현대인프라코어",
              "ticker": "",
              "role": "데이터센터용 초대형 발전엔진(가스터빈 품귀 대안)",
              "market": "폐지",
              "confidence": "high",
              "listed": false,
              "verified": true
            },
            {
              "name": "비에이치아이",
              "ticker": "083650",
              "role": "원전·발전 보조기기(BOP·HRSG·복수기), SMR 후방",
              "market": "KOSDAQ",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "우진엔텍",
              "ticker": "457550",
              "role": "원전 계측제어·정비 (원전 가동 반복 수취 히든)",
              "market": "KOSDAQ",
              "confidence": "medium",
              "listed": true,
              "verified": true
            }
          ],
          "globalPlayers": [
            "GE Vernova",
            "Siemens Energy",
            "Hitachi Energy",
            "Eaton",
            "Schneider Electric",
            "Mitsubishi Heavy Industries",
            "NuScale Power",
            "X-energy",
            "Bloom Energy",
            "Constellation Energy",
            "Prysmian",
            "Nexans",
            "Infineon",
            "onsemi",
            "Freeport-McMoRan"
          ]
        },
        {
          "sector": "데이터센터·냉각 인프라 (연산의 신체)",
          "tier": 1,
          "narrative": "AI 연산은 결국 서버 10만대 이상을 담는 100MW급 하이퍼스케일 '건물'로 떨어진다. GPU 발주가 늘수록 물리 공간 발주가 선행되며, 시공사는 도급을 넘어 운영(Operation)까지 영역을 넓혀 반복 매출로 리레이팅. GPU 랙의 전력밀도가 공랭 한계(랙당 수십kW)를 넘어서며 '냉각이 곧 컴퓨팅 캐파이자 전력효율(PUE)'이 되어, 액침·액체냉각이 차세대 필수 인프라로 부상.",
          "hiddenMomentum": "3M이 액침냉각용 유체 생산을 2025년 말 중단 → SK엔무브·S-Oil 등 윤활기유 보유 정유사에 공급 공백 기회. 냉각유는 '반복 소모·교체'되는 recurring 소비재라 정유주가 '정제마진'이 아닌 'AI 소재주'로 재평가되는 초입. 직접칩냉각(D2C) 확산으로 CDU·매니폴드·퀵디스커넥트 등 액체배관 부품이 신규 표준 품목화. 건설사의 '운영 자회사'(GS건설 디씨브릿지) 진출로 일회성 도급→장기 운영수익 모델 재평가. 물 발자국 규제가 수냉·수처리의 히든 입지 모멘텀.",
          "koreanStocks": [
            {
              "name": "GST",
              "ticker": "083450",
              "role": "스크러버·칠러 기반 국내 유일 2상 액침냉각, S-Oil 통합 솔루션",
              "market": "KOSDAQ",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "케이엔솔",
              "ticker": "053080",
              "role": "글로벌 1위 Submer 파트너십, 액침냉각 솔루션 (※렌즈 간 티커 053080/475580 혼재 — 확인 필요)",
              "market": "KOSDAQ",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "신성이엔지",
              "ticker": "011930",
              "role": "클린룸·항온항습·정밀공조 데이터센터 인프라",
              "market": "KOSPI",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "지엔씨에너지",
              "ticker": "119850",
              "role": "DC 비상발전·전력·냉각 인프라",
              "market": "KOSDAQ",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "SK이노베이션",
              "ticker": "096770",
              "role": "자회사 SK엔무브 — 데이터센터 액침냉각유 국내 1위(LG·GRC MOU)",
              "market": "KOSPI",
              "confidence": "medium",
              "listed": true,
              "verified": true
            },
            {
              "name": "S-Oil",
              "ticker": "010950",
              "role": "액침냉각용 냉각유(e-Cooling) 공급 — 정유사 신소재 전환",
              "market": "KOSPI",
              "confidence": "medium",
              "listed": true,
              "verified": true
            },
            {
              "name": "현대건설",
              "ticker": "000720",
              "role": "국내 최다 하이퍼스케일 DC 시공 실적(용인 죽전 64MW 등)",
              "market": "KOSPI",
              "confidence": "medium",
              "listed": true,
              "verified": true
            },
            {
              "name": "GS건설",
              "ticker": "006360",
              "role": "네이버 각 춘천 등 시공 + 운영 자회사(디씨브릿지) 보유",
              "market": "KOSPI",
              "confidence": "medium",
              "listed": true,
              "verified": true
            },
            {
              "name": "한미글로벌",
              "ticker": "053690",
              "role": "데이터센터 PM/CM 전문, 안정 수익·배당",
              "market": "KOSPI",
              "confidence": "medium",
              "listed": true,
              "verified": true
            },
            {
              "name": "삼성에스디에스",
              "ticker": "018260",
              "role": "데이터센터 5곳 보유·HPC 전용센터, 부동산성 노출",
              "market": "KOSPI",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "한중엔시에스",
              "ticker": "107640",
              "role": "ESS·배터리 냉각/모듈 부품, DC ESS 수혜",
              "market": "KOSDAQ",
              "confidence": "medium",
              "listed": true,
              "verified": true
            }
          ],
          "globalPlayers": [
            "Vertiv",
            "Schneider Electric",
            "GRC (Green Revolution Cooling)",
            "Submer",
            "Ecolab/CoolIT",
            "Stulz",
            "Equinix",
            "Digital Realty",
            "Turner Construction",
            "AECOM"
          ]
        },
        {
          "sector": "네트워킹·광통신 (연산의 신경망)",
          "tier": 1,
          "narrative": "수만 개 GPU 병렬연산으로 서버-서버 간 East-West 트래픽이 폭증, 800G·1.6Tbps 초고속 광트랜시버가 필수가 됐다. 전기 인터커넥트의 전력·발열·대역폭 한계가 새 병목이 되며, 엔비디아가 차세대 연결로 '광(光)'을 지목 — CPO(공동패키징광학)·실리콘 포토닉스가 'GPU에서 연결로' 이동하는 가장 먼 1차 파생. 클러스터를 묶는 스위치·IX·코로케이션, 그 메인보드의 초다층기판(MLB)까지 신경계 전반으로 수요가 번진다.",
          "hiddenMomentum": "OFC 2026에서 1.6Tbps 트랜시버·CPO용 외부광원(ELSFP) 공개, 3분기 하이퍼스케일러 샘플. 코닝-엔비디아 광학 파트너십, 삼성 파운드리 광통신모듈 수주로 광반도체 자본 이동 신호. 시장은 'GPU 기판'만 보지만 800G/1.6T 스위치 1대당 MLB 면적·층수 급증의 '네트워크 장비향 기판'은 덜 주목. 그 더 깊은 층위인 고속신호용 동박(HVLP/RTF)·CCL은 'EV 배터리' 프레임에 가려진 별개 고마진 라인으로 분리 중. 단, 광통신주는 KRX 투자경고 이력 다수 — 기대감 선반영 구간으로 실적 검증 필요.",
          "koreanStocks": [
            {
              "name": "오이솔루션",
              "ticker": "138080",
              "role": "국내 광트랜시버 점유율 1위, 800G/1.6T 라인업, CPO 광원 자체생산",
              "market": "KOSDAQ",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "대한광통신",
              "ticker": "010170",
              "role": "광섬유 모재~광케이블 수직계열, 미국 AI DC향 광케이블",
              "market": "KOSDAQ",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "빛과전자",
              "ticker": "069540",
              "role": "800G QSFP-DD·1.6T OSFP 광모듈",
              "market": "KOSDAQ",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "퀄리타스반도체",
              "ticker": "432720",
              "role": "고속 인터커넥트·SerDes IP, CPO 연계",
              "market": "KOSDAQ",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "케이아이엔엑스",
              "ticker": "093320",
              "role": "국내 유일 중립 IX 사업자 + IDC 운영, 빅테크 입점 해자",
              "market": "KOSDAQ",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "파이오링크",
              "ticker": "170790",
              "role": "DC 네트워크 스위치(ADC)·보안 스위치",
              "market": "KOSDAQ",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "이수페타시스",
              "ticker": "007660",
              "role": "AI 가속기·네트워크 스위치용 MLB(초다층기판) 글로벌 공급",
              "market": "KOSPI",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "대덕전자",
              "ticker": "353200",
              "role": "패키지기판·MLB, AI 반도체 패키징 수혜",
              "market": "KOSPI",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "두산",
              "ticker": "000150",
              "role": "전자BG 동박적층판(CCL) AI향 대규모 증설(2,445억)",
              "market": "KOSPI",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "롯데에너지머티리얼즈",
              "ticker": "020150",
              "role": "AI 서버·네트워크용 초극저조도 동박(HVLP/RTF)",
              "market": "KOSPI",
              "confidence": "medium",
              "listed": true,
              "verified": true
            },
            {
              "name": "윈스",
              "ticker": "136540",
              "role": "고성능 IPS·DDoS 방어 — AI 트래픽 고속화 동반 보안 교체",
              "market": "KOSDAQ",
              "confidence": "medium",
              "listed": true,
              "verified": true
            }
          ],
          "globalPlayers": [
            "NVIDIA",
            "Broadcom",
            "Coherent",
            "Corning",
            "Lumentum",
            "Marvell",
            "Arista Networks",
            "Cisco",
            "TTM Technologies",
            "Unimicron"
          ]
        },
        {
          "sector": "피지컬 AI·로봇 (연산의 손발)",
          "tier": 1,
          "narrative": "LLM·VLA(Vision-Language-Action) 파운데이션 모델이 로봇의 '두뇌'로 이식되며, 범용 노동을 대체할 휴머노이드 하드웨어가 AI 붐의 가장 직접적인 물리적 출구가 됐다. 삼성(레인보우로보틱스 35%)·현대차(보스턴다이내믹스+딥마인드 VLA)·LG전자(엔비디아 젯슨 토르)가 각각 'AI를 입힐 몸'을 내재화하는 경쟁 구도. AI 지능이 충분히 싸지면 다음 병목은 '몸'이며, 자본이 데이터센터(두뇌)에서 물리 구현(신체)으로 확장되는 다음 단계.",
          "hiddenMomentum": "젠슨 황 방한(2026-06) 마지막 일정이 로봇 스타트업 만찬, 엔비디아가 비상장 피지컬AI 스타트업(디든로보틱스) 투자 추진 → IPO 파이프라인(에이딘로보틱스·에이딘 6축 힘토크센서 등)으로 테마 확장 신호. 감속기는 '관절당 N배×로봇 대수'로 곱해지는 양산 최대 병목이자 국산화 프리미엄 최대. 시장이 팔·다리(감속기·모터)에 쏠릴 때 '손(MIM·촉각센서)'과 '시뮬레이션·디지털트윈(Sim-to-Real)' 데이터 레이어는 거의 무주공산. 방산 무인체계가 로봇의 숨은 현금흐름 파생.",
          "koreanStocks": [
            {
              "name": "레인보우로보틱스",
              "ticker": "277810",
              "role": "삼성전자 지분 35%, 휴머노이드 하드웨어 플랫폼 대장주",
              "market": "KOSDAQ",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "두산로보틱스",
              "ticker": "454910",
              "role": "국내 협동로봇 1위, 엔비디아 협업, 2028 산업용 휴머노이드",
              "market": "KOSPI",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "현대차",
              "ticker": "005380",
              "role": "보스턴다이내믹스 모회사 + 딥마인드·엔비디아 VLA 동맹",
              "market": "KOSPI",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "LG전자",
              "ticker": "066570",
              "role": "엔비디아 젯슨 토르 탑재 클로이, 액추에이터 부품 내재화",
              "market": "KOSPI",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "에스비비테크",
              "ticker": "389500",
              "role": "국내 유일 하모닉 감속기 국산화 → 로보 액추에이터 모듈 진화",
              "market": "KOSDAQ",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "로보티즈",
              "ticker": "108490",
              "role": "다이나믹셀 통합 액추에이터, 구글·테슬라 시제품 협업 이력",
              "market": "KOSDAQ",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "에스피지",
              "ticker": "058610",
              "role": "정밀감속기+모터+드라이브 로봇 관절모듈",
              "market": "KOSDAQ",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "삼익THK",
              "ticker": "004380",
              "role": "LM가이드·볼스크류·감속기 메카트로 (손목·손가락 직선운동)",
              "market": "KOSPI",
              "confidence": "medium",
              "listed": true,
              "verified": true
            },
            {
              "name": "현대모비스",
              "ticker": "012330",
              "role": "현대 아틀라스용 차세대 액추에이터 개발",
              "market": "KOSPI",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "넥스트칩",
              "ticker": "396270",
              "role": "차량용 영상인식 SoC, 인식칩이 로봇 비전으로 교차 전용",
              "market": "KOSDAQ",
              "confidence": "medium",
              "listed": true,
              "verified": true
            },
            {
              "name": "클로봇",
              "ticker": "466100",
              "role": "자율주행 로봇 SW 플랫폼·멀티로봇 관제 (고마진)",
              "market": "KOSDAQ",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "한국피아이엠",
              "ticker": "448900",
              "role": "국내 MIM 1위, 티타늄 MIM 로봇손 부품 美 휴머노이드 공급 추진",
              "market": "KOSDAQ",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "한화에어로스페이스",
              "ticker": "012450",
              "role": "무인체계·UGV·방산 로보틱스 (현금흐름 파생)",
              "market": "KOSPI",
              "confidence": "low",
              "listed": true,
              "verified": true
            },
            {
              "name": "네이버",
              "ticker": "035420",
              "role": "엔비디아 옴니버스 연계, 실환경 데이터+피지컬AI 모델",
              "market": "KOSPI",
              "confidence": "medium",
              "listed": true,
              "verified": true
            },
            {
              "name": "에스에프에이",
              "ticker": "056190",
              "role": "스마트팩토리·물류자동화 종합 시스템",
              "market": "KOSDAQ",
              "confidence": "medium",
              "listed": true,
              "verified": true
            }
          ],
          "globalPlayers": [
            "Tesla (Optimus)",
            "Figure AI",
            "Boston Dynamics",
            "Unitree",
            "NVIDIA (Jetson/Isaac/GR00T)",
            "Google DeepMind",
            "Harmonic Drive Systems",
            "Nabtesco",
            "Physical Intelligence",
            "Universal Robots"
          ]
        },
        {
          "sector": "소프트웨어·서비스 (연산의 지능·영혼)",
          "tier": 1,
          "narrative": "하드웨어가 깔리면 그 위에서 가치를 만드는 모델·에이전트·버티컬 SaaS가 수익화 레이어를 형성. 정부 '독자 AI 파운데이션 모델(독파모)' 국책 사업이 소버린 AI 서사로 기대감의 1차 진앙이 되고, 2026년이 'AI 에이전트 원년'으로 규정되며 AI가 '답변 도구'에서 '업무 주체'로 격상. 기존 B2B SaaS 강자는 AI를 얹어 객단가(ARPU)를 올리는 업셀 구도. 의료·금융·언어·콘텐츠 등 버티컬에서 '스토리에서 실적으로' 전환이 진행된다.",
          "hiddenMomentum": "에이전트 붐은 LLM API 호출·토큰 소비를 기하급수적으로 늘려 → '추론 인프라·비용 최적화 SW' 수요로 역류(아직 미반영). 한국은 ERP·회계·전자세금계산서처럼 규제·로컬 데이터에 묶인 SaaS가 AI로 오히려 해자를 강화하는 역설 구간. 의료 AI는 영상판독을 넘어 신약개발·동반진단(CDx)으로 확장해 제약 밸류체인의 데이터 게이트키퍼로 상승. 광고는 비용에서 자동 최적화 엔진으로 전환돼 네이버·카카오 마진 구조 재편(덜 가격 반영). 비상장(업스테이지·모티프)의 IPO가 상장 생태계로 기대감 전이 트리거.",
          "koreanStocks": [
            {
              "name": "SK텔레콤",
              "ticker": "017670",
              "role": "독파모 정예팀, 에이닷·자체 LLM 보유 통신 기반 AI",
              "market": "KOSPI",
              "confidence": "medium",
              "listed": true,
              "verified": true
            },
            {
              "name": "코난테크놀로지",
              "ticker": "402030",
              "role": "코난 LLM 자체개발 + 기업용 에이전트·RAG·검색",
              "market": "KOSDAQ",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "솔트룩스",
              "ticker": "304100",
              "role": "루시아 LLM + 구버 AI 에이전트, 공공·RAG·AI 평가/거버넌스",
              "market": "KOSDAQ",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "더존비즈온",
              "ticker": "012510",
              "role": "ERP·그룹웨어 1위, ONE AI 업무 자동화 + 금융 SaaS(제주은행 지분)",
              "market": "KOSPI",
              "confidence": "medium",
              "listed": true,
              "verified": true
            },
            {
              "name": "NAVER",
              "ticker": "035420",
              "role": "생성형 AI 광고솔루션·AI 커머스 대장, 매출 사상최대 견인",
              "market": "KOSPI",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "카카오",
              "ticker": "035720",
              "role": "AI 광고·커머스·카나나",
              "market": "KOSPI",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "루닛",
              "ticker": "328130",
              "role": "암 영상진단·AI 바이오마커, 글로벌 진출 선두",
              "market": "KOSDAQ",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "뷰노",
              "ticker": "338220",
              "role": "심정지 예측 등 임상 의사결정 AI, 미국 진출",
              "market": "KOSDAQ",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "셀바스AI",
              "ticker": "108860",
              "role": "국내 1호 AI 상장사, 음성·필기·의료·디지털휴먼 멀티모달",
              "market": "KOSDAQ",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "플리토",
              "ticker": "300080",
              "role": "AI 통번역 + LLM 학습용 언어 데이터 구축·판매 (이중 정체성)",
              "market": "KOSDAQ",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "안랩",
              "ticker": "053800",
              "role": "종합 보안 1위, AI 위협탐지·LLM 보안·거버넌스 확장",
              "market": "KOSDAQ",
              "confidence": "medium",
              "listed": true,
              "verified": true
            },
            {
              "name": "마음AI",
              "ticker": "377480",
              "role": "온디바이스·에이전트형 AI 솔루션 + 추론 비용 최적화",
              "market": "KOSDAQ",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "위세아이텍",
              "ticker": "065370",
              "role": "데이터 품질관리·AI 분석, 공공·금융 데이터 거버넌스",
              "market": "KOSDAQ",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "엑셈",
              "ticker": "205100",
              "role": "DB·시스템 성능관리(APM), AI 옵저버빌리티",
              "market": "KOSDAQ",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "한글과컴퓨터",
              "ticker": "030520",
              "role": "문서 SW AX + 디지털트윈·공간데이터 (인접)",
              "market": "KOSDAQ",
              "confidence": "medium",
              "listed": true,
              "verified": true
            },
            {
              "name": "자이언트스텝",
              "ticker": "289220",
              "role": "AI·실시간 렌더링 VFX, 디지털휴먼 제작",
              "market": "KOSDAQ",
              "confidence": "medium",
              "listed": true,
              "verified": true
            }
          ],
          "globalPlayers": [
            "OpenAI",
            "Anthropic",
            "Google DeepMind",
            "Microsoft (Copilot)",
            "Salesforce",
            "Palantir",
            "Databricks",
            "Snowflake",
            "CrowdStrike",
            "Tempus AI",
            "Scale AI",
            "Adobe (Firefly)"
          ]
        },
        {
          "sector": "히든·최먼 2차 파생 (Frontier Branches)",
          "tier": 3,
          "narrative": "AI 자본 연쇄의 가장 바깥 가지. 1차 수요(칩·전력)가 임계에 달하며 물리·자원·궤도의 한계로까지 수요가 밀려나는, 시장 내러티브가 아직 '공상' 또는 '차순위' 단계라 선반영이 거의 없는 최대 기대감 잠재 구간. 영구자석(중국 95% 장악)·우주 데이터센터·탄소포집(CCUS)·AI 신뢰인증/딥페이크 탐지가 대표. '연산을 더 쓸수록 아낄 방법·막을 방법·치울 방법을 파는 곳이 커지는' 역(逆)파생 구조가 공통 논리.",
          "hiddenMomentum": "AI 데이터센터 냉각팬·정밀 액추에이터·휴머노이드가 모두 네오디뮴 영구자석에 의존 → 중국 수출통제 강화 시 '탈중국 자석'이 전략 자산화(단 국내 양산사 대부분 비상장 — 환각 주의). AI 연산 물리 한계가 마침내 지구 밖으로 수요를 밀어내는 우주 데이터센터(2025년 말 인류 최초 시험가동, 한국 2030 실증 목표). 빅테크 탄소배출 급증(구글 +50%)이 CCU를 비용센터→규제 기반 의무 수요로 전환. 생성형 AI의 '신뢰 붕괴'가 딥페이크 탐지·생체인증을 규제 의무화로 끌어올리는 히든 모멘텀.",
          "koreanStocks": [
            {
              "name": "쎄트렉아이",
              "ticker": "099320",
              "role": "위성 제조·지구관측 — 우주 데이터센터 위성 본체 역량",
              "market": "KOSDAQ",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "한화시스템",
              "ticker": "272210",
              "role": "위성통신·저궤도 위성 사업",
              "market": "KOSPI",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "인텔리안테크",
              "ticker": "189300",
              "role": "위성통신 안테나(LEO 지상국)",
              "market": "KOSDAQ",
              "confidence": "medium",
              "listed": true,
              "verified": true
            },
            {
              "name": "한국정보인증",
              "ticker": "053300",
              "role": "디지털 신원인증·생체·딥페이크 탐지",
              "market": "KOSDAQ",
              "confidence": "medium",
              "listed": true,
              "verified": true
            },
            {
              "name": "샌즈랩",
              "ticker": "411080",
              "role": "AI 기반 위협 인텔리전스 분석",
              "market": "KOSDAQ",
              "confidence": "high",
              "listed": true,
              "verified": true
            },
            {
              "name": "아톤",
              "ticker": "158430",
              "role": "본인인증·간편인증 (딥페이크 금융사기 규제 수혜)",
              "market": "KOSDAQ",
              "confidence": "medium",
              "listed": true,
              "verified": true
            },
            {
              "name": "롯데정밀화학",
              "ticker": "004000",
              "role": "CO2 활용 화학소재(CCU 그린소재)",
              "market": "KOSPI",
              "confidence": "medium",
              "listed": true,
              "verified": true
            },
            {
              "name": "유니온",
              "ticker": "000910",
              "role": "희토류 자석 소재 페라이트 관련 (확인 필요)",
              "market": "KOSPI",
              "confidence": "low",
              "listed": true,
              "verified": true
            },
            {
              "name": "EG",
              "ticker": "037370",
              "role": "산화철·희소금속 소재 (확인 필요)",
              "market": "KOSDAQ",
              "confidence": "low",
              "listed": true,
              "verified": true
            }
          ],
          "globalPlayers": [
            "MP Materials",
            "Lynas Rare Earths",
            "SpaceX/Starlink",
            "Lonestar Data Holdings",
            "Occidental (1PointFive)",
            "Climeworks",
            "Reality Defender",
            "Holistic AI"
          ]
        }
      ]
    }
  ]
}
;
