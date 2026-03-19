# Configurar Google Sheets para Receber Dados do Formulário

## Passo 1: Criar uma Google Sheet

1. Vai para [Google Sheets](https://sheets.google.com)
2. Clica em "Novo" e cria uma folha chamada "Player Profiles"
3. Adiciona as seguintes colunas no topo (linha 1):
   - A: Timestamp
   - B: Name
   - C: Number
   - D: Study
   - E: Nationality
   - F: Work
   - G: Discovered Frisbee
   - H: Years Experience
   - I: Past Teams
   - J: Fun Fact

## Passo 2: Criar um Google Apps Script

1. Na tua Google Sheet, vai a `Extensões > Apps Script`
2. Apaga o código que está lá
3. Cola este código:

```javascript
// Copiar e colar isto no Google Apps Script

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  try {
    const data = JSON.parse(e.postData.contents);
    
    // Adicionar dados à sheet
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.number || '',
      data.study || '',
      data.nationality || '',
      data.work || '',
      data.discoveredFrisbee || '',
      data.yearsExperience || '',
      data.pastTeams ? data.pastTeams.join(', ') : '',
      data.funFact || ''
    ]);
    
    return ContentService.createTextOutput('Success');
  } catch (error) {
    return ContentService.createTextOutput('Error: ' + error.toString());
  }
}
```

4. Clica no botão "Deploy" (canto superior direito)
5. Seleciona "New deployment"
6. Type: "Web app"
7. Execute as: (a tua conta Google)
8. Who has access: "Anyone"
9. Clica "Deploy"

## Passo 3: Copiar o URL do Script

Após deploying:
1. Vai aparecer uma janela com um URL como: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/usercallback`
2. **Copia** este URL completo

## Passo 4: Adicionar à Aplicação

1. Abre o ficheiro: `src/components/MemberForm.tsx`
2. Procura por esta linha:
```javascript
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/d/YOUR_SCRIPT_ID/usercallback';
```

3. Substitui `YOUR_SCRIPT_ID` pelo URL que copiaste

**EXEMPLO:**
Se o teu URL é: `https://script.google.com/macros/s/AKfycbxXxXxXxXxXxXxXxXxXxXxXxXxXxXx/usercallback`

Então a linha fica:
```javascript
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxXxXxXxXxXxXxXxXxXxXxXxXxXxXx/usercallback';
```

## Passo 5: Testar

1. Vai ao site
2. Clica no botão flutuante (canto inferior direito)
3. Preenche e envia o formulário
4. Volta à tua Google Sheet - os dados devem aparecer!

---

## ⚠️ Notas Importantes:

- Não divulgues o URL do Script publicamente (qualquer um poderia submeter dados)
- Se precisares de mais segurança, podes adicionar verificações no Apps Script
- Se o Script deixar de funcionar, vai a `Extensões > Apps Script` e verifica se o deployment ainda é "Anyone"

## Troubleshooting:

**Se não aparecem dados:**
- Verifica a console do navegador (F12) para erros
- Vai a `Extensões > Apps Script > Executions` para ver se há erros
- Certifica-te que o Sheet tem os headers corretos

**Se o Script dá erro:**
- Vai a `Extensões > Apps Script > Editor`
- Clica em "Execution log" para ver detalhes do erro
