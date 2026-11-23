
// ========================================
// 전역 변수
// ========================================

// 현재 선택된 원소 필터
let currentFilter = "전체";

// 현재 선택된 캐릭터 객체
let selectedCharacter = null;
let selectedWeapon = null;

// ========================================
// 성유물 옵션 데이터
// ========================================

const artifactOptions = {
    "꽃": {
        mainStat: "HPFlat",
        mainStatValue: 4780,
        subStats: []
    },
    "깃털": {
        mainStat: "ATKFlat",
        mainStatValue: 311,
        subStats: []
    },
    "시계": {
        mainStat: null,
        mainStatValue: 0,
        subStats: []
    },
    "성배": {
        mainStat: null,
        mainStatValue: 0,
        subStats: []
    },
    "왕관": {
        mainStat: null,
        mainStatValue: 0,
        subStats: []
    }
};


// ========================================
// 로그인 기능
// ========================================

function checkPassword() {

    const passwordInput = document.getElementById("password");

    if (!passwordInput) {
        console.error("비밀번호 입력창을 찾을 수 없습니다.");
        return;
    }

    const password = passwordInput.value;

    if (password === "NEW1224") {

        document.getElementById("loginScreen").style.display = "none";
        document.getElementById("selScreen").style.display = "block";

        renderCharacters();

    } else {

        alert("비밀번호가 올바르지 않습니다.");

        passwordInput.value = "";
        passwordInput.focus();

    }
}


// ========================================
// 페이지 초기화
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    const passwordInput = document.getElementById("password");

    // Enter 키 로그인
    if (passwordInput) {

        passwordInput.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {
                checkPassword();
            }

        });

    }

});


// ========================================
// 캐릭터 데이터 확인
// ========================================

function isCharacterDataAvailable() {

    if (typeof characters === "undefined" || !Array.isArray(characters)) {

        console.error(
            "캐릭터 데이터를 불러오지 못했습니다. char.js 경로와 script 순서를 확인하세요."
        );

        return false;
    }

    return true;
}


// ========================================
// 캐릭터 목록 표시
// ========================================

function renderCharacters() {

    const list = document.getElementById("characterList");
    const searchInput = document.getElementById("searchInput");

    if (!list || !searchInput) {
        return;
    }

    // 캐릭터 데이터 확인
    if (!isCharacterDataAvailable()) {

        list.innerHTML =
            '<div id="emptyMessage">캐릭터 데이터를 불러오지 못했습니다.</div>';

        return;
    }

    const search = searchInput.value.trim();

    list.innerHTML = "";


    // 원소 및 이름 검색 필터링
    const filteredCharacters = characters.filter(function (character) {

        const matchesElement =
            currentFilter === "전체" ||
            character.element === currentFilter;

        const matchesSearch =
            character.name.includes(search);

        return matchesElement && matchesSearch;

    });


    // 검색 결과가 없을 때
    if (filteredCharacters.length === 0) {

        list.innerHTML =
            '<div id="emptyMessage">검색 결과가 없습니다.</div>';

        return;
    }


    // 캐릭터 카드 생성
    filteredCharacters.forEach(function (character) {

        const card = document.createElement("div");

        card.className = "character-card";


        // 선택된 캐릭터 표시
        if (
            selectedCharacter &&
            selectedCharacter.id === character.id
        ) {

            card.classList.add("selected");

        }


        // 캐릭터 이미지 경로
        const imagePath =
            character.image || `./img/char/${character.id}.webp`;


        // 이미지 생성
        const image = document.createElement("img");

        image.src = imagePath;
        image.alt = character.name;
        image.loading = "lazy";

        image.onerror = function () {

            this.onerror = null;

            const imageArea = this.parentElement;

            if (imageArea) {
                imageArea.textContent = "이미지 준비 중";
            }

        };


        // 이미지 영역
        const imageArea = document.createElement("div");

        imageArea.className = "character-image";
        imageArea.appendChild(image);


        // 캐릭터 정보 영역
        const infoArea = document.createElement("div");

        infoArea.className = "character-info";


        const nameArea = document.createElement("div");

        nameArea.className = "character-name";
        nameArea.textContent = character.name;


        const elementArea = document.createElement("div");

        elementArea.className = "character-element";

        elementArea.textContent =
            `${character.element} 원소 · ${character.rarity ?? ""}성`;


        infoArea.appendChild(nameArea);
        infoArea.appendChild(elementArea);


        card.appendChild(imageArea);
        card.appendChild(infoArea);


        // 카드 클릭 이벤트
        card.addEventListener("click", function () {

            selectCharacter(character);

        });


        list.appendChild(card);

    });

}


