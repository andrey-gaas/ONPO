module.exports = function(name, email, phone, location, course, wishes) {
  return `
    <table>
      <tr>
        <td colspan="2">
          <h1>Заявка на обучение</h1>
        </td>
      </tr>
      <tr>
        <td>ФИО:</td>
        <td>${name}</td>
      </tr>
      <tr>
        <td>E-Mail:</td>
        <td>${email}</td>
      </tr>
      <tr>
        <td>Телефон:</td>
        <td>${phone}</td>
      </tr>
      <tr>
        <td>Место жительства:</td>
        <td>${location}</td>
      </tr>
      <tr>
        <td>Курс:</td>
        <td>${course}</td>
      </tr>
      <tr>
        <td>Пожелания:</td>
        <td>${wishes}</td>
      </tr>
    </table>
  `;
}