document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('externalMessage').innerText = '--esse texto foi carregado a partir do js--';

    document.getElementById('sumButton').addEventListener('click', function() {
        var num1 = parseFloat(document.getElementById('num1').value);
        var num2 = parseFloat(document.getElementById('num2').value);
        if (!isNaN(num1) && !isNaN(num2)) {
            var result = num1 + num2;
            alert(`O resultado da soma é: ${result}`);
        } else {
            alert('Por favor, insira valores numéricos válidos.');
        }
    });

    document.getElementById('showNameButton').addEventListener('click', function() {
        var fullName = document.getElementById('fullNameInput').value;
        alert(`O Nome Completo é: "${fullName}".`);
        document.getElementById('letterCount').innerText = `Quantidade de letras: ${fullName.length}`;
    });

    var lampada = document.getElementById('lampada');
    lampada.addEventListener('mouseenter', function() {
        this.src = 'turnon.png';
    });

    lampada.addEventListener('mouseleave', function() {
        this.src = 'turnoff.png';
    });

    document.getElementById('greetingButton').addEventListener('click', function() {
        var nome = document.getElementById('nomeInput').value;
        var sobrenome = document.getElementById('sobrenomeInput').value;
        alert(`Olá ${nome} ${sobrenome}`);
    });

    document.getElementById('cpf').addEventListener('input', function() {
        var cpf = this.value.replace(/\D/g, '');
        var cpfFormatado = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
        document.getElementById('cpfFormatado').innerText = cpfFormatado;
    });

    document.getElementById('cpfPoint').addEventListener('input', function() {
        var cpfSemPontuacao = this.value.replace(/[.-]/g, '');
        document.getElementById('cpfSemPontuacao').innerText = cpfSemPontuacao;
    });

    var colorButtons = document.querySelectorAll('.colorButton');
    colorButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            document.body.style.backgroundColor = this.dataset.color;
        });
    });
});