// ========================================
// 원소 필터 변경
// ========================================

function setFilter(element, button) {

    currentFilter = element;


    // 기존 활성화 버튼 해제
    document.querySelectorAll(".filter-button").forEach(function (btn) {

        btn.classList.remove("active");

    });


    // 클릭한 버튼 활성화
    if (button) {
        button.classList.add("active");
    }


    renderCharacters();

}


// ========================================
// 캐릭터 선택
// ========================================

function selectCharacter(character) {

    if (!character || !character.id) {
        console.error("올바르지 않은 캐릭터 데이터입니다.");
        return;
    }

    // 선택 캐릭터 저장
    selectedCharacter = character;

    // 선택된 캐릭터를 ALU 화면으로 전달
    goToALU();

}


// ========================================
// 선택된 캐릭터 데이터 반환
// ========================================

function getSelectedCharacter() {

    return selectedCharacter;

}

// ========================================
// ALU 화면 이동
// ========================================

function goToALU() {

    if (!selectedCharacter) {
        alert("먼저 캐릭터를 선택해 주세요.");
        return;
    }

    const selScreen = document.getElementById("selScreen");
    const aluScreen = document.getElementById("aluScreen");

    if (!selScreen || !aluScreen) {
        console.error("화면 요소를 찾을 수 없습니다.");
        return;
    }

    const image = document.getElementById("aluCharacterImage");

    image.src = selectedCharacter.image ||
        `./img/char/${selectedCharacter.id}.webp`;

    selScreen.style.display = "none";
    aluScreen.style.display = "block";

    document.getElementById("aluCharacterName").textContent =
        selectedCharacter.name;

    document.getElementById("aluCharacterElement").textContent =
        selectedCharacter.element + " 원소";

    // 캐릭터 능력치 초기화
	if (typeof initializeALU === "function") {
    initializeALU(selectedCharacter);
}

	// 성유물 슬롯 초기화
	initializeArtifactSlots();

	// 최종 스탯 갱신
	updateFinalStatsDisplay();
    

}


// ========================================
// SEL 화면으로 돌아가기
// ========================================

function backToSEL() {

    document.getElementById("aluScreen").style.display = "none";
    document.getElementById("selScreen").style.display = "block";

}

// ========================================
// 무기 선택 팝업
// ========================================

function openWeaponModal() {

    const modal = document.getElementById("weaponModal");

    modal.style.display = "flex";

    document.getElementById("weaponSearch").value = "";

    renderWeaponList();

}


function closeWeaponModal() {

    document.getElementById("weaponModal").style.display = "none";

}


// ========================================
// 무기 목록 표시
// ========================================

function renderWeaponList() {

    const list = document.getElementById("weaponList");

    if (!list) return;

    list.innerHTML = "";

    if (typeof weapons === "undefined" || !Array.isArray(weapons)) {

        list.textContent = "무기 데이터를 불러오지 못했습니다.";

        return;
    }

    const search =
        document.getElementById("weaponSearch")?.value.trim() || "";

    const filteredWeapons = weapons.filter(weapon =>
        weapon.name.includes(search)
    );

    if (filteredWeapons.length === 0) {

        list.textContent = "검색 결과가 없습니다.";

        return;
    }

    filteredWeapons.forEach(weapon => {

        const card = document.createElement("div");

        card.className = "weapon-card";

        const image = document.createElement("img");

        image.src = weapon.image;
        image.alt = weapon.name;

        const name = document.createElement("p");

        name.textContent = weapon.name;

        const info = document.createElement("small");

        info.textContent =
            `${weapon.baseATK} ATK · ${weapon.rarity}성`;

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(info);

        card.addEventListener("click", function () {

            selectWeapon(weapon);

        });

        list.appendChild(card);

    });

}


// ========================================
// 무기 선택
// ========================================

function selectWeapon(weapon) {

    if (!weapon) return;

    // 선택한 무기 데이터 저장
    selectedWeapon = weapon;

    document.getElementById("selectedWeaponName").textContent =
        weapon.name;

    document.getElementById("selectedWeaponInfo").textContent =
        `${weapon.baseATK} 기초 공격력 · ${weapon.subStat || "부옵션 없음"} ${weapon.subStatValue || 0}`;

    document.getElementById("selectedWeaponImage").src =
        weapon.image || "";

    closeWeaponModal();

    updateFinalStatsDisplay();

    // 선택한 무기 데이터를 ALU 계산기에 전달
    if (typeof updateWeaponStats === "function") {
        updateWeaponStats(weapon);
    }
}

