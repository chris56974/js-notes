// All c()'s are hoisted to the top

function c() { return 3 }

c() // 4 (not 3)

function c() { return 4 }