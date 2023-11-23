function validate(inputID) {
    const input = document.getElementById(inputID);
    const validityState = input.validity;

    if (validityState.valueMissing) {
        input.setCustomValidity(`${input.placeholder} cannot be empty`);
    } else if (validityState.typeMismatch) {
        input.setCustomValidity("Looks like this is not an email")
    } else {
        input.setCustomValidity("");
    }

    input.reportValidity();
}

function clickError(e) {
    const inputs = document.querySelectorAll("input")
    console.log(inputs)
    inputs.forEach(input => {
        validate(input.id)
    })
}