// ========================================
// 성유물 부위별 설정
// ========================================

// 현재 세트를 선택할 부위
let currentArtifactSlot = null;

// 부위별 선택된 성유물 저장
const selectedArtifacts = {
    "꽃": null,
    "깃털": null,
    "시계": null,
    "성배": null,
    "왕관": null
};


// ========================================
// 성유물 슬롯 초기화
// ========================================

function initializeArtifactSlots() {

    const container = document.getElementById("artifactSlots");

    if (!container) return;

    container.innerHTML = "";

    if (
        typeof artifacts === "undefined" ||
        !Array.isArray(artifacts) ||
        typeof artifactSlots === "undefined" ||
        !Array.isArray(artifactSlots)
    ) {
        container.textContent = "성유물 데이터를 불러오지 못했습니다.";
        return;
    }

    artifactSlots.forEach(slot => {

        const row = document.createElement("div");
        row.className = "artifact-slot";

        // 부위 또는 선택된 세트 이미지
        const image = document.createElement("img");

        image.src = slot.image;
        image.alt = slot.name;

        // 부위 정보
        const info = document.createElement("div");
        info.className = "artifact-info";

        const title = document.createElement("strong");
        title.textContent = slot.name;

        const setName = document.createElement("span");
        setName.textContent =
            selectedArtifacts[slot.id]?.name || "세트 선택";

        // 세트 선택 버튼
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = "세트 변경";

        button.addEventListener("click", function () {
            openArtifactModal(slot.id);
        });

        // 옵션 설정 버튼
		const optionButton = document.createElement("button");
		optionButton.type = "button";
		optionButton.textContent = "옵션 설정";

		optionButton.addEventListener("click", function () {
			openArtifactOptionModal(slot.id);
	});

		info.appendChild(title);
		info.appendChild(setName);
		info.appendChild(button);
		info.appendChild(optionButton);

        row.appendChild(image);
        row.appendChild(info);

        container.appendChild(row);

    });

}


// ========================================
// 성유물 세트 선택 팝업
// ========================================

function openArtifactModal(slotId) {

    currentArtifactSlot = slotId;

    let modal = document.getElementById("artifactModal");

    // 팝업이 아직 없다면 생성
    if (!modal) {

        modal = document.createElement("div");
        modal.id = "artifactModal";
        modal.className = "artifact-modal";

       modal.innerHTML = `
    <div class="artifact-modal-content">
        <div class="artifact-modal-header">
            <h3>성유물 세트 선택</h3>
            <button type="button" onclick="closeArtifactModal()">닫기</button>
        </div>

        <input
            type="text"
            id="artifactSearch"
            placeholder="성유물 세트 검색"
            oninput="renderArtifactList()"
        >

        <div id="artifactSetList" class="artifact-set-list"></div>
    </div>
`;

        document.body.appendChild(modal);

    }

    renderArtifactList();

    modal.style.display = "flex";

}


// ========================================
// 성유물 목록 표시
// ========================================

function renderArtifactList() {

    const list = document.getElementById("artifactSetList");

    if (!list) return;

    list.innerHTML = "";

    const searchInput = document.getElementById("artifactSearch");
    const search = searchInput?.value.trim() || "";

    const filteredArtifacts = artifacts.filter(artifact =>
        artifact.name.includes(search)
    );

    if (filteredArtifacts.length === 0) {

        list.textContent = "검색 결과가 없습니다.";
        return;

    }

    filteredArtifacts.forEach(artifact => {

        const card = document.createElement("button");
        card.type = "button";
        card.className = "artifact-set-card";

        const image = document.createElement("img");
        image.src = artifact.image;
        image.alt = artifact.name;

        const name = document.createElement("span");
        name.textContent = artifact.name;

        card.appendChild(image);
        card.appendChild(name);

        card.addEventListener("click", function () {
            selectArtifact(artifact);
        });

        list.appendChild(card);

    });

}


// ========================================
// 성유물 세트 선택
// ========================================

function selectArtifact(artifact) {

    if (!currentArtifactSlot || !artifact) return;

    // 선택한 부위에 세트 저장
    selectedArtifacts[currentArtifactSlot] = artifact;
	updateFinalStatsDisplay();

    // 슬롯 화면 갱신
    initializeArtifactSlots();

    // ALU 계산기에 선택 정보 전달
    if (typeof updateArtifactStats === "function") {
        updateArtifactStats(currentArtifactSlot, artifact);
    }

    closeArtifactModal();

}


// ========================================
// 성유물 팝업 닫기
// ========================================

