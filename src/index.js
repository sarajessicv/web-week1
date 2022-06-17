if (document.readyState !== "loading") {
  main();
} else {
  document.addEventListener("DOMContentLoaded", main());
}

function main() {
  var counter = 0;
  const addCommentButton = document.getElementById("add-comment");
  const commentList = document.getElementById("commentList");
  const text = document.getElementById("text_area");

  addCommentButton.addEventListener("click", function () {
    const comment = text.value;

    const listItem = document.createElement("li");

    listItem.innerHTML = comment;
    commentList.appendChild(listItem);

    text.value = "";
    counter++;
  });

  const removeListButton = document.getElementById("remove-comments");
  removeListButton.addEventListener("click", function () {
    if (
      window.confirm("Do you really want to remove all the list items?") ===
      true
    ) {
      for (var index = 0; index < counter; index++) {
        commentList.removeChild(commentList.lastChild);
      }
    } else {
      console.log("Jatketaan elämäää");
    }
  });
}
