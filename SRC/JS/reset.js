//Funcion para restear valores, elimina todas las filas de tabla2 y valores numericos de tabla1
const resetButton = document.getElementById("reset");

function reset() {
    const table2 = document.getElementById("table2");
    const gastosActuales = document.getElementById("gastos-actuales");
    const saldoActual = document.getElementById("saldo-actual");
    const presupuestoActual = document.getElementById("presupuesto-actual");
  
    while (table2.rows.length > 1) {
      table2.deleteRow(table2.rows.length - 1);
    }
    gastos = [];
  
    gastosActuales.value = "";
    saldoActual.value = "";
    presupuestoActual.value = "";
  }
  