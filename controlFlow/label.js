const foo = [1, 2, 3]

loop1: for (item of foo) {
	loop2: for (item of foo) {
		break          // breaks out of loop 2 to continue the iteration on loop 1
		break loop2    // ibid
		continue       // continue onto the next iteration of loop 2
		continue loop2 // ibid

		break loop1    // breaks out of loop 1, kills all iteration
		continue loop1 // continues the next iteration of loop1 and ignores the rest of loop2s iteration
	}
}