function closeArtifactModal() {

    const modal = document.getElementById("artifactModal");

    if (modal) {
        modal.style.display = "none";
    }

    currentArtifactSlot = null;
}
	
// ========================================
// 성유물 옵션 설정 팝업
// ========================================

const artifactMainStatOptions = {
    "꽃": ["HPFlat"],
    "깃털": ["ATKFlat"],
    "시계": ["HP", "ATK", "DEF", "EM", "ER"],
    "성배": [
        "HP", "ATK", "DEF", "EM",
        "PyroDMG", "HydroDMG", "ElectroDMG",
        "CryoDMG", "AnemoDMG", "GeoDMG",
        "DendroDMG", "PhysDMG"
    ],
    "왕관": [
        "HP", "ATK", "DEF", "EM",
        "CR", "CD", "HR"
    ]
};

const artifactStatLabels = {
    HP: "HP%",
    ATK: "공격력%",
    DEF: "방어력%",
    HPFlat: "HP 고정 수치",
    ATKFlat: "공격력 고정 수치",
    DEFFlat: "방어력 고정 수치",
    CR: "치명타 확률",
    CD: "치명타 피해",
    EM: "원소 마스터리",
    ER: "원소 충전 효율",
    HR: "치유 보너스",
    PyroDMG: "불 원소 피해",
    HydroDMG: "물 원소 피해",
    ElectroDMG: "번개 원소 피해",
    CryoDMG: "얼음 원소 피해",
    AnemoDMG: "바람 원소 피해",
    GeoDMG: "바위 원소 피해",
    DendroDMG: "풀 원소 피해",
    PhysDMG: "물리 피해"
};

const artifactSubStatOptions = [
    "HP", "ATK", "DEF",
    "HPFlat", "ATKFlat", "DEFFlat",
    "CR", "CD", "EM", "ER"
];

let currentArtifactOptionSlot = null;


// 팝업 생성 및 열기
function openArtifactOptionModal(slotId) {

    currentArtifactOptionSlot = slotId;

    let modal = document.getElementById("artifactOptionModal");

    if (!modal) {

        modal = document.createElement("div");
        modal.id = "artifactOptionModal";
        modal.className = "artifact-modal";

        modal.style.cssText = `
            display: none;
            position: fixed;
            inset: 0;
            z-index: 1000;
            background: rgba(0,0,0,0.75);
            justify-content: center;
            align-items: center;
            padding: 20px;
        `;

        document.body.appendChild(modal);
    }

    const optionData = artifactOptions[slotId];

    const mainOptions = artifactMainStatOptions[slotId];

    const mainSelectHTML = mainOptions.map(stat => `
        <option value="${stat}" ${optionData.mainStat === stat ? "selected" : ""}>
            ${artifactStatLabels[stat]}
        </option>
    `).join("");

    let subStatHTML = "";

    for (let i = 0; i < 4; i++) {

        const subStat = optionData.subStats[i] || {
            stat: "",
            value: 0
        };

        const subOptions = artifactSubStatOptions.map(stat => `
            <option value="${stat}" ${subStat.stat === stat ? "selected" : ""}>
                ${artifactStatLabels[stat]}
            </option>
        `).join("");

        subStatHTML += `
            <div class="artifact-option-row">
                <select class="artifact-sub-stat" data-index="${i}">
                    <option value="">부옵션 선택</option>
                    ${subOptions}
                </select>

                <input
                    type="number"
                    class="artifact-sub-value"
                    data-index="${i}"
                    value="${subStat.value || 0}"
                    min="0"
                    step="0.1"
                >
            </div>
        `;
    }

    const isFixedMainStat =
        slotId === "꽃" || slotId === "깃털";

    modal.innerHTML = `
        <div style="
            width: 100%;
            max-width: 520px;
            max-height: 90vh;
            overflow-y: auto;
            background: #30343e;
            padding: 25px;
            border-radius: 12px;
        ">

            <h2>${slotId} 옵션 설정</h2>

            <h3>주옵션</h3>

            <div class="artifact-option-row">

                <select id="artifactMainStat"
                    ${isFixedMainStat ? "disabled" : ""}>
                    ${mainSelectHTML}
                </select>

                <input
                    type="number"
                    id="artifactMainValue"
                    value="${optionData.mainStatValue}"
                    min="0"
                    step="0.1"
                    ${isFixedMainStat ? "disabled" : ""}
                >

            </div>

            <h3>부옵션</h3>

            ${subStatHTML}

            <div style="
                display: flex;
                justify-content: flex-end;
                gap: 10px;
                margin-top: 20px;
            ">

                <button type="button"
                    onclick="closeArtifactOptionModal()">
                    취소
                </button>

                <button type="button"
                    onclick="saveArtifactOptions()">
                    적용
                </button>

            </div>

        </div>
    `;

    // 팝업 내부 입력창 스타일
    modal.querySelectorAll("select, input").forEach(element => {
        element.style.cssText = `
            padding: 9px;
            border-radius: 5px;
            border: 1px solid #666;
            background: #20232b;
            color: white;
            min-width: 0;
        `;
    });

    modal.querySelectorAll(".artifact-option-row").forEach(row => {
        row.style.cssText = `
            display: grid;
            grid-template-columns: 1fr 120px;
            gap: 10px;
            margin-bottom: 10px;
        `;
    });

    modal.style.display = "flex";
}


