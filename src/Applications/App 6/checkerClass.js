export default class Checker {

    compareEasy = (my, computer) => {
        if (my === computer) {
            return "Das it";
        } else if (Math.abs(my - computer) === 1) {
            if (my - computer === 1) {
                return "Boiling : Smaller"
            } else {
                return "Boiling : Bigger"
            }
        } else if (Math.abs(my - computer) === 2) {
            if (my - computer === 2) {
                return "Hot : Smaller"
            } else {
                return "Hot : Bigger"
            }
        } else if (Math.abs(my - computer) === 3) {
            if (my - computer === 3) {
                return "Warm : Smaller"
            } else {
                return "Warm : Bigger"
            }
        } else if (Math.abs(my - computer) === 4) {
            if (my - computer === 4) {
                return "Cold : Smaller"
            } else {
                return "Cold : Bigger"
            }
        } else if (Math.abs(my - computer) === 4) {
            if (my - computer === 4) {
                return "Cold : Smaller"
            } else {
                return "Cold : Bigger"
            }
        } else if (Math.abs(my - computer) < 8) {
            if (my - computer > 4 && my - computer < 8) {
                return "Frosty : Smaller"
            } else {
                return "Frosty : Bigger"
            }
        } else if (Math.abs(my - computer) >= 8) {
            if (my - computer >= 8) {
                return "Freezing : Smaller"
            } else {
                return "Freezing : Bigger"
            }
        }
    }


    compareMedium = (my, computer) => {
        if (my === computer) {
            return "Das it";
        } else if (Math.abs(my - computer) < 10) {
            if (my - computer > 0 && my - computer < 10) {
                return "Boiling : Smaller"
            } else {
                return "Boiling : Bigger"
            }
        } else if (Math.abs(my - computer) < 20) {
            if (my - computer >= 10 && my - computer < 20) {
                return "Hot : Smaller"
            } else {
                return "Hot : Bigger"
            }
        } else if (Math.abs(my - computer) < 30) {
            if (my - computer >= 20 && my - computer < 30) {
                return "Warm : Smaller"
            } else {
                return "Warm : Bigger"
            }
        } else if (Math.abs(my - computer) < 40) {
            if (my - computer >= 30 && my - computer < 40) {
                return "Cold : Smaller"
            } else {
                return "Cold : Bigger"
            }
        } else if (Math.abs(my - computer) < 50) {
            if (my - computer >= 40 && my - computer < 50) {
                return "Cold : Smaller"
            } else {
                return "Cold : Bigger"
            }
        } else if (Math.abs(my - computer) < 80) {
            if (my - computer >= 50 && my - computer < 80) {
                return "Frosty : Smaller"
            } else {
                return "Frosty : Bigger"
            }
        } else if (Math.abs(my - computer) >= 80) {
            if (my - computer >= 80) {
                return "Freezing : Smaller"
            } else {
                return "Freezing : Bigger"
            }
        }
    }


    compareHard = (my, computer) => {
        if (my === computer) {
            return "Das it";
        } else if (Math.abs(my - computer) < 100) {
            if (my - computer >= 0 && my - computer < 100) {
                return "Boiling : Smaller"
            } else {
                return "Boiling : Bigger"
            }
        } else if (Math.abs(my - computer) < 200) {
            if (my - computer >= 100 && my - computer < 200) {
                return "Hot : Smaller"
            } else {
                return "Hot : Bigger"
            }
        } else if (Math.abs(my - computer) < 300) {
            if (my - computer >= 200 && my - computer < 300) {
                return "Warm : Smaller"
            } else {
                return "Warm : Bigger"
            }
        } else if (Math.abs(my - computer) < 400) {
            if (my - computer >= 300 && my - computer < 400) {
                return "Cold : Smaller"
            } else {
                return "Cold : Bigger"
            }
        } else if (Math.abs(my - computer) < 500) {
            if (my - computer >= 400 && my - computer < 500) {
                return "Cold : Smaller"
            } else {
                return "Cold : Bigger"
            }
        } else if (Math.abs(my - computer) < 800) {
            if (my - computer >= 500 && my - computer < 800) {
                return "Frosty : Smaller"
            } else {
                return "Frosty : Bigger"
            }
        } else if (Math.abs(my - computer) >= 800) {
            if (my - computer >= 800) {
                return "Freezing : Smaller"
            } else {
                return "Freezing : Bigger"
            }
        }
    }

}

