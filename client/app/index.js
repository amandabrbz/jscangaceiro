const tbody = document.querySelector("table tbody");
const forms = document.querySelector(".form");
const tr = document.createElement("tr");

const campos = [
  document.querySelector("#data"),
  document.querySelector("#valor"),
  document.querySelector("#quantidade"),
];

forms.addEventListener("submit", (event) => {
  event.preventDefault();

  campos.forEach(function (campo) {
    const td = document.createElement("td");
    td.textContent = campo.value;
    tr.appendChild(td);
  });

  const tdVolume = document.createElement("td");
  tdVolume.textContent = campos[1].value * campos[2].value;
  tr.appendChild(tdVolume);

  tbody.appendChild(tr);

  campos[0].value = "";
  campos[1].value = 1;
  campos[2].value = 0;
  campos[0].focus();
});
