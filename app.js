// ==========================================================================
// FitFriend Application Core Logic
// ==========================================================================

// Exercise Database Repository
const EXERCISE_DATABASE = [
    // --- 가슴 (Chest) ---
    {
        id: "bench_press",
        name: "바벨 벤치프레스",
        target: "가슴",
        equipment: "바벨",
        type: "compound",
        primaryMuscle: "대흉근 전체",
        secondaryMuscle: "전면 삼각근, 상완삼두근",
        steps: [
            "벤치에 누워 엉덩이와 발을 밀착시키고 허리는 자연스러운 아치를 만듭니다.",
            "바벨을 어깨너비보다 약간 넓게 잡고 가슴 중앙부와 수직이 되도록 들어 올립니다.",
            "숨을 들이마시며 바벨을 명치 아래 부근으로 천천히 통제하며 내립니다.",
            "가슴의 힘을 느끼며 바벨을 힘차게 밀어 올려 시작 위치로 돌아옵니다."
        ],
        caution: "어깨가 으쓱 올라가지 않도록 날개뼈를 아래로 고정(하강)시키고, 손목이 뒤로 꺾이지 않도록 수직 정렬을 유지해야 합니다.",
        videoLength: "1:05"
    },
    {
        id: "incline_dumbbell_press",
        name: "인클라인 덤벨 프레스",
        target: "가슴",
        equipment: "덤벨",
        type: "compound",
        primaryMuscle: "대흉근 상부 (윗가슴)",
        secondaryMuscle: "전면 삼각근, 상완삼두근",
        steps: [
            "30~40도 정도로 조절된 인클라인 벤치에 앉아 덤벨을 허벅지 위에 올려놓습니다.",
            "누우면서 덤벨을 가슴 위쪽으로 들어 올려 세로로 정렬합니다.",
            "팔꿈치 각도를 45-60도 정도로 벌리며 가슴 상부의 자극을 느껴가며 덤벨을 내립니다.",
            "수축 시 덤벨이 서로 모인다는 느낌으로 밀어 올리되, 덤벨끼리 부딪히지 않게 조절합니다."
        ],
        caution: "경사각이 너무 높으면 가슴보다 전면 삼각근(어깨)이 주동근이 되므로 45도 이하를 유지하고, 허리가 벤치에서 과도하게 뜨지 않도록 통제하세요.",
        videoLength: "0:52"
    },
    {
        id: "chest_press_machine",
        name: "체스트 프레스 머신",
        target: "가슴",
        equipment: "머신",
        type: "compound",
        primaryMuscle: "대흉근 전체",
        secondaryMuscle: "상완삼두근, 전면 삼각근",
        steps: [
            "등받이에 몸을 밀착시키고 손잡이 위치가 가슴 중앙(겨드랑이 선)에 오도록 안장 높이를 조절합니다.",
            "가슴을 활짝 열어 견갑을 고정하고 손잡이를 쥐어 잡습니다.",
            "가슴을 모아준다는 느낌으로 손잡이를 앞으로 힘차게 밀어냅니다.",
            "가슴근육의 텐션을 잃지 않고 천천히 뒤로 버티며 이완시킵니다."
        ],
        caution: "이완 시 어깨가 과도하게 뒤로 젖혀져 스트레스가 집중되지 않도록 가동범위를 가슴 높이까지만 제어하세요.",
        videoLength: "0:45"
    },
    {
        id: "pec_deck_fly",
        name: "펙덱 플라이 머신",
        target: "가슴",
        equipment: "머신",
        type: "isolation",
        primaryMuscle: "대흉근 내측 (안쪽 가슴)",
        secondaryMuscle: "전면 삼각근",
        steps: [
            "안장에 앉아 허리를 곧게 펴고 손잡이를 잡아 팔꿈치가 가슴 라인과 수평이 되게 셋팅합니다.",
            "안쪽 가슴을 쥐어짜듯이 팔을 반원 모양으로 넓게 그리며 몸 안쪽으로 끌어모읍니다.",
            "수축 끝 지점에서 가슴을 최대한 모아주고 숨을 내쉽니다.",
            "가슴 바깥쪽이 늘어나는 느낌을 통제하면서 천천히 원래 자세로 팔을 벌립니다."
        ],
        caution: "팔꿈치 각도가 접혔다 펴졌다 하면 프레스 동작으로 변질되므로 팔 각도를 고정한 상태로 어깨 관절만 움직이도록 제한하세요.",
        videoLength: "1:15"
    },
    {
        id: "push_up",
        name: "맨몸 푸쉬업",
        target: "가슴",
        equipment: "맨몸",
        type: "compound",
        primaryMuscle: "대흉근 전체",
        secondaryMuscle: "전면 삼각근, 상완삼두근, 코어 근육",
        steps: [
            "엎드린 상태에서 손을 어깨너비보다 넓게 짚고 머리부터 발끝까지 일직선이 되도록 코어에 힘을 줍니다.",
            "숨을 들이마시며 팔꿈치를 굽혀 가슴이 바닥에 거의 닿을 때까지 몸 전체를 내립니다.",
            "겨드랑이에 힘을 준다는 느낌으로 지면을 밀어내어 몸을 올립니다.",
            "끝까지 올라와서도 몸의 일직선 라인을 곧게 유지합니다."
        ],
        caution: "등이 구부러지거나 엉덩이가 아래로 처지면 허리에 큰 부담이 가므로 배와 엉덩이에 단단히 힘을 주어 척추 중립을 유지하세요.",
        videoLength: "1:30"
    },

    // --- 등 (Back) ---
    {
        id: "deadlift",
        name: "바벨 데드리프트",
        target: "등",
        equipment: "바벨",
        type: "compound",
        primaryMuscle: "척추기립근, 광배근, 하체 후면부(둔근, 햄스트링)",
        secondaryMuscle: "대원근, 승모근, 코어",
        steps: [
            "정강이가 바에 닿을 듯 서서 발을 골반 너비로 벌립니다.",
            "허리를 곧게 편 채로 엉덩이를 뒤로 빼며 무릎을 굽히고 어깨 너비로 바를 잡습니다.",
            "정강이를 바에 밀착시키고 복압을 채운 뒤, 가슴을 열어 허리 중립을 맞춥니다.",
            "발바닥으로 바닥을 밀어내며 바가 몸을 타고 수직으로 올라오게 일어섭니다."
        ],
        caution: "리프팅 시 등을 둥글게 말거나, 마지막 일어선 자세에서 허리를 과도하게 뒤로 꺾으면 요추 부상을 유발할 수 있습니다.",
        videoLength: "1:40"
    },
    {
        id: "lat_pulldown",
        name: "랫 풀 다운 머신",
        target: "등",
        equipment: "머신",
        type: "compound",
        primaryMuscle: "광배근 상부, 대원근",
        secondaryMuscle: "상완이두근, 능형근, 승모근 하부",
        steps: [
            "바를 어깨너비보다 한 뼘씩 더 넓게 잡고 허벅지 지지대를 단단히 고정하여 앉습니다.",
            "쇄골 아랫부분으로 바가 떨어지도록 가슴을 비스듬히 위로 들어 눕는 각도를 만듭니다.",
            "팔꿈치를 옆구리 안쪽으로 당긴다는 느낌으로 바를 아래로 끌어내립니다.",
            "등 근육의 긴장감을 놓지 않으며 팔을 서서히 펴 이완시킵니다."
        ],
        caution: "바를 내릴 때 상체가 과도하게 뒤로 눕거나 팔 힘으로만 끌어당기면 등 자극이 반감되니 견갑골을 꽉 접는 자극에 집중하세요.",
        videoLength: "1:02"
    },
    {
        id: "dumbbell_row",
        name: "원 암 덤벨 로우",
        target: "등",
        equipment: "덤벨",
        type: "compound",
        primaryMuscle: "광배근 하부, 능형근",
        secondaryMuscle: "상완이두근, 후면 삼각근",
        steps: [
            "한쪽 무릎과 손을 플랫 벤치 위에 짚고, 반대쪽 다리는 바닥을 딛고 상체를 수평으로 숙입니다.",
            "바닥 쪽 손에 덤벨을 쥐고 팔을 수직으로 자연스럽게 늘어뜨립니다.",
            "팔꿈치로 덤벨을 골반(엉덩이) 방향으로 당긴다는 느낌으로 등을 꽉 쥐어짭니다.",
            "등 광배근 하부가 쭉 늘어나는 느낌을 조절하며 덤벨을 천천히 내립니다."
        ],
        caution: "덤벨을 수직으로 너무 들어올려 어깨가 귀에 가까워지면 승모근 상부가 개입되므로, 어깨를 고정하고 호를 그리듯 당기세요.",
        videoLength: "0:58"
    },
    {
        id: "pull_up",
        name: "맨몸 턱걸이 (풀업)",
        target: "등",
        equipment: "맨몸",
        type: "compound",
        primaryMuscle: "광배근, 대원근",
        secondaryMuscle: "상완이두근, 전완근, 능형근",
        steps: [
            "바를 어깨너비보다 넓게 오버그립으로 꽉 잡아 매달립니다.",
            "날개뼈를 아래로 끌어당긴 후(숄더패킹), 가슴을 열고 쇄골을 바에 밀착시키듯 몸을 끌어올립니다.",
            "턱이 바 위로 넘어가는 끝 지점에서 등에 강한 수축을 느껴줍니다.",
            "중력을 버티며 천천히 팔을 펴서 맨 처음 매달린 자세로 내려옵니다."
        ],
        caution: "반동(키핑)을 지나치게 주거나, 힘이 풀려 내려올 때 한 번에 툭 떨어지면 어깨 관절에 심각한 충격이 가해집니다.",
        videoLength: "1:20"
    },

    // --- 어깨 (Shoulders) ---
    {
        id: "overhead_press",
        name: "바벨 오버헤드 프레스",
        target: "어깨",
        equipment: "바벨",
        type: "compound",
        primaryMuscle: "전면 삼각근, 측면 삼각근",
        secondaryMuscle: "상완삼두근, 승모근 상부",
        steps: [
            "랙에서 바벨을 어깨너비보다 약간 넓게 잡고 쇄골 윗부분에 얹어 언랙합니다.",
            "코어와 엉덩이에 단단히 힘을 주어 몸이 흔들리지 않게 고정합니다.",
            "머리가 바를 피할 수 있도록 턱을 살짝 당기고, 바벨을 수직 위로 강하게 밀어 올립니다.",
            "바벨이 머리 위 최고점에 도달하면 팔꿈치를 완전히 펴주고 통제하며 가슴 상부로 내립니다."
        ],
        caution: "바벨을 들어 올릴 때 등을 과도하게 뒤로 꺾어 활 모양으로 눕게 되면 허리에 심각한 부상을 초래할 수 있으니 둔근 힘을 꽉 유지하세요.",
        videoLength: "1:12"
    },
    {
        id: "dumbbell_shoulder_press",
        name: "덤벨 숄더 프레스",
        target: "어깨",
        equipment: "덤벨",
        type: "compound",
        primaryMuscle: "전면 삼각근, 측면 삼각근",
        secondaryMuscle: "상완삼두근",
        steps: [
            "각도를 수직에 가깝게 조절한 등받이 벤치에 엉덩이를 꽉 밀착하여 앉습니다.",
            "덤벨을 귀 높이까지 양손에 들어 올리고, 팔꿈치와 전완이 바닥과 수직이 되게 합니다.",
            "숨을 내쉬면서 덤벨이 포물선을 그리며 정수리 위에서 가까워지도록 수직으로 밀어 올립니다.",
            "어깨 근육의 긴장을 버티면서 덤벨을 귀 위치까지 천천히 수평을 맞춰 내립니다."
        ],
        caution: "덤벨을 내릴 때 팔꿈치가 뒤로 빠지면 어깨 관절 전면부에 큰 회전 스트레스가 가해지므로 팔꿈치는 항상 전면을 살짝 향하게 셋팅하세요.",
        videoLength: "0:50"
    },
    {
        id: "lateral_raise",
        name: "덤벨 사이드 레터럴 레이즈",
        target: "어깨",
        equipment: "덤벨",
        type: "isolation",
        primaryMuscle: "측면 삼각근",
        secondaryMuscle: "승모근 상부, 전면 삼각근",
        steps: [
            "양손에 가벼운 덤벨을 쥐고 발을 어깨너비로 벌려 곧게 서거나 상체를 살짝 5도 굽힙니다.",
            "팔꿈치를 아주 살짝만 굽혀 고정하고, 덤벨을 옆으로 밀어낸다는 느낌으로 양팔을 옆으로 들어 올립니다.",
            "손목이 팔꿈치보다 높지 않게 통제하며 어깨 높이 부근까지만 올렸다가 내립니다.",
            "내려올 때도 측면 삼각근의 저항을 느끼며 허벅지 옆에서 약간 띄운 지점까지 버팁니다."
        ],
        caution: "승모근이 개입되어 어깨가 위로 솟구치지 않도록 주의하고, 지나치게 무거운 무게를 사용해 몸의 반동(치팅)을 이용하지 마세요.",
        videoLength: "1:08"
    },
    {
        id: "shoulder_press_machine",
        name: "숄더 프레스 머신",
        target: "어깨",
        equipment: "머신",
        type: "compound",
        primaryMuscle: "전면 삼각근",
        secondaryMuscle: "측면 삼각근, 상완삼두근",
        steps: [
            "머신 손잡이가 귀 혹은 턱 높이에 오도록 시트 높낮이를 세밀하게 조정하여 앉습니다.",
            "등을 곧게 펴고 뒤통수와 등받이를 착 밀착한 채 양쪽 손잡이를 잡습니다.",
            "팔꿈치를 구부린 상태에서 하늘을 향해 지긋이 손잡이를 밀어 올립니다.",
            "무게의 저항을 부드럽게 버티며 귀 높이 기준선까지 내립니다."
        ],
        caution: "손잡이를 너무 좁게 잡거나 팔꿈치가 안쪽으로 과도하게 모이면 어깨의 회전 압박이 심해지므로 주의하십시오.",
        videoLength: "0:48"
    },

    // --- 하체 (Legs) ---
    {
        id: "squat",
        name: "바벨 백스쿼트",
        target: "하체",
        equipment: "바벨",
        type: "compound",
        primaryMuscle: "대퇴사두근, 대둔근 (엉덩이)",
        secondaryMuscle: "햄스트링, 척추기립근, 코어",
        steps: [
            "바벨을 승모근 상부에 얹고 발을 골반 너비보다 조금 넓게 벌려 서고 발끝을 15도 정도 바깥으로 엽니다.",
            "코어 복압을 꽉 채워 허리를 반듯하게 고정한 채, 의자에 앉듯이 골반을 뒤로 빼며 내려갑니다.",
            "무릎이 발끝 방향과 일치하게 벌어지도록 하며, 허벅지가 지면과 최소 평행 혹은 그 이하가 될 때까지 앉습니다.",
            "발바닥 전체로 지면을 지긋이 밀어내는 반발력으로 시작 자세까지 상체를 꼿꼿이 세워 올라옵니다."
        ],
        caution: "주저앉을 때 무릎이 안쪽으로 모이거나(무릎 붕괴), 꼬리뼈가 말려 들어가는 버트윙크(Butt Wink) 현상이 일어나지 않도록 고관절 유연성에 맞춰 깊이를 통제하세요.",
        videoLength: "1:55"
    },
    {
        id: "dumbbell_lunge",
        name: "덤벨 런지",
        target: "하체",
        equipment: "덤벨",
        type: "compound",
        primaryMuscle: "대둔근, 대퇴사두근",
        secondaryMuscle: "햄스트링, 종아리",
        steps: [
            "양손에 적정한 무겁지 않은 덤벨을 늘어뜨려 쥐고 곧게 섭니다.",
            "한쪽 발을 앞으로 넓게(보폭의 약 1.5배) 내딛습니다.",
            "뒤쪽 다리 무릎이 바닥에 거의 닿기 직전까지 수직 하강하되, 앞쪽 다리 허벅지는 바닥과 평행이 되게 굽힙니다.",
            "앞쪽 발꿈치로 바닥을 쳐서 밀며 상체를 수직으로 세워 다시 준비 자세로 복귀합니다."
        ],
        caution: "앞발 무릎이 발가락 끝선보다 과도하게 앞으로 밀려 나가면 슬개골 통증을 유발할 수 있으므로, 상체가 앞으로 쏠리지 않도록 통제하세요.",
        videoLength: "1:00"
    },
    {
        id: "leg_press",
        name: "레그 프레스 머신",
        target: "하체",
        equipment: "머신",
        type: "compound",
        primaryMuscle: "대퇴사두근, 대둔근",
        secondaryMuscle: "햄스트링",
        steps: [
            "머신 등받이에 엉덩이와 등, 요추를 깊숙이 완전히 고정해 눕습니다.",
            "발판에 발을 어깨너비로 대고, 안전바를 푼 뒤 천천히 다리를 굽혀 무게를 받아냅니다.",
            "무릎이 가슴 옆 겨드랑이를 향해 들어오는 깊이까지 무릎을 굽혀 이완시킵니다.",
            "발뒤꿈치 힘으로 밀어내듯이 발판을 힘차게 대각선 위로 밉니다."
        ],
        caution: "다리를 밀었을 때 무릎을 완전히 쭉 펴서 관절을 락킹(Locking)하면 관절 손상이 크게 발생할 수 있으므로 무릎은 95%만 펴주십시오. 엉덩이가 등받이에서 떨어지면 안 됩니다.",
        videoLength: "1:10"
    },
    {
        id: "leg_extension",
        name: "레그 익스텐션 머신",
        target: "하체",
        equipment: "머신",
        type: "isolation",
        primaryMuscle: "대퇴사두근 (허벅지 앞쪽)",
        secondaryMuscle: "없음 (단일관절 고립)",
        steps: [
            "등받이를 조절해 엉덩이를 끝까지 밀착하고 발목 패드가 복사뼈 윗부근에 오도록 셋팅합니다.",
            "손잡이를 꽉 움켜쥐어 몸이 붕 뜨지 않게 고정하고, 다리를 밀어 올려 허벅지 앞쪽을 곧게 폅니다.",
            "최고점 수축 지점에서 1초간 머물며 대퇴사두근을 조여줍니다.",
            "무게 저항을 지긋이 이겨내며 발목을 천천히 아래로 내려 시작자세로 이완합니다."
        ],
        caution: "무게를 확 던지듯이 찼다가 수직 낙하하듯 패드가 돌아가면 관절에 타격이 가므로 부드러운 호를 그리듯 일정한 속도를 컨트롤하세요.",
        videoLength: "0:42"
    },
    {
        id: "air_squat",
        name: "맨몸 에어스쿼트",
        target: "하체",
        equipment: "맨몸",
        type: "compound",
        primaryMuscle: "대퇴사두근, 대둔근",
        secondaryMuscle: "코어 근육",
        steps: [
            "발을 어깨너비만큼 벌리고 발가락은 살짝 바깥을 향하게 섭니다.",
            "양손을 앞으로 가볍게 뻗어 균형을 잡으며 엉덩이를 뒤로 내립니다.",
            "허리의 곡선을 유지하며 엉덩이가 무릎 높이 아래로 올 때까지 서서히 앉습니다.",
            "발 전체로 바닥을 딛고 힘껏 펴 올라옵니다."
        ],
        caution: "일어설 때 상체를 먼저 과도하게 숙여 엉덩이만 먼저 들리게 일어서면 허리에 로드가 몰리니 하체로 먼저 딛고 올라오세요.",
        videoLength: "0:50"
    },

    // --- 복근 (Abs) ---
    {
        id: "crunch",
        name: "맨몸 크런치",
        target: "복근",
        equipment: "맨몸",
        type: "isolation",
        primaryMuscle: "복직근 상부 (윗복근)",
        secondaryMuscle: "외복사근",
        steps: [
            "바닥에 누워 무릎을 굽히고 발바닥을 바닥에 붙입니다. 손은 머리 뒤에 살포시 얹거나 가슴 위에 엑스자로 겹칩니다.",
            "날개뼈가 바닥에서 약 5~10cm 정도만 떨어질 때까지 명치를 기준으로 상복부를 둥글게 말아 올립니다.",
            "정점에서 복부를 한 번 쥐어짠 후 호흡을 뱉습니다.",
            "머리가 바닥에 완전히 닿아 이완이 다 풀리기 직전까지 상체를 서서히 내립니다."
        ],
        caution: "손으로 목을 깍지 껴 억지로 잡아당기면 경추에 과한 부하가 걸리므로 턱을 당기고 복부 수축 힘으로만 일어나야 합니다.",
        videoLength: "0:45"
    },
    {
        id: "hanging_leg_raise",
        name: "행잉 레그 레이즈",
        target: "복근",
        equipment: "맨몸",
        type: "isolation",
        primaryMuscle: "복직근 하부 (아랫복근)",
        secondaryMuscle: "장요근",
        steps: [
            "철봉을 오버그립으로 쥐고 몸이 흔들리지 않게 매달려 코어를 긴장시킵니다.",
            "몸 반동을 주지 않고 골반을 위로 말아 올리면서 다리를 복부 방향으로 들어 올립니다.",
            "아랫배가 완전히 접혀 둥글게 수축되는 텐션을 느낍니다.",
            "다리가 툭 떨어지지 않게 복부 힘으로 다리 무게를 지지하며 천천히 수직으로 내립니다."
        ],
        caution: "단순히 다리만 올리면 엉덩이 굴곡근(장요근)만 쓰이게 되므로, 골반 자체를 위로 감아 올려 둥글게 마는 연습을 우선 시도하세요.",
        videoLength: "1:15"
    },
    {
        id: "abdominal_machine",
        name: "어브도미널 크런치 머신",
        target: "복근",
        equipment: "머신",
        type: "isolation",
        primaryMuscle: "복직근 전체",
        secondaryMuscle: "없음",
        steps: [
            "기구 안장에 앉아 등받이 뒤에 허리를 밀착하고 머리 뒤 가슴 앞 손잡이를 움켜잡습니다.",
            "발목을 고정 패드 뒤에 고정한 상태에서 숨을 내쉬며 상체를 아래로 둥글게 구부려 수축합니다.",
            "배꼽을 안으로 쏙 넣는 느낌으로 꽉 수축을 줍니다.",
            "복부의 긴장을 느끼며 상체를 천천히 뒤로 펴서 저항을 받아냅니다."
        ],
        caution: "팔 힘이나 다리 반동으로 밀면 복부 훈련 효과가 떨어지니 등받이를 축으로 복부 척추 마디마디를 굽히는 자극에 집중하십시오.",
        videoLength: "0:50"
    },

    // --- 이두 (Biceps) ---
    {
        id: "barbell_curl",
        name: "바벨 컬",
        target: "이두",
        equipment: "바벨",
        type: "isolation",
        primaryMuscle: "상완이두근 전체",
        secondaryMuscle: "전완근",
        steps: [
            "발을 어깨너비로 벌리고 바벨을 어깨너비로 언더그립(손바닥이 하늘을 봄)으로 잡고 바르게 섭니다.",
            "옆구리에 팔꿈치를 바짝 밀착 고정하고, 원을 그리듯 바벨을 가슴 높이 부근까지 감아올립니다.",
            "정점에서 이두근을 꽉 쥐어짜 수축시키고 호흡을 뱉습니다.",
            "이두근에 가해지는 바벨의 무게 저항을 버티면서 천천히 팔을 폅니다."
        ],
        caution: "바벨을 들어 올리기 위해 허리를 뒤로 꺾어 반동(치팅)을 이용하지 마세요. 팔꿈치가 앞뒤로 너무 움직이면 삼각근이 개입됩니다.",
        videoLength: "0:58"
    },
    {
        id: "dumbbell_curl",
        name: "덤벨 컬",
        target: "이두",
        equipment: "덤벨",
        type: "isolation",
        primaryMuscle: "상완이두근 장두/단두",
        secondaryMuscle: "완요골근, 전완근",
        steps: [
            "양손에 덤벨을 들고 손바닥이 몸쪽을 향하게(뉴트럴 그립) 차렷 자세로 섭니다.",
            "덤벨을 감아 올리면서 손목을 바깥쪽으로 서서히 회외(Supination, 손바닥이 얼굴을 보게 함)시킵니다.",
            "이두근 수축을 최대로 유도한 후 이완 시 회내하면서 아래 위치로 낮춰갑니다.",
            "양손을 교대로 진행하거나 동시에 올려 진행할 수 있습니다."
        ],
        caution: "손목이 꺾이거나 움직임이 일찍 발생하면 전완근에 부하를 빼앗기므로 이두근의 회전에 집중하여 덤벨을 꽉 쥐십시오.",
        videoLength: "0:55"
    },
    {
        id: "biceps_curl_machine",
        name: "암 컬 머신 (프리처 컬 머신)",
        target: "이두",
        equipment: "머신",
        type: "isolation",
        primaryMuscle: "상완이두근 단두",
        secondaryMuscle: "전완근",
        steps: [
            "머신 패드 경사면에 겨드랑이를 완전히 고착하여 밀착시키고 시트 안장에 앉습니다.",
            "그립을 잡고 손바닥이 하늘을 본 상태에서 팔꿈치를 패드에 붙입니다.",
            "팔꿈치가 뜨지 않게 유지하면서 바를 몸 쪽으로 부드럽게 감아 당깁니다.",
            "팔이 완전히 일직선이 되기 직전까지 이두 긴장을 유도하며 늘려 줍니다."
        ],
        caution: "이완 시 팔꿈치를 100% 쫙 펴면 관절에 매우 큰 스트레스와 건 파열 위험이 오니 95% 수준에서 멈추어 텐션을 잃지 마세요.",
        videoLength: "0:46"
    },

    // --- 삼두 (Triceps) ---
    {
        id: "lying_triceps_extension",
        name: "라잉 트라이셉스 익스텐션",
        target: "삼두",
        equipment: "바벨",
        type: "isolation",
        primaryMuscle: "상완삼두근 장두",
        secondaryMuscle: "전완근, 팔꿈치 관절",
        steps: [
            "플랫 벤치에 누워 바(EZ바 권장)를 어깨너비보다 조금 좁게 잡아 가슴 위로 뻗습니다.",
            "팔꿈치를 안으로 모으고 수직보다 10도 가량 머리 쪽으로 기울여 삼두에 텐션을 줍니다.",
            "팔꿈치 위치를 흔들리지 않게 고정한 채 바를 이마 또는 정수리 뒤쪽을 향해 천천히 내립니다.",
            "삼두근의 힘으로 팔꿈치를 힘차게 밀어 펴서 머리 위 위치로 들어 올립니다."
        ],
        caution: "팔꿈치가 좌우로 심하게 벌어지면 팔꿈치 관절염이나 인대 부상을 야기할 수 있으므로 두 팔을 평행하게 가둬두세요.",
        videoLength: "1:05"
    },
    {
        id: "triceps_pushdown",
        name: "케이블 트라이셉스 푸쉬다운",
        target: "삼두",
        equipment: "머신",
        type: "isolation",
        primaryMuscle: "상완삼두근 외측두/내측두",
        secondaryMuscle: "전면 삼각근",
        steps: [
            "케이블 도르래를 높은 곳에 조절하고 스트레이트 바나 로프를 손바닥이 아래로 향하게 잡습니다.",
            "팔꿈치를 옆구리에 고정하고 상체를 살짝 5도 앞으로 숙입니다.",
            "옆구리에 박힌 고정 장치처럼 팔꿈치를 고정한 후, 지면을 향해 바/로프를 힘껏 밀어 펴 내립니다.",
            "수축 지점에서 삼두근을 강하게 쥐어짠 후 역저항을 느끼며 가슴 높이 부근까지 천천히 올려 이완시킵니다."
        ],
        caution: "손잡이를 다시 올릴 때 팔꿈치가 옆구리에서 탈탈 털리며 올라가면 삼두 운동이 아닌 등 운동이 되므로 고정에 각별히 주의하십시오.",
        videoLength: "0:50"
    },
    {
        id: "dumbbell_overhead_extension",
        name: "원 암 덤벨 오버헤드 익스텐션",
        target: "덤벨",
        equipment: "덤벨",
        type: "isolation",
        primaryMuscle: "상완삼두근 장두",
        secondaryMuscle: "없음",
        steps: [
            "등받이에 바르게 앉아 한 손에 덤벨을 쥐고 머리 위로 수직으로 뻗어 올려 팔꿈치를 지지합니다.",
            "반대쪽 손으로 동작하는 팔의 팔꿈치를 앞쪽으로 받쳐 고정해 줍니다.",
            "팔꿈치를 구부려 덤벨을 뒤통수 뒤 아랫방향으로 서서히 떨어뜨려 삼두를 넓게 늘립니다.",
            "삼두근 수축력을 이용해 덤벨을 다시 머리 위로 수직 리프팅 합니다."
        ],
        caution: "덤벨이 뒤로 내려갈 때 귀와 너무 가까워 머리에 닿거나 손목 제어를 잃지 않도록 저중량으로 숙달하십시오.",
        videoLength: "0:55"
    }
];

