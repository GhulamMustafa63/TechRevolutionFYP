import { useState } from "react";

import { projectFirestore } from "../../firebase/config";

export default function TransactionForm({ uid }) {
  const [file, setFile] = useState();

  const [json, setJson] = useState([]);

  const fileReader = new FileReader();

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const csvFileToArray = (string) => {
    const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
    const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

    const array = csvRows.map((i) => {
      const values = i.split(",");
      const obj = csvHeader.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
      }, {});
      return obj;
    });

    return array;
  };
  const PostData = async (e) => {
    e.preventDefault();

    for (let i = 0; i < json.length - 1; i++) {
      projectFirestore
        .collection("Products")
        .add(json[i])
        .then()
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = function (event) {
        const text = event.target.result;
        console.log(text);
        const json = csvFileToArray(text);
        console.log(json);
        setJson(json);
      };

      fileReader.readAsText(file);
    }
  };

  return (
    <>
      <h3>Upload Inventory Sheet</h3>

      <form>
        <input
          type={"file"}
          id={"csvFileInput"}
          accept={".csv"}
          onChange={handleOnChange}
        />

        <button
          onClick={(e) => {
            handleOnSubmit(e);
          }}
        >
          Convert to JSON
        </button>
        <button
          onClick={(e) => {
            PostData(e);
          }}
        >
          Save
        </button>
      </form>
    </>
  );
}
