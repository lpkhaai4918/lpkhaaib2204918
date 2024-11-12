function solveQuadratic() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);
    const resultElement = document.getElementById("result");

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        resultElement.textContent = "Vui lòng nhập đầy đủ các hệ số!";
        return;
    }

    const delta = b * b - 4 * a * c;

    if (delta < 0) {
        resultElement.textContent = "Phương trình vô nghiệm.";
    } else if (delta === 0) {
        const x = -b / (2 * a);
        resultElement.textContent = `Phương trình có nghiệm kép: x = ${x}`;
    } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        resultElement.textContent = `Phương trình có hai nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`;
    }
}
