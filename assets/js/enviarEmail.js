function enviarEmail(indicacao) {
    const indicacaoObj = indicacao
    
    Email.send({
        SecureToken : "fc940adb-8998-4187-8d89-b4796ae0c915",
        To : 'viacertamaracanau@gmail.com',
        From : "viacertamaracanau@gmail.com",
        Subject : `${indicacaoObj.nomeA}`,
        Body : `
        <table>
            <thead>
                <tr>
                    <th>Nº</th>
                    <th>Nome</th>
                    <th>Telefone</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="number">1</td>
                    <td>${indicacaoObj.nomeI[0]}</td>
                    <td>${indicacaoObj.telefone[0]}</td>
                </tr>

                <tr>
                    <td class="number">2</td>
                    <td>${indicacaoObj.nomeI[1]}</td>
                    <td>${indicacaoObj.telefone[1]}</td>
                </tr>

                <tr>
                    <td class="number">3</td>
                    <td>${indicacaoObj.nomeI[2]}</td>
                    <td>${indicacaoObj.telefone[2]}</td>
                </tr>

                <tr>
                    <td class="number">4</td>
                    <td>${indicacaoObj.nomeI[3]}</td>
                    <td>${indicacaoObj.telefone[3]}</td>
                </tr>

                <tr>
                    <td class="number">5</td>
                    <td>${indicacaoObj.nomeI[4]}</td>
                    <td>${indicacaoObj.telefone[4]}</td>
                </tr>
                
                <tr>
                    <td class="number">6</td>
                    <td>${indicacaoObj.nomeI[5]}</td>
                    <td>${indicacaoObj.telefone[5]}</td>
                </tr>

                <tr>
                    <td class="number">7</td>
                    <td>${indicacaoObj.nomeI[6]}</td>
                    <td>${indicacaoObj.telefone[6]}</td>
                </tr>

                <tr>
                    <td class="number">8</td>
                    <td>${indicacaoObj.nomeI[7]}</td>
                    <td>${indicacaoObj.telefone[7]}</td>
                </tr>

                <tr>
                    <td class="number">9</td>
                    <td>${indicacaoObj.nomeI[8]}</td>
                    <td>${indicacaoObj.telefone[8]}</td>
                </tr>

                <tr>
                    <td class="number">10</td>
                    <td>${indicacaoObj.nomeI[9]}</td>
                    <td>${indicacaoObj.telefone[9]}</td>
                </tr>
            </tbody>
        </table>

        <style>
            table {
                border-collapse: collapse;
                border: 1px solid black;
                font-family: 'Segoe UI';
            }

            th, td {
                border: 1px solid black;
                padding: .5rem 2rem;
                text-align: center;
            }

            .number {
                font-weight: 600;
            }
        </style>
        `
    }).then(
      message => alert(message)
    )

    page = 'inicio'
    router()
}