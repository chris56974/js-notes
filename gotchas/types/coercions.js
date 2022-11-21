export const a = true + false // 1
export const b = 12 / "6"     // 2

export const c = "number" + 15 + 3 // number153
export const d = 15 + 3 + "number" // 18number
export const e = [1] > null        // 
export const f = "foo" + + "bar"
export const g = 'true' == true
export const h = false == 'false'
export const i = null == '';
export const j = !!"false" == !!"true";
export const k = [] + null + 1;
export const l = [1, 2, 3] == [1, 2, 3]
export const m = { } +[] + {} + [1]
export const n = !+[] + [] + ![]
export const o = new Date(0) - 0
export const p = new Date(0) + 0

export const q = 10 + '10' // 1010 (string)
export const r = 10 - '10' // 0    (number)