// 옵션 저장
function saveArtifactOptions() {

    const slotId = currentArtifactOptionSlot;

    if (!slotId) return;

    const mainStat =
        document.getElementById("artifactMainStat").value;

    const mainStatValue =
        Number(document.getElementById("artifactMainValue").value);

    if (!Number.isFinite(mainStatValue) || mainStatValue < 0) {
        alert("주옵션 수치를 올바르게 입력해 주세요.");
        return;
    }

    const subStats = [];

    const selectedSubStats = new Set();

    for (let i = 0; i < 4; i++) {

        const stat = document.querySelector(
            `.artifact-sub-stat[data-index="${i}"]`
        ).value;

        const value = Number(document.querySelector(
            `.artifact-sub-value[data-index="${i}"]`
        ).value);

        if (!stat) continue;

        if (selectedSubStats.has(stat)) {
            alert("부옵션은 같은 종류를 중복 선택할 수 없습니다.");
            return;
        }

        if (!Number.isFinite(value) || value < 0) {
            alert("부옵션 수치를 올바르게 입력해 주세요.");
            return;
        }

        selectedSubStats.add(stat);

        subStats.push({
            stat: stat,
            value: value
        });
    }

    artifactOptions[slotId] = {
        mainStat: mainStat,
        mainStatValue: mainStatValue,
        subStats: subStats
    };

    closeArtifactOptionModal();

    updateFinalStatsDisplay();

}


// 옵션 팝업 닫기
function closeArtifactOptionModal() {

    const modal = document.getElementById("artifactOptionModal");

    if (modal) {
        modal.style.display = "none";
    }

    currentArtifactOptionSlot = null;

}


// =====================================
// 최종 스탯 화면 갱신
// =====================================

function updateFinalStatsDisplay() {

    if (!selectedCharacter) return;

    // ALU.js 계산 함수 확인
    if (typeof calculateFinalStats !== "function") {
        console.error(
            "계산 함수를 불러오지 못했습니다. ALU.js의 경로와 script 순서를 확인하세요."
        );
        return;
    }

    // 이하 기존 코드 유지
    // 선택된 성유물 객체를 배열로 변환
   // 세트 정보와 옵션 정보를 하나의 객체로 결합
const equippedArtifacts = Object.entries(selectedArtifacts)
    .filter(([slot, artifact]) => artifact !== null)
    .map(([slot, artifact]) => {

        const option = artifactOptions[slot];

        return {
            ...artifact,

            mainStat: option.mainStat,
            mainStatValue: option.mainStatValue,
            subStats: option.subStats
        };

    });

    // 최종 스탯 계산
    const stats = calculateFinalStats(
        selectedCharacter,
        selectedWeapon,
        equippedArtifacts
    );

    // HTML 요소에 스탯 표시
    const displayMap = {
        statHP: ["HP", false],
        statATK: ["ATK", false],
        statDEF: ["DEF", false],

        statCR: ["CR", true],
        statCD: ["CD", true],
        statEM: ["EM", false],
        statER: ["ER", true],
        statHR: ["HR", true],

        statPyro: ["PyroDMG", true],
        statHydro: ["HydroDMG", true],
        statElectro: ["ElectroDMG", true],
        statCryo: ["CryoDMG", true],
        statAnemo: ["AnemoDMG", true],
        statGeo: ["GeoDMG", true],
        statDendro: ["DendroDMG", true],
        statPhys: ["PhysDMG", true]
    };

    Object.entries(displayMap).forEach(([elementId, config]) => {
        const element = document.getElementById(elementId);
        if (!element) return;

        const [statKey, isPercent] = config;
        const value = stats[statKey] ?? 0;

        element.textContent = isPercent
            ? `${value.toFixed(1)}%`
            : Math.round(value).toLocaleString();
    });
}


   
