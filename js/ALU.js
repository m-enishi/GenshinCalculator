
// =====================================
// 스탯 목록
// =====================================

const STAT_KEYS = [
    "HP", "ATK", "DEF",
    "CR", "CD", "HR", "EM", "ER",
    "PyroDMG", "HydroDMG",
    "AnemoDMG", "ElectroDMG",
    "DendroDMG", "CryoDMG",
    "GeoDMG", "PhysDMG",
    "AllDMG"
];


// =====================================
// 스탯 초기화
// =====================================

function createEmptyStats() {
    const stats = {};

    STAT_KEYS.forEach(stat => {
        stats[stat] = 0;
    });

    stats.HPFlat = 0;
    stats.ATKFlat = 0;
    stats.DEFFlat = 0;

    return stats;
}


// =====================================
// 스탯 추가
// =====================================

function addStat(stats, stat, value) {
    if (
        stat &&
        typeof value === "number" &&
        Number.isFinite(value) &&
        Object.prototype.hasOwnProperty.call(stats, stat)
    ) {
        stats[stat] += value;
    }
}


// =====================================
// 무기 스탯 계산
// =====================================

function calculateWeaponStats(weapon) {
    const bonuses = createEmptyStats();

    if (!weapon) return bonuses;

    addStat(bonuses, weapon.subStat, weapon.subStatValue);
    addStat(bonuses, weapon.passiveStat, weapon.passiveStatValue);

    return bonuses;
}


// =====================================
// 성유물 스탯 계산
// =====================================

function calculateArtifactStats(equippedArtifacts) {

    const bonuses = createEmptyStats();

    if (!Array.isArray(equippedArtifacts)) {
        return bonuses;
    }

    const setCounts = {};

    equippedArtifacts.forEach(artifact => {

        if (!artifact) return;

        // 주옵션
        addStat(
            bonuses,
            artifact.mainStat,
            artifact.mainStatValue
        );

        // 부옵션
        (artifact.subStats ?? []).forEach(subStat => {

            addStat(
                bonuses,
                subStat.stat,
                subStat.value
            );

        });

        // 성유물 세트 개수
        if (artifact.id) {

            setCounts[artifact.id] =
                (setCounts[artifact.id] ?? 0) + 1;

        }

    });


    // 2세트 효과
    Object.entries(setCounts).forEach(([setId, count]) => {

        const set = artifacts.find(item => item.id === setId);

        if (set && count >= 2 && set.twoPiece) {

            addStat(
                bonuses,
                set.twoPiece.stat,
                set.twoPiece.value
            );

        }

    });

    return bonuses;

}

// =====================================
// 최종 스탯 계산
// =====================================

function calculateFinalStats(character, weapon, equippedArtifacts) {
    if (!character) {
        throw new Error("캐릭터가 선택되지 않았습니다.");
    }

    const result = createEmptyStats();

    const weaponBonus = calculateWeaponStats(weapon);
    const artifactBonus = calculateArtifactStats(equippedArtifacts);

    const bonuses = createEmptyStats();

    // 무기 및 성유물 증가량 합산
    STAT_KEYS.forEach(stat => {
        bonuses[stat] =
            weaponBonus[stat] + artifactBonus[stat];
    });

    bonuses.HPFlat =
        weaponBonus.HPFlat + artifactBonus.HPFlat;

    bonuses.ATKFlat =
        weaponBonus.ATKFlat + artifactBonus.ATKFlat;

    bonuses.DEFFlat =
        weaponBonus.DEFFlat + artifactBonus.DEFFlat;


    // 캐릭터 돌파 스탯
    if (character.ascensionStat) {
        addStat(
            bonuses,
            character.ascensionStat.stat,
            character.ascensionStat.value
        );
    }


    // 캐릭터 기본 스탯
    const base = character.baseStats;


    // HP
    result.HP =
        base.HP * (1 + bonuses.HP / 100)
        + bonuses.HPFlat;


    // ATK
    result.ATK =
        (base.ATK + (weapon?.baseATK ?? 0))
        * (1 + bonuses.ATK / 100)
        + bonuses.ATKFlat;


    // DEF
    result.DEF =
        base.DEF * (1 + bonuses.DEF / 100)
        + bonuses.DEFFlat;


    // 나머지 스탯
    [
        "CR", "CD", "HR", "EM", "ER",
        "PyroDMG", "HydroDMG",
        "AnemoDMG", "ElectroDMG",
        "DendroDMG", "CryoDMG",
        "GeoDMG", "PhysDMG"
    ].forEach(stat => {
        result[stat] =
            (base[stat] ?? 0) + bonuses[stat];
    });


    // 모든 피해 증가
    [
        "PyroDMG", "HydroDMG",
        "AnemoDMG", "ElectroDMG",
        "DendroDMG", "CryoDMG",
        "GeoDMG", "PhysDMG"
    ].forEach(stat => {
        result[stat] += bonuses.AllDMG;
    });

    return result;
}