// App Controller State
class FitFriendApp {
    constructor() {
        this.currentStep = 1;
        this.totalSteps = 5;
        this.currentView = "home-view";
        this.wizardData = {
            target: "가슴",
            goal: "근비대",
            level: "초보",
            duration: "60분",
            equipment: ["머신", "덤벨", "바벨"]
        };
        this.currentGeneratedRoutine = null;
        this.savedRoutines = [];

        this.init();
    }

    init() {
        this.loadSavedRoutines();
        this.bindEvents();
        this.renderStep();
        this.updateProgressBar();
    }

    // Navigation and Routing
    navigateTo(viewId) {
        // Deactivate all views
        document.querySelectorAll('.app-view').forEach(view => {
            view.classList.remove('active');
        });

        // Activate targeted view
        const targetView = document.getElementById(viewId);
        if (targetView) {
            targetView.classList.add('active');
            this.currentView = viewId;
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Update nav active states
        document.querySelectorAll('.nav-btn').forEach(btn => {
            if (btn.getAttribute('data-target') === viewId) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Custom triggers when changing views
        if (viewId === 'my-routines-view') {
            this.renderSavedRoutines();
        } else if (viewId === 'wizard-view') {
            this.resetWizard();
        }
    }

    bindEvents() {
        // Logo click -> home
        document.getElementById('logo-btn').addEventListener('click', () => {
            this.navigateTo('home-view');
        });

        // Top Navigation buttons
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const target = e.target.getAttribute('data-target');
                this.navigateTo(target);
            });
        });

