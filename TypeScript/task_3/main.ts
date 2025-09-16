/// <reference path="./js/crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./js/crud.js";

// Création d'un objet row de type RowElement
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva"
};

// Insérer la ligne et récupérer le nouvel ID
const newRowID: RowID = CRUD.insertRow(row);

// Mise à jour de row avec un champ age
const updatedRow: RowElement = {
  ...row,
  age: 23
};

// Mise à jour de la ligne dans la base
const updatedRowID: RowID = CRUD.updateRow(newRowID, updatedRow);

// Suppression de la ligne
CRUD.deleteRow(updatedRowID);

