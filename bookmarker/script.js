window.onload = showAllMarked = () => {
  if (localStorage.getItem("savedBookmarkArray") === null) {
    document.getElementById("bookmarkStatus").innerText =
      "You don not have saved bookmark";
  } else {
    let storedBookmarker = [];
    storedBookmarker = JSON.parse(localStorage.getItem("savedBookmarkArray"));

    let myTable = document.getElementById("myTable");

    storedBookmarker.forEach((item) => {
      let myTr = document.createElement("tr");
      //console.log("Creating row for:", item.siteName);

      // S.NO
      let colId = document.createElement("td");
      colId.innerHTML = item.id;
      myTr.appendChild(colId);

      // NAME
      let colName = document.createElement("td");
      colName.innerHTML = item.siteName;
      myTr.appendChild(colName);

      //URL
      let colUrl = document.createElement("td");
      let aTag = document.createElement("a");

      aTag.setAttribute("href", item.siteURL);
      aTag.setAttribute("target", "_blank");
      aTag.textContent = item.siteURL;
      colUrl.appendChild(aTag);
      myTr.appendChild(colUrl);

      // BUTTON DELETE

      let colDelBtn = document.createElement("td");
      let btn = document.createElement("BUTTON");
      let t = document.createTextNode("CLICK ME");
      btn.classList.add("delete-btn");
      btn.appendChild(t);
      btn.innerHTML = "Delete";
      btn.id = item.id;
      colDelBtn.appendChild(btn);
      btn.addEventListener("click", deleteBtn);
      myTr.appendChild(colDelBtn);

      myTable.appendChild(myTr);
    });

    updateSerialNumbers();
  }
};

const clearInputfields = () => {
  document.getElementById("siteNameField").value = "";
  document.getElementById("siteURLField").value = "";
};

const getInputData = () => {
  let site_Name = document.getElementById("siteNameField").value;
  let site_URL = document.getElementById("siteURLField").value;
  return {
    name: site_Name,
    Url: site_URL,
  };
};

const validation = () => {
  let site_Name = document.getElementById("siteNameField").value;
  let site_URL = document.getElementById("siteURLField").value;
  if (site_Name == "" || site_URL == "") {
    alert("Fill input fields");
  } else if (isValidUrl(site_URL)) {
    saveBookmark();
  } else {
    alert("Enter a Valid URL");
  }
};

const saveBookmark = () => {
  const { name, Url } = getInputData();

  let savedBookmarkArray = [];

  if (localStorage.getItem("savedBookmarkArray") === null) {
    let myBookmark = {
      id: 1,
      siteName: name,
      siteURL: Url,
    };

    savedBookmarkArray.push(myBookmark);

    localStorage.setItem(
      "savedBookmarkArray",
      JSON.stringify(savedBookmarkArray)
    );
    clearInputfields();
    location.reload();
  } else {
    savedBookmarkArray = JSON.parse(localStorage.getItem("savedBookmarkArray"));

    let myBookmark = {
      id: savedBookmarkArray.length + 1,
      siteName: name,
      siteURL: Url,
    };

    savedBookmarkArray.push(myBookmark);
    localStorage.setItem(
      "savedBookmarkArray",
      JSON.stringify(savedBookmarkArray)
    );

    clearInputfields();
    location.reload();
  }
};

function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (err) {
    return false;
  }
}

const deleteBtn = (e) => {
  let storedBookmarker = JSON.parse(localStorage.getItem("savedBookmarkArray"));
  let index = storedBookmarker.findIndex((item) => item.id == e.target.id);
  if (index !== -1) {
    //splice will only remove 1 item from array
    storedBookmarker.splice(index, 1);
    localStorage.setItem(
      "savedBookmarkArray",
      JSON.stringify(storedBookmarker)
    );

    // get explaination for below
    let row = e.target.parentNode.parentNode;
    row.parentNode.removeChild(row);
    updateSerialNumbers();
  }
};
// Updating the serial numbers
const updateSerialNumbers = () => {
  document.querySelectorAll("#myTable tr").forEach((row, index) => {
    row.querySelector("td").innerHTML = index + 1;
  });
};
