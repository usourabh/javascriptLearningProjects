window.onload = showAllMarked = () => {
  if (localStorage.getItem("savedBookmarkArray") === null) {
    document.getElementById("bookmarkStatus").innerText =
      "You don not have saved bookmark";
  } else {
    let storedBookmarker = [];
    storedBookmarker = JSON.parse(localStorage.getItem("savedBookmarkArray"));

    let myTable = document.getElementById("myTable");
    console.log("Stored Bookmarks:", storedBookmarker);

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
      colDelBtn.appendChild(btn);
      myTr.appendChild(colDelBtn);

      // let colDelete = document.createElement("td");
      // let deleteBtn = document.createElement("button");
      // deleteBtn.innerHTML = "Delete";
      // //button.addEventListener("click", () => {
      // //   alert(`Button clicked for ${item.siteName}`);
      // // });
      // colDelete.appendChild(button);
      // myTr.appendChild(colDelete);

      myTable.appendChild(myTr);
    });
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

const deleteBtn = () => {};
