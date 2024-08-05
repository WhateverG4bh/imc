// JavaScript for IMC Calculation with animations
function calculateIMC() {
    const name = document.getElementById('name').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const gender = document.querySelector('input[name="gender"]:checked').value;

    if (!weight || !height) {
        alert('Please enter valid weight and height');
        return;
    }

    const imc = weight / (height * height);
    let condition = '';

    if (gender === 'F') {
        if (imc < 19.1) {
            condition = 'Abaixo do peso';
        } else if (imc <= 25.8) {
            condition = 'No peso normal';
        } else if (imc <= 27.3) {
            condition = 'Marginalmente acima do peso';
        } else if (imc <= 32.3) {
            condition = 'Acima do peso ideal';
        } else {
            condition = 'Obeso';
        }
    } else {
        if (imc < 20.7) {
            condition = 'Abaixo do peso';
        } else if (imc <= 26.4) {
            condition = 'No peso normal';
        } else if (imc <= 27.8) {
            condition = 'Marginalmente acima do peso';
        } else if (imc <= 31.1) {
            condition = 'Acima do peso ideal';
        } else {
            condition = 'Obeso';
        }
    }

    let weightChange = 0;
    if (condition !== 'No peso normal') {
        const normalWeightRange = gender === 'F' ? [19.1, 25.8] : [20.7, 26.4];
        const lowerNormalWeight = normalWeightRange[0] * height * height;
        const upperNormalWeight = normalWeightRange[1] * height * height;

        if (imc < normalWeightRange[0]) {
            weightChange = lowerNormalWeight - weight;
        } else if (imc > normalWeightRange[1]) {
            weightChange = upperNormalWeight - weight;
        }
    }

    document.getElementById('result').innerHTML = `
        <h2>Resultado</h2>
        <p>Nome: ${name}</p>
        <p>IMC: ${imc.toFixed(2)}</p>
        <p>Condição: ${condition}</p>
        <p>Você deve ${weightChange >= 0 ? 'ganhar' : 'perder'} ${Math.abs(weightChange.toFixed(2))} Kg para ficar na condição normal.</p>
    `;
}
