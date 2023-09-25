// Função para calcular os PVs com base no Nível e Físico
function calcularPVs() {
    // Obtenha os valores de Nível e Físico
    var nivel = parseInt(document.getElementById("nivel").value, 10);
    var fisico = parseInt(document.getElementById("fisico").value, 10);

    // Realize o cálculo dos PVs
    var pvs = (10 + fisico) * nivel;

    // Atualize o campo "pvMax" com o valor calculado
    document.getElementById("pvMax").value = pvs;
}

// Adicione um evento que chama a função calcularPVs quando o Nível ou Físico mudar
document.getElementById("nivel").addEventListener("change", calcularPVs);
document.getElementById("fisico").addEventListener("change", calcularPVs);