        // Wizard buttons
        document.getElementById('wizard-next-btn').addEventListener('click', () => this.nextStep());
        document.getElementById('wizard-prev-btn').addEventListener('click', () => this.prevStep());

        // Routine save button action
        document.getElementById('save-routine-btn').addEventListener('click', () => {
            if (!this.currentGeneratedRoutine) return;
            // Open save dialog Modal
            const dialog = document.getElementById('save-dialog');
            const input = document.getElementById('routine-save-name');
            // Auto pre-populate a nice name
            input.value = `오늘의 ${this.wizardData.target} 루틴 (${this.wizardData.duration})`;
            dialog.classList.remove('hidden');
        });

        // Dialog close actions
        document.getElementById('dialog-cancel-btn').addEventListener('click', () => {
            document.getElementById('save-dialog').classList.add('hidden');
        });

        document.getElementById('dialog-confirm-btn').addEventListener('click', () => {
            const nameInput = document.getElementById('routine-save-name').value.trim();
            const name = nameInput || `나의 ${this.wizardData.target} 루틴`;
            this.saveCurrentRoutine(name);
            document.getElementById('save-dialog').classList.add('hidden');
            this.showToast('루틴이 성공적으로 저장되었습니다!');
            this.navigateTo('my-routines-view');
        });

