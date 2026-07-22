// Rung Chuông Vàng — Teams Seed
// 200 ghế: xh001 → xh200 (không chia cụm, rải rác tự do)
const TEAMS_SEED = (function () {
    const seed = [];
    for (let i = 1; i <= 228; i++) {
        const padded = String(i).padStart(3, '0');
        seed.push({
            code: 'xh' + padded,
            seatNumber: i,
            displayCode: 'XH' + padded,
        });
    }
    return seed;
})();

window.TEAMS_SEED = TEAMS_SEED;
