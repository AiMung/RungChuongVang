/**
 * Rung Chuông Vàng — Seat Definitions
 * =====================================
 * 130 ghế: mã xh001 → xh130
 * Không chia theo cụm. Thí sinh ngồi vị trí bất kỳ, nhập mã ghế để đăng nhập.
 */

const TOTAL_SEATS = 200;

/**
 * parseCode(rawInput)
 * Chấp nhận: "xh031", "XH031", "xh31", "31", "031"
 * Trả về: { seatNumber, code, displayCode } hoặc null nếu không hợp lệ
 */
function parseCode(rawInput) {
    if (!rawInput || typeof rawInput !== 'string') return null;
    const s = rawInput.trim().toLowerCase();
    let num = NaN;

    if (/^xh(\d+)$/.test(s)) {
        num = parseInt(s.slice(2), 10);
    } else if (/^\d+$/.test(s)) {
        num = parseInt(s, 10);
    } else {
        return null;
    }

    if (isNaN(num) || num < 1 || num > TOTAL_SEATS) return null;

    const padded = String(num).padStart(3, '0');
    return {
        seatNumber: num,
        code: 'xh' + padded,
        displayCode: 'XH' + padded,
        // Legacy compatibility
        clusterIndex: null,
        clusterName: null,
        slot: num,
    };
}

window.TOTAL_SEATS = TOTAL_SEATS;
window.parseCode = parseCode;
