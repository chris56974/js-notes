/** 
 * Switch is a statement in JS not an expression
 * You need to break otherwise it will continue to the next case.
 */
switch (expression) {
  case condition:
		result = "without block statements, result can be overwritten"
    break;
  case "blue": {
		const result = "result can't be overwritten anymore" 
		return result
  }
  default:
    return "runs if nothing matched"
}

switch ("jeff") {
  case "j":
		result = "without block statements, result can be overwritten"
    break;
  case "jeff": {
		const result = "result can't be overwritten anymore" 
		return result // must be done in a function
  }
  default:
    return "runs if nothing matched"
}