        // Exercise Drawer close
        document.getElementById('close-drawer-btn').addEventListener('click', () => {
            document.getElementById('exercise-drawer').classList.add('hidden');
        });

        // Close drawer clicking on background overlay
        document.getElementById('exercise-drawer').addEventListener('click', (e) => {
            if (e.target.id === 'exercise-drawer') {
                document.getElementById('exercise-drawer').classList.add('hidden');
            }
        });
    }

    // Wizard Controls
    resetWizard() {
        this.currentStep = 1;
        this.renderStep();
        this.updateProgressBar();
    }

    nextStep() {
        if (this.currentStep < this.totalSteps) {
            // Validate step 5: Equipment must have at least 1 checked option
            if (this.currentStep === 4) {
                // Moving to step 5 -> check equipment when leaving step 5
            }
            this.currentStep++;
            this.renderStep();
            this.updateProgressBar();
        } else {
            // On Step 5: Click next means generate!
            this.gatherWizardData();
            
            // Validate: check if equipment is chosen
            if (this.wizardData.equipment.length === 0) {
                alert("사용 가능한 장비를 최소 하나 이상 선택해 주세요!");
                return;
            }

            this.generateRoutine();
        }
    }

    prevStep() {
        if (this.currentStep > 1) {
            this.currentStep--;
            this.renderStep();
            this.updateProgressBar();
        }
    }

    updateProgressBar() {
        const progressPercent = (this.currentStep / this.totalSteps) * 100;
        document.getElementById('wizard-progress').style.width = `${progressPercent}%`;
        document.getElementById('step-indicator').innerText = `Step ${this.currentStep} of ${this.totalSteps}`;
    }

    renderStep() {
        document.querySelectorAll('.wizard-step').forEach(step => {
            step.classList.remove('active');
        });
        document.querySelector(`.wizard-step[data-step="${this.currentStep}"]`).classList.add('active');

        // Toggle visibility of prev button
        const prevBtn = document.getElementById('wizard-prev-btn');
        if (this.currentStep === 1) {
            prevBtn.classList.add('hidden');
        } else {
            prevBtn.classList.remove('hidden');
        }

        // Change text of Next button on final step
        const nextBtn = document.getElementById('wizard-next-btn');
        if (this.currentStep === this.totalSteps) {
            nextBtn.innerText = "루틴 생성하기 🚀";
        } else {
            nextBtn.innerText = "다음 단계";
        }
    }

    gatherWizardData() {
        // Step 1: Target
        this.wizardData.target = document.querySelector('input[name="workout-target"]:checked').value;
        // Step 2: Goal
        this.wizardData.goal = document.querySelector('input[name="workout-goal"]:checked').value;
        // Step 3: Level
        this.wizardData.level = document.querySelector('input[name="workout-level"]:checked').value;
        // Step 4: Duration
        this.wizardData.duration = document.querySelector('input[name="workout-duration"]:checked').value;
        
        // Step 5: Equipment
        const checkboxes = document.querySelectorAll('input[name="workout-equipment"]:checked');
        this.wizardData.equipment = Array.from(checkboxes).map(cb => cb.value);
    }

    // Recommendation AI Engine
    generateRoutine() {
        const target = this.wizardData.target;
        const equipment = this.wizardData.equipment;
        const goal = this.wizardData.goal;
        const level = this.wizardData.level;
        const duration = this.wizardData.duration;

        // 1. Filter exercises matching target muscle and chosen equipment
        let pool = EXERCISE_DATABASE.filter(ex => {
            return ex.target === target && equipment.includes(ex.equipment);
        });

        // Fallback: If no exact equipment matches (e.g. they chose 맨몸 but no calisthenics exist for a specific tiny muscle),
        // pull machine/dumbbell matching target to avoid returning empty array.
        if (pool.length === 0) {
            pool = EXERCISE_DATABASE.filter(ex => ex.target === target);
        }

        // 2. Sort: Compound exercises first, then isolation exercises
        pool.sort((a, b) => {
            if (a.type === 'compound' && b.type === 'isolation') return -1;
            if (a.type === 'isolation' && b.type === 'compound') return 1;
            return 0;
        });

        // 3. Determine number of exercises based on duration
        let numExercises = 4; // default 60분
        if (duration === "30분") numExercises = 3;
        else if (duration === "60분") numExercises = 4;
        else if (duration === "90분") numExercises = 5;
        else if (duration === "90분 이상") numExercises = 7;

        // Slice list to target count
        let selectedExercises = pool.slice(0, numExercises);

        // 4. Calculate Sets, Reps, Rest, and RIR guidelines based on Goal and Level
        let sets = 4;
        let reps = "8~12회";
        let rest = "90초";
        let rirValue = "RIR 2";

        if (goal === "근비대") {
            sets = level === "초보" ? 3 : 4;
            reps = "8~12회";
            rest = "90초";
            rirValue = "RIR 2";
        } else if (goal === "체지방 감량") {
            sets = level === "초보" ? 3 : 4;
            reps = "15~20회";
            rest = "60초";
            rirValue = "RIR 2";
        } else if (goal === "체력 향상") {
            sets = level === "초보" ? 4 : 5;
            reps = "5~8회";
            rest = "180초";
            rirValue = level === "초보" ? "RIR 2" : "RIR 1~2";
        }

        // Map computed fields onto routine items
        const routineItems = selectedExercises.map((ex, index) => {
            // Compound get slightly more rest and fewer reps sometimes
            let itemSets = sets;
            let itemReps = reps;
            let itemRest = rest;

            if (ex.type === 'isolation') {
                itemReps = goal === "체력 향상" ? "10~12회" : reps; // isolation should rarely do 5 reps
                itemRest = goal === "체력 향상" ? "90초" : rest;
            }

            return {
                exercise: ex,
                order: index + 1,
                sets: itemSets,
                reps: itemReps,
                rest: itemRest
            };
        });

        this.currentGeneratedRoutine = {
            id: Date.now().toString(),
            name: `오늘의 ${target} 루틴`,
            date: new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' }),
            target: target,
            goal: goal,
            level: level,
            duration: duration,
            rir: rirValue,
            items: routineItems
        };

        // Render routine
        this.renderResults();
        this.navigateTo('results-view');
    }

    renderResults() {
        const routine = this.currentGeneratedRoutine;
        if (!routine) return;

        // Update header information
        document.getElementById('results-badge-level').innerText = `${routine.level}자용 / ${routine.goal}`;
        document.getElementById('results-title-text').innerText = `나의 맞춤형 ${routine.target} 운동 루틴`;
        document.getElementById('results-metric-time').innerText = routine.duration;
        document.getElementById('results-metric-count').innerText = `${routine.items.length}개`;
        document.getElementById('results-metric-rir').innerText = routine.rir;

        // Populate exercise cards
        const listContainer = document.getElementById('recommended-exercises-list');
        listContainer.innerHTML = '';

        routine.items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'rec-exercise-card';
            card.innerHTML = `
                <div class="ex-info-left">
                    <div class="ex-order-badge">${item.order}</div>
                    <div class="ex-name-group">
                        <h4>${item.exercise.name}</h4>
                        <div class="ex-tags">
                            <span class="ex-tag">${item.exercise.equipment}</span>
                            <span class="ex-tag accent">${item.exercise.type === 'compound' ? '복합다관절' : '단일관절 고립'}</span>
                        </div>
                    </div>
                </div>
                <div class="ex-params-right">
                    <div class="ex-grid-specs">
                        <div class="spec-box">
                            <span class="spec-val">${item.sets}세트</span>
                            <span class="spec-lbl">세트 수</span>
                        </div>
                        <div class="spec-box">
                            <span class="spec-val">${item.reps}</span>
                            <span class="spec-lbl">목표 횟수</span>
                        </div>
                        <div class="spec-box">
                            <span class="spec-val">${item.rest}</span>
                            <span class="spec-lbl">휴식시간</span>
                        </div>
                    </div>
                    <button class="btn btn-secondary btn-sm" onclick="app.showExerciseDetail('${item.exercise.id}')">자세 보기</button>
                </div>
            `;
            listContainer.appendChild(card);
        });
    }

    showExerciseDetail(exerciseId) {
        const exercise = EXERCISE_DATABASE.find(ex => ex.id === exerciseId);
        if (!exercise) return;

        const drawerContent = document.getElementById('drawer-body-content');
        
        // Build steps markup
        const stepsLi = exercise.steps.map((step, idx) => {
            return `<li><span class="step-num">${idx + 1}</span>${step}</li>`;
        }).join('');

        drawerContent.innerHTML = `
            <div class="detail-title-group">
                <h2>${exercise.name}</h2>
                <div class="detail-meta-tags">
                    <span class="arch-badge target">${exercise.target}</span>
                    <span class="arch-badge duration">${exercise.equipment}</span>
                </div>
            </div>

            <!-- Muscle Map Diagram Mock -->
            <div class="muscle-map-container">
                <svg class="muscle-diagram" viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <!-- Head -->
                    <circle cx="50" cy="18" r="10" stroke="currentColor" stroke-width="2"/>
                    <!-- Neck -->
                    <line x1="50" y1="28" x2="50" y2="35" stroke="currentColor" stroke-width="2"/>
                    <!-- Chest / Torso -->
                    <path d="M30 35 H70 V75 H30 Z" stroke="currentColor" stroke-width="2" fill="rgba(16, 185, 129, 0.1)"/>
                    <!-- Highlighted Target area (chest/back/legs simulation) -->
                    ${this.getMuscleHighlightSvg(exercise.target)}
                    <!-- Arms -->
                    <path d="M28 38 L15 75" stroke="currentColor" stroke-width="2"/>
                    <path d="M72 38 L85 75" stroke="currentColor" stroke-width="2"/>
                    <!-- Legs -->
                    <path d="M40 75 L38 130" stroke="currentColor" stroke-width="2"/>
                    <path d="M60 75 L62 130" stroke="currentColor" stroke-width="2"/>
                </svg>
                <div class="muscle-labels">
                    <div class="muscle-lbl-item">
                        <span class="muscle-lbl-title">주동근 (Primary)</span>
                        <span class="muscle-lbl-val primary">${exercise.primaryMuscle}</span>
                    </div>
                    <div class="muscle-lbl-item">
                        <span class="muscle-lbl-title">보조근 (Secondary)</span>
                        <span class="muscle-lbl-val secondary">${exercise.secondaryMuscle}</span>
                    </div>
                </div>
            </div>

            <!-- Steps -->
            <div class="detail-section">
                <h4>동작 수행 방법</h4>
                <ol class="guide-steps">
                    ${stepsLi}
                </ol>
            </div>

            <!-- Caution box -->
            <div class="caution-box">
                <div class="caution-box-title">
                    ⚠️ 부상 예방 및 주의사항
                </div>
                <p class="caution-text">${exercise.caution}</p>
            </div>

            <!-- Video reference player -->
            <div class="detail-section">
                <h4>운동 가이드 영상</h4>
                <div class="video-preview-box" onclick="alert('영상 재생을 준비하고 있습니다. (데모 시뮬레이션)')">
                    <!-- Simulated video layout with dark thumbnail -->
                    <div class="video-play-btn">▶</div>
                    <span class="video-duration">${exercise.videoLength}</span>
                    <div style="font-size: 12px; margin-top: 10px; color: var(--color-text-secondary); z-index: 1;">
                        FitFriend 검증 가이드 영상 시청하기
                    </div>
                </div>
            </div>
        `;

        document.getElementById('exercise-drawer').classList.remove('hidden');
    }

    getMuscleHighlightSvg(target) {
        if (target === '가슴') {
            return `<rect x="35" y="40" width="30" height="15" fill="var(--color-primary)" opacity="0.8"/>`;
        } else if (target === '등') {
            return `<rect x="35" y="42" width="30" height="28" fill="var(--color-primary)" opacity="0.8"/>`;
        } else if (target === '어깨') {
            return `
                <circle cx="28" cy="40" r="5" fill="var(--color-primary)" opacity="0.8"/>
                <circle cx="72" cy="40" r="5" fill="var(--color-primary)" opacity="0.8"/>
            `;
        } else if (target === '하체') {
            return `
                <rect x="32" y="80" width="12" height="30" fill="var(--color-primary)" opacity="0.8"/>
                <rect x="56" y="80" width="12" height="30" fill="var(--color-primary)" opacity="0.8"/>
            `;
        } else if (target === '복근') {
            return `<rect x="42" y="55" width="16" height="18" fill="var(--color-primary)" opacity="0.8"/>`;
        } else if (target === '이두') {
            return `
                <circle cx="22" cy="50" r="4" fill="var(--color-primary)" opacity="0.8"/>
                <circle cx="78" cy="50" r="4" fill="var(--color-primary)" opacity="0.8"/>
            `;
        } else if (target === '삼두') {
            return `
                <circle cx="20" cy="46" r="4" fill="var(--color-primary)" opacity="0.8"/>
                <circle cx="80" cy="46" r="4" fill="var(--color-primary)" opacity="0.8"/>
            `;
        }
        return '';
    }

    // LocalStorage Persistent Operations
    saveCurrentRoutine(customName) {
        if (!this.currentGeneratedRoutine) return;
        
        const newRoutine = { ...this.currentGeneratedRoutine };
        newRoutine.name = customName;
        newRoutine.id = Date.now().toString(); // unique ID
        
        this.savedRoutines.unshift(newRoutine); // Put on top
        localStorage.setItem('fitfriend_routines', JSON.stringify(this.savedRoutines));
    }

    loadSavedRoutines() {
        const raw = localStorage.getItem('fitfriend_routines');
        if (raw) {
            try {
                this.savedRoutines = JSON.parse(raw);
            } catch (e) {
                this.savedRoutines = [];
            }
        } else {
            this.savedRoutines = [];
        }
    }

    deleteRoutine(routineId, event) {
        if (event) event.stopPropagation(); // prevent card click bubble trigger
        if (!confirm("정말 이 루틴을 삭제하시겠습니까?")) return;

        this.savedRoutines = this.savedRoutines.filter(r => r.id !== routineId);
        localStorage.setItem('fitfriend_routines', JSON.stringify(this.savedRoutines));
        this.renderSavedRoutines();
        this.showToast('루틴이 삭제되었습니다.');
    }

    loadRoutineDetail(routineId) {
        const found = this.savedRoutines.find(r => r.id === routineId);
        if (found) {
            this.currentGeneratedRoutine = found;
            this.renderResults();
            this.navigateTo('results-view');
        }
    }

    renderSavedRoutines() {
        const container = document.getElementById('saved-routines-list');
        container.innerHTML = '';

        if (this.savedRoutines.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">📂</div>
                    <h3>저장된 루틴이 없습니다.</h3>
                    <p>루틴 생성기에서 운동 루틴을 생성하고 보관함에 추가해 보세요!</p>
                </div>
            `;
            return;
        }

        this.savedRoutines.forEach(routine => {
            const card = document.createElement('div');
            card.className = 'routine-archive-card';
            
            // Build text listing for preview
            const listPreview = routine.items.map(item => item.exercise.name).join(', ');

            card.innerHTML = `
                <div class="arch-header">
                    <div>
                        <h4 class="arch-title">${routine.name}</h4>
                        <span class="arch-date">${routine.date}</span>
                    </div>
                    <div class="arch-badge-group">
                        <span class="arch-badge target">${routine.target}</span>
                        <span class="arch-badge duration">${routine.duration}</span>
                    </div>
                </div>
                <div class="arch-preview">
                    ${listPreview}
                </div>
                <div class="arch-footer">
                    <button class="btn btn-secondary btn-sm" onclick="app.loadRoutineDetail('${routine.id}')">불러오기</button>
                    <button class="btn btn-danger btn-sm" onclick="app.deleteRoutine('${routine.id}', event)">삭제</button>
                </div>
            `;
            container.appendChild(card);
        });
    }

    // Toast feedback helper
    showToast(message) {
        const toast = document.getElementById('toast');
        toast.innerText = message;
        toast.classList.remove('hidden');
        
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 3000);
    }
}

// Instantiate globally so inline onclick events work correctly
const app = new FitFriendApp();
